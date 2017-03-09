import moment from 'moment';

export function beginImplicitFlow() {
  window.location = 'https://secure.meetup.com/oauth2/authorize?client_id=tbu88fvo4gmnrgpnj8d47u224e&response_type=token&redirect_uri=http://localhost:8080/access_token';
}

function deleteAccessToken() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('tokenType');
  localStorage.removeItem('expiresAt');
}

export function getAccessToken() {
  const accessToken = localStorage.accessToken;
  const expiresAt = localStorage.expiresAt;
  const tokenExpired = moment(expiresAt).isBefore();
  if (!accessToken || tokenExpired) {
    deleteAccessToken();
    return null;
  }
  return accessToken;
}

export function userIsLoggedIn() {
  return !!getAccessToken();
}
