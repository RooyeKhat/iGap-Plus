/**
 * @flow
 */
import {combineReducers} from 'redux';
import {api} from './api';
import {nav} from './nav';
import {navSecondary} from './navSecondary';
import {navPrimary} from './navPrimary';
import {intlReducer} from 'react-intl-redux';
import {modal} from './modal';
import {fileManager} from './fileManager';
import {theme} from './theme';
import methodsReducer from './methods';
import entities from './entities';
import messenger from './messenger';
import {METHOD_USER_LOGOUT} from '../actions/methods/user/logout';

const appReducer = combineReducers({
  api,
  nav,
  navSecondary,
  navPrimary,
  intl: intlReducer,
  modal,
  fileManager,
  methods: methodsReducer,
  theme,
  entities,
  messenger,
});

const rootReducer = (state, action) => {
  if (action.type === METHOD_USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
