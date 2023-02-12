import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
//vvvvv---Added for Redux---vvvvv
// import { createStore } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

// Great way to test by keeping an eye on the current state of store
store.subscribe(() => 
  console.log(store.getState())
);
//^^^^^---Added for Redux---^^^^^

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* vvvvv---Added for Redux---vvvvv */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* ^^^^^---Added for Redux---^^^^^ */}
  </React.StrictMode>
);

reportWebVitals();
