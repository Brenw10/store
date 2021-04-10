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

  function showLoader() {
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
        showLoader();
        return results;
      },
      error => Promise.reject(error),
    );

    Endpoint.interceptors.response.use(
      results => {
        count--;
        showLoader();
        return results;
      },
      error => {
        count--;
        showLoader();
        return Promise.reject(error);
      }
    );
  }

  return (
    <LoadingBar color='#d12c4e' ref={loader} />
  );
}

export default Loader;