import React, {useRef, useEffect, useState} from 'react'
import Dropdown from '../ts'
import 'bulma/css/bulma.min.css'
import '../scss/index.scss'
import '../scss/storybook.scss'
import { itemsGenerator, loremGenerator } from './utils'

export default {
  title: 'Portals',
};

export const InsideOverflowHidden = () => {
  return <>
    <div className="content">
      <p>
        This dropdown has menu portaled to <code>window</code>, while rest sits in the
        <code>&lt;div style="overflow: hidden;"&gt;</code>.
      </p>
    </div>

    <div className="sb-overflow sb-overflow-hidden">
      {loremGenerator(2)}
      <Dropdown
        openOnMount={true}
        trigger={<button className="button">Click me</button>}
        >
        {itemsGenerator()}
      </Dropdown>
      {loremGenerator(10)}
    </div>
  </>
}

export const InsideOverflowScroll = () => {
  const [isMounted, setMounted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => setMounted(true), [])

  return <>
    <div className="content">
      <p>
        This dropdown sits in the <code>&lt;div style="overflow: scroll;"&gt;</code> and has menu
        portaled to this div.
      </p>
      <p>
        Try to scroll inside that grey div!
      </p>
    </div>

    <div className="sb-overflow sb-overflow-scroll" ref={containerRef}>
      {loremGenerator(2)}
      {isMounted && (
        <Dropdown
          openOnMount={true}
          portal={containerRef.current}
          trigger={<button className="button">Click me</button>}
          >
          {itemsGenerator()}
        </Dropdown>
      )}
      {loremGenerator(10)}
    </div>
  </>
}
