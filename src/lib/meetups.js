import { getAccessToken } from './auth';

function send(endpointURL, params) {
  const accessToken = getAccessToken();
  let querystring = '';
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      querystring = `${querystring}&${key}=${params[key]}`;
    }
  }
  return fetch(`https://api.meetup.com/2/${endpointURL}/?${querystring}&access_token=${accessToken}`, {
    method: 'GET',
    mode: 'cors',
  }).then(
    response => response.json().then(json => json.results),
  );
}

export default async function getMeetups(options) {
  const endpoint = 'open_events';
  const params = {
    text_format: 'plain',
    and_text: true,
    time: ',1w',
    ...options,
  };
  const events = await send(endpoint, params);
  return events;
}
