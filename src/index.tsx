import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore} from "redux";
import { StoreState } from './types/index';
import { enthusiasm } from './reducers/index';


const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: "Typescript"
})

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
