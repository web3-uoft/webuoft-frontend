"use client";

import React, { useEffect, useContext, useReducer } from "react";

const initialState = {
  wallet: null,
  isMetamaskInstalled: false,
  status: "loading",
  balance: null,
};

function metamaskReducer(state, action) {
  switch (action.type) {
    case "connect": {
      const { wallet, balance } = action;
      const newState = { ...state, wallet, balance, status: "idle" };
      const info = JSON.stringify(newState);
      window.localStorage.setItem("metamaskState", info);

      return newState;
    }
    case "disconnect": {
      window.localStorage.removeItem("metamaskState");
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeAllListeners(["accountsChanged"]);
      }
      return { ...state, wallet: null, balance: null, status: "idle" };
    }
    case "pageLoaded": {
      const { isMetamaskInstalled, balance, wallet } = action;
      return { ...state, isMetamaskInstalled, status: "idle", wallet, balance };
    }
    case "loading": {
      return { ...state, status: "loading" };
    }
    case "idle": {
      return { ...state, status: "idle" };
    }
    case "hydrate": {
      return { ...state, ...action.payload };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
}

const MetamaskContext = React.createContext(undefined);

function MetamaskProvider({ children }) {
  const [state, dispatch] = useReducer(metamaskReducer, initialState);

  useEffect(() => {
    // This code runs after component mount and therefore only on the client
    const localState = localStorage.getItem("metamaskState");
    if (localState) {
      dispatch({ type: "hydrate", payload: JSON.parse(localState) });
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever the state changes
    localStorage.setItem("metamaskState", JSON.stringify(state));
  }, [state]);

  const value = { state, dispatch };

  return <MetamaskContext.Provider value={value}>{children}</MetamaskContext.Provider>;
}

function useMetamask() {
  const context = useContext(MetamaskContext);
  if (context === undefined) {
    throw new Error("useMetamask must be used within a MetamaskProvider");
  }
  return context;
}

export { MetamaskProvider, useMetamask };
