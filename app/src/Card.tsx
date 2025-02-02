import React from 'react'
import {
  Image,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import nekoImg from './imgs/neko-40x40.png'
import {
  CardRaw,
  CardRawLoose,
  NATURAL_RANK,
} from './strategy/models/const'
import { Suit, SUIT } from './strategy/models/Suite'

const STACKED_CARD_MARGIN = 52
const STACKED_CARD_MARGIN_LARGE = 68

const styles = StyleSheet.create({
  card: {
    width: 74,
    height: 100,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 4,
  },
  cardLarge: {
    width: 100,
    height: 134,
  },
  cardStacked: {
    marginRight: -STACKED_CARD_MARGIN,
    marginBottom: -STACKED_CARD_MARGIN,
  },
  cardStackedLarge: {
    marginRight: -STACKED_CARD_MARGIN_LARGE,
    marginBottom: -STACKED_CARD_MARGIN_LARGE,
  },
  cardLabel: {
    fontFamily: 'monospace',
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',
    width: 20,
    marginTop: 4,
    fontWeight: 'bold',
  },
  cardLabelLarge: {
    fontSize: 24,
    lineHeight: 24,
    width: 30,
  },
  cardCuteImage: {
    position: 'absolute',
    left: 'calc(50% - 20px)',
    top: 'calc(50% - 20px)',
    width: 40,
    height: 40,
  },
  cardCuteImageLarge: {
    width: 56,
    height: 56,
    left: 'calc(50% - 28px)',
    top: 'calc(50% - 28px)',
  },
  overlayWhenDisabled: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
})

export function Card({
  rank,
  suit,
  isStacked,
  disabled,
  style,
  large,
}: CardRawLoose & {
  isStacked?: boolean
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  large?: boolean
}) {
  const rankDef = NATURAL_RANK[rank]
  const suitDef = SUIT[suit as Suit] // TODO: fix type force cast
  return (
    <View
      style={[
        styles.card,
        large && styles.cardLarge,
        isStacked && styles.cardStacked,
        isStacked && large && styles.cardStackedLarge,
        style,
      ]}
    >
      <Text
        style={[
          styles.cardLabel,
          large && styles.cardLabelLarge,
          { color: suitDef.color },
        ]}
      >
        {rankDef.label === '10'
          ? rankDef.label
          : rankDef.label.split('').join('\n')}
        {'\n'}
        {suitDef.label}
      </Text>
      <Image
        source={{ uri: nekoImg }}
        style={[styles.cardCuteImage, large && styles.cardCuteImageLarge]}
      />
      {disabled && <View style={styles.overlayWhenDisabled} />}
    </View>
  )
}

const HAND_MARGIN = 13
const CONTAINER_PADDING = 0

interface CardDeckProps {
  cards?: CardRaw[]
  hands?: CardRaw[][]
  style?: StyleProp<ViewStyle>
  large?: boolean
}
export const CardDeck: React.FunctionComponent<CardDeckProps> = ({
  cards,
  hands,
  style,
  large,
}) => {
  const stackedCardMargin = large
    ? STACKED_CARD_MARGIN_LARGE
    : STACKED_CARD_MARGIN

  return (
    <ScrollView
      style={style}
      contentContainerStyle={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: CONTAINER_PADDING,
        paddingRight: stackedCardMargin + CONTAINER_PADDING, // cancel margin of hands
        paddingBottom: stackedCardMargin + CONTAINER_PADDING,
      }}
    >
      {!!cards &&
        cards.map((card, index) => (
          <Card
            key={card.rank + card.suit + index}
            {...card}
            isStacked
            large={large}
          />
        ))}
      {!!hands &&
        hands.map((hand, handID) => {
          const handNode = hand.map((card, cardID) => (
            <Card
              key={card.rank + card.suit + cardID}
              {...card}
              isStacked
              large={large}
            />
          ))

          if (handID > 0) {
            // no wrapping
            return (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  marginRight: HAND_MARGIN,
                }}
                key={handID}
              >
                {handNode}
              </View>
            )
          } else {
            // initial hand can be long, allow wrapping as normal
            return (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginRight: HAND_MARGIN,
                  maxWidth: '100%', // set max width to enable wrapping
                }}
                key={handID}
              >
                {handNode}
              </View>
            )
          }
        })}
    </ScrollView>
  )
}
