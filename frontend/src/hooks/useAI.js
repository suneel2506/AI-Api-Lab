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

  const [messages, setMessages] = useState([]);

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
        model,
        api_key: apiKey,
        prompt: message,
      });

      const aiReply = res.data.response;

      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          content: prompt,
        },
        {
          role: "assistant",
          content: aiReply,
        },
      ]);

      setResponse(aiReply);

      setResponseTime(res.data.response_time);

      setPrompt("");
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message || err.message || "Unknown error occurred.",
      );
    } finally {
      setLoading(false);
    }
  }
  ///send message function
  async function sendMessage(message) {
    try {
      // User message
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          content: message,
        },
      ]);

      // Temporary AI message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thinking...",
          loading: true,
        },
      ]);

      const res = await generateResponse({
        provider,
        model,
        api_key: apiKey,
        prompt: prompt,
      });

      const aiReply = res.data.response;

      setMessages((prev) => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          role: "assistant",
          content: aiReply,
        };

        return updated;
      });
    } catch (err) {
      console.error(err);
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

    messages,

    responseTime,

    loading,

    error,

    generate,

    sendMessage,

    clear,

    setMessages,

    
  };
}
