import { fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  email: null,
  firstName: null,
  lastName: null,
  currency: 'USD',
  balance: 0.0,
});


export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
