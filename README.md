![header](https://github.com/jz222/react-hooks-identicons/blob/master/assets/react-hooks-identicons.png?raw=true)

# React Hooks Identicons

A dynamic React component that creates an identicon based on a provided string. This library is based on [react-identicons](https://github.com/tuhnik/react-identicons) but was rewritten in React Hooks to avoid deprecation warnings.

## Install

With npm:

```
npm i --save react-hooks-identicons
```

With yarn:

```
yarn add react-hooks-identicons
```

## Usage

```javascript
import React from 'react';
import Identicon from 'react-hooks-identicons';

const App = () => {
    return (
        <Identicon string="user@example.com" />
    );
};

export default App;
```

## API

The following props are available:

| Prop     | Type     | Description                                                                                |
|----------|----------|--------------------------------------------------------------------------------------------|
| string   | string   | Is used to generate the identicon.                                                         |
| size     | integer  | Defines the width and height of the identicon.                                             |
| padding  | integer  | Adds padding in px to the blocks.                                                          |
| bg       | string   | Background color.                                                                          |
| fg       | string   | Color of the blocks. If no color was provided, it generates the color based on the string. |
| palette  | [string] | Array of hex color strings that will be used as color for the blocks.                      |
| count    | number   | Number of blocks. Allowed counts are 1-5.                                                  |
| getColor | function | The color for the blocks will be passed to the getColor function, if it was provided.      |

Only the `string` prop is mandatory. All other props are optional.

## Credits

This library is based on the concept of [react-identicons](https://github.com/tuhnik/react-identicons).