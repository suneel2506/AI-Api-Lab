import { createContext, useContext, useState } from "react";

const AIContext = createContext();

export function AIProvider({ children }) {
  const [provider, setProvider] = useState("");
  const [model, setModel] = useState("");
  const [apiKey, setApiKey] = useState("");

  return (
    <AIContext.Provider
      value={{
        provider,
        setProvider,

        model,
        setModel,

        apiKey,
        setApiKey,
      }}
    >
      {children}
    </AIContext.Provider>
  );
}

export function useAIContext() {
  return useContext(AIContext);
}