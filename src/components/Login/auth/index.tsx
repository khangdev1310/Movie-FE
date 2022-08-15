import { Navigate, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Container } from 'tsparticles-engine';
import Typewriter from 'typewriter-effect';
import { loginEndpoint } from '../../../ultils/spotify';
import './Login.scss';

function Login() {
  const token = localStorage.getItem('token');

  const location = useLocation();
  if (token !== null && location.pathname === '/login') {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    // eslint-disable-next-line no-console
    console.log(container);
  };
  return (
    <div className="login-page">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      {/* <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo z-10"
      /> */}
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Welcome to <strong>MiniMusic</strong>')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Please login to continue to the next page.')
            .start();
        }}
      />
      <a href={loginEndpoint} className="login-link z-10">
        <span className="login-btn">LOG IN</span>
        <i></i>
      </a>
    </div>
  );
}

export default Login;
