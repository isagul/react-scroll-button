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
import React, {Component} from 'react'
import ScrollButton from 'react-scroll-button'

class ScrollComponent extends Component {
    render() {
        return (
            <ScrollButton 
                behavior={'smooth'} 
                buttonBackgroundColor={'red'}
                iconType={'arrow-up'}
                style= {{fontSize: '24px'}}
            />
        );
    }
}
```

### Properties

| Property  | Description | DefaultValue | Type
| ------------- | ------------- | ------------- | ------------- | 
| targetId  | Id of element that you want to go  | '' | string
| behavior | Scroll type. 'auto', 'smooth'  | auto | string
| buttonBackgorundColor | BackgroundColor of button | 'green' | string
| buttonColor | Color of icon | 'white' | string
| iconType | Icon type 'chevron-up', 'angle-up','arrow-up' | chevron-up | string
| scrollSpeed | It specifies speed of scroll button. | '1s' | string
| style | Write custom css properties | { } | object

License
MIT