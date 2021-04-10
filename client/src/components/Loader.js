import React, { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Endpoint from '../core/Endpoint';

function Loader() {
  let count = 0;
  const loader = useRef();

  useEffect(() => {
    interceptor();
    // eslint-disable-next-line
  }, []);

  function displayLoader() {
    if (count >= 1) {
      loader.current.continuousStart();
    } else {
      loader.current.complete();
    }
  }

  function interceptor() {
    Endpoint.interceptors.request.use(
      results => {
        count++;
        displayLoader();
        return results;
      },
      error => Promise.reject(error),
    );

    Endpoint.interceptors.response.use(
      results => {
        count--;
        displayLoader();
        return results;
      },
      error => {
        count--;
        displayLoader();
        return Promise.reject(error);
      }
    );
  }

  return (
    <LoadingBar color='#d12c4e' ref={loader} />
  );
}

export default Loader;