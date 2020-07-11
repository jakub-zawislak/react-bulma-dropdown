import React from 'react'

export const itemsGenerator = (items = 10) => <>
  {[...Array(items).keys()].map(k => (
    <a
      href=""
      onClick={e => e.preventDefault()}
      className="dropdown-item"
      key={k}
      >
      Item {k + 1}
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

export const loremGenerator = count => [...Array(count).keys()].map(k => (
  <div key={k}>Lorem ipsum {k + 1}</div>
))
