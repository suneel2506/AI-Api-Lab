import { useEffect, useState } from "react";

import { getProviders, getModels } from "../services/providerService";
import { generateResponse } from "../services/testService";

export default function useAI() {
  const [providers, setProviders] = useState([]);
  const [models, setModels] = useState([]);

  const [provider, setProvider] = useState("");
  const [model, setModel] = useState("");

  const [apiKey, setApiKey] = useState("");

  const [prompt, setPrompt] = useState("");

  const [response, setResponse] = useState("");

  const [responseTime, setResponseTime] = useState("--");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  //-----------------------------------------
  // Load Providers
  //-----------------------------------------

  async function loadProviders() {
    try {
      console.log("Loading providers...");

      const res = await getProviders();

      console.log("API Response:", res);

      if (!res.success) {
        console.log("API returned success = false");

        return;
      }

      const providerList = res.data.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      console.log("Mapped Providers:", providerList);

      setProviders(providerList);

      if (providerList.length > 0) {
        setProvider(providerList[0].value);
      }
    } catch (err) {
      console.error(err);
    }
  }

  //-----------------------------------------
  // Load Models
  //-----------------------------------------

  async function loadModels(providerName) {
    if (!providerName) return;

    try {
      const res = await getModels(providerName);

      if (!res.success) return;

      const modelList = res.data.map((model) => ({
        value: model.id,
        label: model.name,
      }));

      setModels(modelList);

      if (modelList.length > 0) {
        setModel(modelList[0].value);
      }
    } catch (err) {
      console.error(err);

      setError("Failed to load models.");
    }
  }

  //-----------------------------------------
  // Generate Response
  //-----------------------------------------

  async function generate() {
    if (!prompt.trim()) {
      alert("Prompt cannot be empty.");

      return;
    }

    console.log("Sending Request...");

    console.log({
      provider,
      model,
      api_key: apiKey,
      prompt,
    });

    setLoading(true);

    setError("");

    setResponse("Thinking...");

    try {
      const res = await generateResponse({
        provider,
        api_key: apiKey,
        model,
        prompt,
      });

      console.log("Backend Response:", res);

      if (!res.success) {
        setError(res.message);

        return;
      }

      setResponse(res.data.response);

      setResponseTime(res.data.response_time);
    } 
    
    catch (err) {

        console.error(err);
    
        setError(
            err.response?.data?.message ||
            err.message ||
            "Unknown error occurred."
        );
    
    }
    finally {
      setLoading(false);
    }
  }

  //-----------------------------------------
  // Clear
  //-----------------------------------------
  
  function clear() {
  
      setPrompt("");
  
      setResponse("");
  
      setResponseTime("--");
  
      setError("");
  
  }

  //-----------------------------------------
  // Initial Load
  //-----------------------------------------

  useEffect(() => {
    loadProviders();
  }, []);

  //-----------------------------------------
  // Provider Changed
  //-----------------------------------------

  useEffect(() => {
    if (provider) {
      loadModels(provider);
    }
  }, [provider]);

  return {
    providers,
    models,

    provider,
    setProvider,

    model,
    setModel,

    apiKey,
    setApiKey,

    prompt,
    setPrompt,

    response,

    responseTime,

    loading,

    error,

    generate,

    clear,
  };
}
