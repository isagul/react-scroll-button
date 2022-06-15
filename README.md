# react-scroll-button

[![npm version](https://badge.fury.io/js/react-scroll-button.svg)](https://www.npmjs.com/package/react-scroll-button)

### Live Demo

[Demo](https://isagul.github.io/react-scroll-button/)

### How to Install

```bash
npm i react-scroll-button
```

## Usage

```javascript
import React from 'react';
import ScrollButton from 'react-scroll-button';

const ScrollComponent = () => {
  return (
    <ScrollButton
      behavior="smooth"
      buttonBackgroundColor="red"
      iconType="arrowUp"
      style={{ fontSize: '24px' }}
    />
  );
};
```

### Properties

| Property              | Description                                                              | DefaultValue | Type   |
| --------------------- | ------------------------------------------------------------------------ | ------------ | ------ |
| targetId              | Id of element that you want to go                                        | ''           | string |
| behavior              | Scroll type. 'auto', 'smooth'                                            | auto         | string |
| buttonBackgroundColor | BackgroundColor of button                                                | 'green'      | string |
| buttonColor           | Color of icon                                                            | 'white'      | string |
| iconType              | Icon type 'up','arrowUp', 'caretUp'                                      | 'up'         | string |
| scrollSpeed           | It specifies speed of the scroll button.                                     | '1s'         | string |
| buttonVisibleHeight   | It specifies that the scroll button will be visible at what height on the page | 50           | number |
| style                 | Write custom css properties                                              | { }          | object |

License
MIT
