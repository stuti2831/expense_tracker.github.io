import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css'
ReactDOM.render(
  <SpeechProvider  appId="a4eb56af-6a88-47f7-801c-c525ee35cb68"
    debug
    logSegments>
     <Provider>
    <App />
    </Provider>,
    
  </SpeechProvider>,  
    document.getElementById('root')
  );