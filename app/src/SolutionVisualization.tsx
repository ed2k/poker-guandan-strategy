import React, { memo } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Divider } from './Divider'
import { CardDeck } from './Card'
import { commonStyles } from './styles'
import { parseRawCard } from './cardUtils'
import { StrategyResultState } from './useResultState'
import { ReactComponent as Close } from './icons/close.svg'

interface SolutionVisualizationProps {
  strategyResult: StrategyResultState
  rank: string
  onClose: () => void
}

interface WindowSizeToggleProps {
  toggleWindowSize: () => void
  style: StyleProp<ViewStyle>
}
const WindowSizeToggle: React.FunctionComponent<
  WindowSizeToggleProps
> = props => (
  <TouchableOpacity
    style={[
      {
        width: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      props.style,
    ]}
    onPress={props.toggleWindowSize}
  >
    <Close />
  </TouchableOpacity>
)

interface SolutionWindowProps {
  rank: string
  strategyResult: StrategyResultState
}
const SolutionWindow: React.FunctionComponent<SolutionWindowProps> = props => (
  <ScrollView
    style={[
      commonStyles.container,
      {
        flex: 2,
      },
    ]}
  >
    {props.strategyResult &&
      (props.strategyResult === 'loading' ? (
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {/* 计算中... */}
        </Text>
      ) : (
        <>
          <Text>{`最少${props.strategyResult.minHands}手可以出完`}</Text>
          <View>
            {(() => {
              const solutionsCount = props.strategyResult.solutions.length
              const hiddenMoreSolutions = solutionsCount - 10
              return (
                <>
                  {props.strategyResult.solutions
                    .slice(0, 10)
                    .map((solution, solutionIndex) => (
                      <CardDeck
                        key={solutionIndex}
                        hands={solution.asHands.map(hand =>
                          hand.map(card =>
                            parseRawCard(card, {
                              rank: props.rank,
                              suit: 'H',
                            }),
                          ),
                        )}
                        style={{
                          margin: 6,
                        }}
                      />
                    ))}
                  {hiddenMoreSolutions > 0 &&
                    `还有${hiddenMoreSolutions}种方案可以达到同样的最少手数`}
                </>
              )
            })()}
          </View>
        </>
      ))}
  </ScrollView>
)
const MemoedSolutionWindow = memo(SolutionWindow)

const SolutionVisualization: React.FunctionComponent<
  SolutionVisualizationProps
> = ({ strategyResult, rank, onClose }) => (
  <>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'center',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            padding: 4,
            textAlign: 'center',
          }}
        >
          拆牌策略计算结果
        </Text>
      </View>
      {/* <View style={{ width: 2, backgroundColor: 'black' }} /> */}
      <WindowSizeToggle
        toggleWindowSize={onClose}
        style={{
          // to the right and centered
          position: 'absolute',
          right: 0,
          height: '100%',
        }}
      />
    </View>
    <Divider />
    <MemoedSolutionWindow strategyResult={strategyResult} rank={rank} />
  </>
)

export default React.memo(SolutionVisualization)
