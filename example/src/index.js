import React, { Component } from 'react';
import { render } from 'react-dom'
import ScrollButton from '../../src';
import './index.css';

const items = ['red', 'green', 'blue', 'yellow', 'orange', 'lightblue', 'purple', 'lightgreen'];

export class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            targetID: 'red'
        }

        this.handleDivID = this.handleDivID.bind(this)
    }

    handleDivID(e) {
        this.setState({
            targetID: e.target.value
        })
    }

    render() {
        return (
            <div className="index">
                <div className="user-interaction-area">
                    <label>Change Target ID: </label>
                    <input type="text" onChange={this.handleDivID} placeholder="red is default" />
                </div>
                <div className="items">
                    {
                        items.map((item, index) => {
                            return (
                                <div key={index} id={`${item}`}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: `${item}`,
                                        height: '400px',
                                        width: '400px',
                                        fontWeight: '600'
                                    }}>
                                    ID => {item}
                                </div>
                            )
                        })
                    }
                </div>

                <ScrollButton
                    targetId={this.state.targetID}
                    behavior={'smooth'}
                    buttonBackgroundColor={'#CD5252'}
                    buttonColor={'white'}
                    iconType={'arrow-up'}
                    scrollSpeed={'0.5s'}
                />
            </div>
        )
    }
}

render(<Example />, document.getElementById('root'));
