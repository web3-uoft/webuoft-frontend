"use client";

import { useMetamask } from "./useMetamask";

export const useListen = () => {
  const { dispatch } = useMetamask();

  return () => {
    window.ethereum.on("accountsChanged", async (newAccounts) => {
      if (newAccounts.length > 0) {
        // Upon receiving a new wallet, we'll request again the balance to synchronize the UI.
        const newBalance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [newAccounts[0], "latest"],
        });

        dispatch({
          type: "connect",
          wallet: newAccounts[0],
          balance: newBalance,
        });
      } else {
        // If the length is 0, then the user has disconnected from the wallet UI
        dispatch({ type: "disconnect" });
      }
    });
  };
};
