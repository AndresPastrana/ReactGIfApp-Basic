import { useEffect, useRef, useState } from "react";

export const useGetRequest = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
      console.log("Did UnMount");
      console.log(isMounted.current);
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    // Effect
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // Si el componente esta montado renderizo el componente de nuevo
        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      });

    // Clean Up
    return () => {};
  }, [url]);

  return state;
};
