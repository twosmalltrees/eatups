import { getAccessToken, verifyAuthStatus } from './auth';

const URL_BASE = ''

function buildRequest(url, ) {
  const accessToken = getAccessToken();

}

export default function getMeetups(searchParams) {
  buildRequest
  console.log(searchParams);
  console.log('getMeetupsRan');
}
