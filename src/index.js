import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './Components/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Can not find the root element!');
}

const root = createRoot(rootElement);

root.render(<App />);
