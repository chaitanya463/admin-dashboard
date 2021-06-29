import React, { useState } from "react";
import { useCallback } from "react";

const useHttp = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (reqConfig, applyDataFunc) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(reqConfig.url, {
        method: reqConfig.method ? reqConfig.method : "GET",
        headers: reqConfig.headers ? reqConfig.headers : {},
        body: reqConfig.body ? JSON.stringify(reqConfig.body) : null,
      });
      if (!response.ok) {
        new Error("Request has been failed!");
      }
      const data = await response.json();
      applyDataFunc(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
