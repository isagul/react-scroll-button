import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faChevronUp, faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp,faChevronUp,faAngleUp);

export default class ScrollButton extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      targetId: props.targetId,
      behavior: props.behavior,
      buttonBackgroundColor: props.buttonBackgroundColor,
      buttonColor: props.buttonColor,
      iconType: props.iconType,
      isButtonShow: false
    }

    this.handleOnScroll= this.handleOnScroll.bind(this);
    this.handleOnPress= this.handleOnPress.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll',this.handleOnScroll);
  }

  componentWillMount(){
    window.removeEventListener('scroll',this.handleOnScroll);
  }

  handleOnScroll(){
    const {isButtonShow} = this.state;
    
    if (!isButtonShow) {
      if (window.scrollY > 90) {
        this.setState({
          isButtonShow: true
        })
      }
    } else {
      if (window.scrollY < 90) {
        this.setState({
          isButtonShow: false
        })
      }
    }    
  }

  handleOnPress() {
    const { targetId, behavior } = this.state;
    let targetDiv = document.getElementById(`${targetId}`);
    if (targetDiv !== null && targetDiv !== undefined) {
      targetDiv.scrollIntoView({behavior: behavior});
    }
  };

  render() {
    let RenderScrollButton = ({handleOnPress,config}) => {
      const {isButtonShow} = config;

      return (
        <div>
          {
            isButtonShow &&
            <ButtonDefaultStyle
                onClick={handleOnPress}
                buttonColor = {config.buttonColor}
                buttonBackgrundColor = {config.buttonBackgroundColor}
                >
                <FontAwesomeIcon icon={config.iconType}/>
            </ButtonDefaultStyle>
          }           
        </div>       
      )
    }
    return (
      <RenderScrollButton config={this.state} handleOnPress={this.handleOnPress} />
    );
  }
}

const buttonAnimate = keyframes`
    0% {
      right: 0px;
    }
    100% {
      right: 2%;
    }
`;

const ButtonDefaultStyle = styled.button `
  background-color: ${(props) => props.buttonBackgrundColor};
  color: ${(props) => props.buttonColor};
  position: fixed;
  right:0;
  bottom:0;
  opacity:0.9;
  margin-bottom: 2%;
  border:none;
  height:35px;
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  outline:0;
  animation: ${buttonAnimate};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

ScrollButton.propTypes = {
  targetId: PropTypes.string,
  behavior: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
  iconType: PropTypes.string
};

ScrollButton.defaultProps = {
  behavior: 'auto',
  buttonBackgroundColor: 'green',  
  buttonColor: 'white',
  iconType: 'chevron-up',
  targetId: ''
};

