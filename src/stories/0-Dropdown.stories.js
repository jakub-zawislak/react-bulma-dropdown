import React, {useRef, useEffect, useState} from 'react';
import { linkTo } from '@storybook/addon-links';
import Dropdown from '../js'
import 'bulma/css/bulma.min.css';
import '../scss/index.scss';
import '../scss/storybook.scss';

export default {
  title: 'Dropdown',
};

const items = <>
  {[...Array(10).keys()].map(k => (
    <a
      href=""
      onClick={e => e.preventDefault()}
      className="dropdown-item"
      key={k}
      >
      Item {k}
    </a>
  ))}
  <hr className="dropdown-divider"/>
  <a
    href=""
    onClick={e => e.preventDefault()}
    className="dropdown-item"
    >
    Yet another item
  </a>
</>

export const Basic = () => (
  <Dropdown
    trigger={<button className="button">Click me</button>}
    openOnMount={true}
    >
    {items}
  </Dropdown>
)

export const WithScroll = () => {
  const [isMounted, setMounted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => setMounted(true), [])

  return <>
    Some content
    <div className="sb-overflow" ref={containerRef}>
      <div>Some another content in overflow: hidden</div>
      {isMounted && (
        <Dropdown
          openOnMount={true}
          // portal={containerRef.current}
          trigger={<button className="button">Click me</button>}
          >
          {items}
        </Dropdown>
      )}
    </div>
  </>
}
