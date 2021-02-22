import React, { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Endpoint from '../config/Endpoint';

function Loader() {
  const ref = useRef();
  const count = useRef(0);

  useEffect(() => {
    interceptor();
  }, []);

  function interceptor() {
    const setLoader = counter => counter >= 1 ? ref.current.continuousStart() : ref.current.complete();
    Endpoint.interceptors.request.use(
      results => {
        count.current++;
        setLoader(count.current);
        return results;
      },
      error => Promise.reject(error),
    );
    Endpoint.interceptors.response.use(
      results => {
        count.current--;
        setLoader(count.current);
        return results;
      },
      error => {
        count.current--;
        setLoader(count.current);
        return Promise.reject(error);
      }
    );
  }

  return (
    <LoadingBar color='#d12c4e' ref={ref} />
  );
}

export default Loader;