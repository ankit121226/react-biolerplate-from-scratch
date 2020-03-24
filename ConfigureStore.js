import {createStore} from 'redux';
import reducer from './reducer';
const initialState= {tech: 'React'};
const store= createStore(reducer, initialState);
export default store;