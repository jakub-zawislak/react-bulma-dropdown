# React Bulma dropdown

It's a Bulma's dropdown, with an auto-height, scroll and portal support.

The `.dropdown-menu` is not simply rendered below the `.dropdown-trigger`, but is [portaled](https://reactjs.org/docs/portals.html) to another DOM element.
Thanks to that your dropdown will work in element that has `overflow:hiden` or `overflow:scroll` CSS style.

The `.dropdown-menu` is auto resizing to match the portal's bottom edge.

## Installation

```
yarn add react-bulma-dropdown
```

You have also to include the `dist/main.css` file.

### Basic example

```jsx
import Dropdown from 'react-bulma-dropdown'

<Dropdown trigger="Choose">
  <a href="#" className="dropdown-item">Item A</a>
  <a href="#" className="dropdown-item">Item B</a>
  <a href="#" className="dropdown-item">Item C</a>
</Dropdown>
```

You can find more examples in [Storybook](https://jakub-zawislak.github.io/react-bulma-dropdown/).

## Properties

| Property        | Type                    | Description                                                                                                                                                     | Default           |
|-----------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| children        | `ReactNode`             | The `.dropdown-content`'s content                                                                                                                               |                   |
| trigger         | `string` or `ReactNode` | The trigger rendered in the `.dropdown-trigger`                                                                                                                 | `"Open dropdown"` |
| portal          | `null` or `HTMLElement` | Element to which the `.dropdown-menu` will be [portaled](https://reactjs.org/docs/portals.html). If `null`, then it will be portaled to the end of the document | `null`            |
| className       | `string`                | Optional CSS class name for the `.dropdown-menu`'s wrapper                                                                                                      | `""`              |
| openOnMount     | `boolean`               | Open the `.dropdown-menu` on mount                                                                                                                              | `false`           |
| isAnimated      | `boolean`               | Animate the `.dropdown-menu` opening                                                                                                                            | `true`            |
| hideOnLinkClick | `boolean`               | Close the `.dropdown-menu` after clicking an `a.dropdown-item`                                                                                                  | `true`            |
| margin          | `integer`               | Min. distance between bottom of the dropdown and bottom of the portal                                                                                           | 20                |

## Development

```
yarn run storybook
```
