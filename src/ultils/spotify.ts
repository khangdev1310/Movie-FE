const authEndpoint: string = "https://accounts.spotify.com/authorize?";
const clientId: string = "971b41bb2d2640df8a5377482524ac76";
const redirectUri: string = "http://localhost:3000";
const scopes: string[] = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
