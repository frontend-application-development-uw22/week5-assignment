import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

      fetch(url)
        .then(res => {
          if (!res.ok) { // error coming back from server
            throw Error('Unable to fetch data');
          }
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        })

  }, [url])

  return { data, isPending, error };
}

useFetch.propTypes = {

  url: PropTypes.string.isRequired

}

export default useFetch;
