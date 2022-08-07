const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;
const clientId = process.env.REACT_APP_CLIENTID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scopes: string[] = ['user-library-read', 'playlist-read-private'];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
