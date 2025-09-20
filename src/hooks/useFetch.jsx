import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) setError(true);
        else setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
}
export default useFetch;
