# react-scroll-button
======

### Live Demo
======
[Demo](https://isagul.github.io/react-scroll-button/)

### How to Install
======
[npm](https://www.npmjs.com/package/react-scroll-button)

## Usage 
======
```
    import React, { Component } from 'react'
    import ScrollButton 'react-scroll-button'

    class Test extends Component {
        render() {
            return (
                <ScrollButton
                    targetId={'secondTarget'} 
                    behavior={'smooth'} 
                    buttonBackgroundColor={'#CD5252'} 
                    buttonColor={'white'} 
                    iconType={'arrow-up'}
                    />
                );
            }
        }
    }
```

### Properties

| Property  | Description | DefaultValue | Type
| ------------- | ------------- | ------------- | ------------- | 
| targetId  | Id of element that you want to go  | '' | string
| behavior | Scroll type. 'auto', 'smooth'  | smooth | string
| buttonBackgorundColor | BackgroundColor of button | 'green' | string
| buttonColor | Color of icon | 'white' | string
| iconType | Icon type 'chevron-up', 'angle-up','arrow-up' | chevron-up | string
