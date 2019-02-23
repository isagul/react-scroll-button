import React from 'react';
import ReactDOM from 'react-dom';
import { Example } from '../example/src';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faChevronUp, faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp,faChevronUp,faAngleUp);


ReactDOM.render(<Example />, document.getElementById('root'));