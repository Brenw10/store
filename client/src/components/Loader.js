import React, { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Endpoint from '../core/Endpoint';

function Loader() {
  const loaderRef = useRef();
  const count = useRef(0);

  useEffect(() => {
    interceptor();
    // eslint-disable-next-line
  }, []);

  function setLoader() {
    if (count.current >= 1) {
      loaderRef.current.continuousStart();
    } else {
      loaderRef.current.complete();
    }
  }

  function interceptor() {
    Endpoint.interceptors.request.use(
      results => {
        count.current++;
        setLoader();
        return results;
      },
      error => Promise.reject(error),
    );

    Endpoint.interceptors.response.use(
      results => {
        count.current--;
        setLoader();
        return results;
      },
      error => {
        count.current--;
        setLoader();
        return Promise.reject(error);
      }
    );
  }

  return (
    <LoadingBar color='#d12c4e' ref={loaderRef} />
  );
}

export default Loader;