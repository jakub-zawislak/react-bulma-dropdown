import React from 'react'
import Dropdown from '../ts'
import 'bulma/css/bulma.min.css'
import '../scss/index.scss'
import '../scss/storybook.scss'
import { itemsGenerator } from './utils'

export default {
  title: 'Home',
  parameters: {
    info: { inline: true },
  },
};

export const Basic = () => (
  <Dropdown>
    {itemsGenerator()}
  </Dropdown>
)

export const AutoOpen = () => (
  <Dropdown openOnMount={true}>
    {itemsGenerator()}
  </Dropdown>
)

export const WithoutOpenAnimation = () => (
  <Dropdown isAnimated={false}>
    {itemsGenerator()}
  </Dropdown>
)

export const CustomTrigger = () => {
  const trigger1 = (
    <div style={{padding: '10px', background: 'blue', color: 'white'}}>
      Click me!
    </div>
  )

  const trigger2 = (
    <button className="button">
      <span>Button with FontAwesome icon</span>
      <span className="icon is-small">
        <i className="fa fa-angle-down"></i>
      </span>
    </button>
  )

  return <>
    <Dropdown trigger={trigger1}>
      {itemsGenerator()}
    </Dropdown>
    <br/><br/>
    <Dropdown trigger={trigger2}>
      {itemsGenerator()}
    </Dropdown>
  </>
}

export const CustomMargin = () => <>
  <Dropdown trigger="Margin 0" margin={0}>
    {itemsGenerator(100)}
  </Dropdown>
  <br/><br/>
  <Dropdown trigger="Margin 100" margin={100}>
    {itemsGenerator(100)}
  </Dropdown>
</>
