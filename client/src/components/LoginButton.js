import React from 'react';
import GoogleLogin from 'react-google-login';
import { GOOGLE_AUTH } from '../constants/Api';
import User from '../services/User';
import { useUser } from '../contexts/User';

function LoginButton() {
  const { setUser } = useUser();

  function onSignIn({ tokenId }) {
    User.create(tokenId)
      .then(() => User.get(tokenId))
      .then(({ data }) => setUser({ ...data, tokenId }));
  }

  return (
    <GoogleLogin clientId={GOOGLE_AUTH} onSuccess={onSignIn} cookiePolicy={'single_host_origin'}
      render={renderProps =>
        <button type="button" disabled={renderProps.disabled}
          onClick={renderProps.onClick} className="btn">FAZER LOGIN</button>
      }
    />
  );
}

export default LoginButton;