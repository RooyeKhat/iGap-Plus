import MetaData from '../models/MetaData';
import {UserLogin} from '../modules/Proto/index';
import {Proto} from '../modules/Proto';
import {APP_BUILD_VERSION, APP_ID, APP_NAME, APP_VERSION} from '../constants/configs';
import {USER_LOGIN} from '../constants/methods/index';
import Api from '../modules/Api/index';
import ClientError from '../modules/Error/ClientError';

const META_USER_ID = 'userId';
const META_AUTHOR_HASH = 'authorHash';
const META_USER_TOKEN = 'userToken';

let _userId;
let _authorHash;

export function getUserId() {
  return _userId;
}

export function setUserId(userId) {
  _userId = userId;
  return MetaData.save(META_USER_ID, userId);
}

export async function loadUserId() {
  _userId = await MetaData.load(META_USER_ID);
  return _userId;
}


export function getAuthorHash() {
  return _authorHash;
}

export function setAuthorHash(authorHash) {
  _authorHash = authorHash;
  return MetaData.save(META_AUTHOR_HASH, authorHash);
}

export async function loadAuthorHash() {
  _authorHash = await MetaData.load(META_AUTHOR_HASH);
  return _authorHash;
}


export function setUserToken(userToken) {
  return MetaData.save(META_USER_TOKEN, userToken);
}

export async function loadUserToken() {
  return await MetaData.load(META_USER_TOKEN);
}


export async function login() {

  const token = await loadUserToken();
  if (!token) {
    throw new ClientError('Login token is not found');
  }

  const userLogin = new UserLogin();
  userLogin.setToken(token);
  userLogin.setAppName(APP_NAME);
  userLogin.setAppId(APP_ID);
  userLogin.setAppBuildVersion(APP_BUILD_VERSION);
  userLogin.setAppVersion(APP_VERSION);

  userLogin.setPlatform(Proto.Platform.UNKNOWN_PLATFORM);
  userLogin.setPlatformVersion('0');

  userLogin.setDevice(Proto.Device.UNKNOWN_DEVICE);
  userLogin.setDeviceName('UNKNOWN_DEVICE');
  userLogin.setLanguage(Proto.Language.FA_IR);
  // TODO [Amerehie] - 8/30/2017 2:05 PM - setPlatform , setPlatformVersion ...

  return Api.invoke(USER_LOGIN, userLogin);
}