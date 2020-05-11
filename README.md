# React Bulma dropdown

It's a Bulma's dropdown, with a scroll and portal support.

## Instalation

```
yarn add react-bulma-dropdown
```

```jsx
import Dropdown from 'react-bulma-dropdown'

const trigger = <button className="button">Click me</button>

<Dropdown
  trigger={trigger}
  >
  <a href="#" className="dropdown-item">
    Item A
  </a>
  <a href="#" className="dropdown-item">
    Item B
  </a>
  ...
</Dropdown>
```

| Property        |           | Default   |
|-----------------|-----------|-----------|
| trigger         | required  |           |
| className       |           |           |
| margin          |           | 20        |
| portal          |           | `window`  |
| isAnimated      |           | `true`    |
| openOnMount     |           | `false`   |
| hideOnLinkClick |           | `true`    |
