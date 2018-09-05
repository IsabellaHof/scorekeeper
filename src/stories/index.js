import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
//import { linkTo } from '@storybook/addon-links'
import Button from '../components/Button'
import EditCard from '../components/EditCard'
import PlayerInput from '../components/PlayerInput'
import PointButtonBar from '../components/PointButtonBar'
import GameScreen from '../components/GameScreen'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
))
storiesOf('Button knobs', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onClick={action('clicked')}>{text('Button me', 'click me')}</Button>
  ))

storiesOf('EditCard', module).add('with text', () => (
  <EditCard title="Some title" score={0} onUpdate={action('onUpdate')} />
))

storiesOf('EditCard', module)
  .addDecorator(withKnobs)
  .add('with many text', () => (
    <EditCard
      title={text('Titel', 'Some text')}
      score={number('score', 0, {
        range: true,
        min: 0,
        max: 40,
        step: 1,
      })}
      onUpdate={action('onUpdate')}
    />
  ))

storiesOf('PlayerInput', module).add('with text', () => <PlayerInput />)

storiesOf('GameScreen', module).add('multiple user', () => (
  <GameScreen
    players={[{ name: 'John', score: 0 }]}
    onResetScore={action('onResetScore')}
    onUpdateScore={action('onUpdateScore')}
    onBack={action('onBack')}
  />
))

const stories = storiesOf('Storybook Knobs', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

// Knobs for React props
stories.add('with a button', () => (
  <button disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello Storybook')}
  </button>
))

stories.add('button', () => (
  <Button onClick={action('clicked')}>
    {text('Label', 'Hello Storybook')}
  </Button>
))

// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala')
  const age = number('Age', 89)

  const content = `I am ${name} and I'm ${age} years old.`
  return <div>{content}</div>
})
