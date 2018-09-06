import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, button } from '@storybook/addon-knobs/react'

import Button from '../components/Button'
import EditCard from '../components/EditCard'
import PointButtonBar from '../components/PointButtonBar'
import GameScreen from '../components/GameScreen'
import StartScreen from '../components/StartScreen'
import PlayerHeader from '../components/PlayerHeader'
import RoundsBar from '../components/RoundsBar'
import SummaryCard from '../components/SummaryCard'
import SummaryScreen from '../components/SummaryScreen'

// const Wrapper = styled.section`
//   width: ${props => (props.width ? props.width : '360')}px;
//   margin: 0 auto;
//   border: 1px solid #eee;
//   border-radius: 4px;
//   padding: 10px;
// `

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onClick={action('clicked')}>
      {text('Button text', 'Click me')}
    </Button>
  ))

storiesOf('PointButtonBar', module).add('default', () => (
  <PointButtonBar onClick={action('onClick')} />
))

storiesOf('EditCard', module)
  .addDecorator(withKnobs)
  .add('with no points', () => (
    <EditCard
      title={text('Title', 'Some text')}
      score={number('Score', 0, {
        range: true,
        min: 0,
        max: 50,
        step: 1,
      })}
      onUpdate={action('onUpdate')}
    />
  ))
  .add('with many points', () => {
    return (
      <EditCard
        title="Some title"
        score={99999999}
        onUpdate={action('onUpdate')}
      />
    )
  })
  .add('with extra long title', () => (
    <EditCard
      title="Some suuuuuuuuuuper looooooooong title here"
      score={20}
      onUpdate={action('onUpdate')}
    />
  ))

storiesOf('StartScreen', module)
  .add('no players', () => (
    <StartScreen
      players={[]}
      onStartGame={action('onStartGame')}
      onDeleteAllPlayers={action('onDeleteAllPlayers')}
      onAddPlayer={action('onAddPlayer')}
      onDeletePlayer={action('onDeletePlayer')}
    />
  ))
  .add('default', () => (
    <StartScreen
      players={[{ name: 'John', score: 100 }]}
      onStartGame={action('onStartGame')}
      onDeleteAllPlayers={action('onDeleteAllPlayers')}
      onAddPlayer={action('onAddPlayer')}
      onDeletePlayer={action('onDeletePlayer')}
    />
  ))

storiesOf('GameScreen', module)
  .add('single user', () => (
    <GameScreen
      players={[{ name: 'John', score: 0 }]}
      onUpdateScore={action('onUpdateScore')}
      onBack={action('onBack')}
      onResetScore={action('onResetScore')}
    />
  ))
  .add('multiple users', () => (
    <GameScreen
      players={[{ name: 'John', score: 0 }, { name: 'Jane', score: 10 }]}
      onUpdateScore={action('onUpdateScore')}
      onBack={action('onBack')}
      onResetScore={action('onResetScore')}
    />
  ))

storiesOf('PlayerHeader', module)
  .addDecorator(withKnobs)
  .add('with player and score', () => (
    <PlayerHeader title={text('Player', 'Player')} score={number('Score', 0)} />
  ))

storiesOf('RoundsBar', module)
  .add('no scores', () => (
    //<Wrapper>
    <RoundsBar scores={[]} />
    //</Wrapper>
  ))
  .add('some scores', () => (
    //<Wrapper>
    <RoundsBar scores={[0, 20, 15, 10, 30, 40]} />
    //</Wrapper>
  ))

storiesOf('Cards/SummaryCard', module)
  .addDecorator(withKnobs)
  .add('no scores', () => (
    <SummaryCard
      title={text('Name', 'John Doe')}
      scores={array('Scores', [0])}
    />
  ))
  .add('some scores', () => (
    <SummaryCard
      title={text('Title', 'John Doe')}
      scores={array('Scores', [10, 20, 30, 40, 10, -5, 20, 15])}
    />
  ))
  .add('lots of scores', () => (
    <SummaryCard
      title={text('Title', 'John Doe')}
      scores={array('Scores', [10, 20, 30, 40, 10, -5, 20, 15])}
    />
  ))

storiesOf('Screens/SummaryScreen', module)
  .addDecorator(withKnobs)
  .add('no players', () => (
    <SummaryScreen
      players={[]}
      onAddRound={action('onAddRound')}
      onBack={action('onBack')}
    />
  ))
  .add('some players', () => (
    <SummaryScreen
      players={[
        { name: 'John', scores: [10, 20, 30] },
        { name: 'Jane', scores: [20, 30, -3] },
      ]}
      onAddRound={action('onAddRound')}
      onBack={action('onBack')}
    />
  ))
