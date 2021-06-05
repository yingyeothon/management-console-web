import './App.css';

import React, { useEffect, useState } from 'react';

import GoogleLogin from 'react-google-login';
import logo from './logo.svg';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  function responseGoogle(event: any) {
    console.info(event);
  }
  function responseGoogleError(event: any) {
    console.info(event);
  }
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <GoogleLogin
            clientId="783960781972-i65i2n32ajpc112qvco3aeet8lud1cbo.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogleError}
            cookiePolicy={'single_host_origin'}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
