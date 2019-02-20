import React, { useState, useEffect } from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { NavigationProps, TCard } from './types'
import { CardsChooser } from './CardsChooser'
import { RankChooser } from './useCardState'
import {
  loadCppModule,
  PortedCppModule,
  StrategyResult,
  CardRaw,
} from './loadCppModule'
import { Divider } from './Divider'
import { RANK, SUIT } from './constants'

let strategyModule: PortedCppModule | null = null

function cardsToString(cards: TCard[]) {
  return cards
    .map(card => {
      if (card.rank === 'X') {
        // big joker and small joker
        return card.suit === 'R' ? 'BJ' : 'SJ'
      }
      return card.rank + card.suit
    })
    .join('')
}

function parseRawCard(cardRaw: CardRaw, wildCard: TCard): TCard {
  if (cardRaw.length !== 2) {
    throw new Error('CardRaw should have a length of 2')
  }

  if (cardRaw === 'BJ') {
    return {
      rank: 'X',
      suit: 'R',
    }
  }
  if (cardRaw === 'SJ') {
    return {
      rank: 'X',
      suit: 'B',
    }
  }
  if (cardRaw === '??') {
    return wildCard
  }

  return {
    rank: cardRaw[0],
    suit: cardRaw[1],
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  borderBox: {
    borderWidth: 2,
    borderColor: 'black',
  },
})

export function Home({ screenProps }: NavigationProps) {
  useEffect(() => {
    loadCppModule().then(cppModule => {
      strategyModule = cppModule
      // uncomment the following to test the module
      // console.log(
      //   strategyModule.calc(
      //     'BJADKDJH0S0C0CAH8D7S7H4H4D4H3D3C2H9C7CAH6C5CKSQSJS0S9S',
      //     'A',
      //   ),
      // )
    })
  }, [])
  const { rank, setRank, cards, clearCards, addCard } = screenProps
  const [strategyResult, setResult]: [
    null | StrategyResult,
    (result: StrategyResult) => void
  ] = useState(null) as any
  return (
    <ScrollView
      style={[styles.borderBox, { height: '100%' }]}
      contentContainerStyle={{
        height: '100%',
      }}
    >
      <Text style={{ fontSize: 20, padding: 4, textAlign: 'center' }}>
        拆牌策略计算结果
      </Text>
      <Divider />
      <ScrollView
        style={[
          styles.container,
          {
            flex: 1,
          },
        ]}
      >
        {strategyResult && (
          <>
            <Text>{`最少${strategyResult.minHands}手可以出完`}</Text>
            <Text>
              {JSON.stringify(
                strategyResult.solutions.map(solution => {
                  return solution.actualHands.map(hand =>
                    hand.map(card => parseRawCard(card, { rank, suit: 'H' })),
                  )
                }),
              )}
            </Text>
          </>
        )}
      </ScrollView>
      <Divider />
      <View
        style={[
          styles.container,
          {
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <RankChooser rank={rank} setRank={setRank} />
      </View>
      <Divider />
      <View
        style={[
          styles.container,
          {
            flex: 3,
          },
        ]}
      >
        <CardsChooser cards={cards} addCard={addCard} clearCards={clearCards} />
      </View>
      <Divider />
      <View
        style={[
          styles.container,
          {
            height: 34,
            justifyContent: 'center',
            padding: 0,
          },
        ]}
      >
        <Button
          title="计算策略"
          onPress={() => {
            if (strategyModule != null) {
              const cardsStr = cardsToString(cards)
              console.log(cardsStr)
              setResult(strategyModule.calc(cardsStr, rank))
            }
          }}
        />
      </View>
    </ScrollView>
  )
}

Home.navigationOptions = {
  title: '掼蛋策略计算',
}