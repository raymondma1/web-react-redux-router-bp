
import { combineReducers } from 'redux'
import userReducer from './userReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  userReducer,
  firebaseReducer,
  firestoreReducer
})

export default rootReducer