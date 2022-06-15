import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { UpOutlined, ArrowUpOutlined, CaretUpFilled } from '@ant-design/icons';

const iconTypes = {
  up: <UpOutlined />,
  arrowUp: <ArrowUpOutlined />,
  caretUp: <CaretUpFilled />,
};

const ScrollButton = props => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [componentProps, setComponentProps] = useState({
    targetId: props.targetId,
    behavior: props.behavior,
    buttonBackgroundColor: props.buttonBackgroundColor,
    buttonColor: props.buttonColor,
    iconType: props.iconType,
    scrollSpeed: props.scrollSpeed,
    style: props.style,
  });

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);

    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);

  useEffect(() => {
    setComponentProps({
      ...componentProps,
      targetId: props.targetId,
    });
  }, [props.targetId]);

  const handleOnScroll = () => {
    setIsButtonVisible(window.scrollY > props.buttonVisibleHeight);
  };

  const handleOnPress = () => {
    const { targetId, behavior } = componentProps;
    const targetArea = document.getElementById(`${targetId}`);
    if (targetArea) {
      targetArea.scrollIntoView({ behavior });
    }
  };

  const ScrollButtonWrapper = ({ handleOnPress, config }) => {
    return isButtonVisible ? (
      <ButtonDefaultStyle
        onClick={handleOnPress}
        buttonColor={config.buttonColor}
        buttonBackgrundColor={config.buttonBackgroundColor}
        scrollSpeed={config.scrollSpeed}
        style={config.style}
      >
        {iconTypes[config.iconType]}
      </ButtonDefaultStyle>
    ) : (
      <></>
    );
  };

  return (
    <ScrollButtonWrapper
      config={componentProps}
      handleOnPress={handleOnPress}
    />
  );
};

const buttonAnimate = keyframes`
    0% {
      right: 0px;
    }
    100% {
      right: 2%;
    }
`;

const ButtonDefaultStyle = styled.button`
  background-color: ${props => props.buttonBackgrundColor};
  color: ${props => props.buttonColor};
  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: 2%;
  border: none;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  outline: 0;
  animation: ${buttonAnimate};
  animation-duration: ${props => props.scrollSpeed};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  display: flex;
  align-items: center;
  justify-content: center;
`;

ScrollButton.propTypes = {
  targetId: PropTypes.string,
  behavior: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
  iconType: PropTypes.string,
  scrollSpeed: PropTypes.string,
  style: PropTypes.object,
  buttonVisibleHeight: PropTypes.number,
};

ScrollButton.defaultProps = {
  behavior: 'auto',
  buttonBackgroundColor: 'green',
  buttonColor: 'white',
  iconType: 'up',
  targetId: '',
  scrollSpeed: '1s',
  style: {},
  buttonVisibleHeight: 50,
};

export default ScrollButton;
