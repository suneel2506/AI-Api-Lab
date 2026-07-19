import MainLayout from "../layouts/MainLayout";
import Card from "../c/common/Card";

import Navbar from "../c/layout/Navbar";
import Sidebar from "../c/layout/Sidebar";
import Footer from "../c/layout/Footer";
import Button from "../c/common/Button";
import ProviderCard from "../c/dashboard/ProviderCard";
import ModelDropdown from "../c/dashboard/ModelDropdown";
import PromptBox from "../c/dashboard/PromptBox";
import ResponsePanel from "../c/dashboard/ResponsePanel";
import StatsCard from "../c/dashboard/StatsCard";

import Input from "../c/common/Input";

import useAI from "../hooks/useAI";

function Dashboard() {
  const {
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
  } = useAI();

  return (
    <MainLayout>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side */}

              <div className="space-y-6">
                <ProviderCard
                  providers={providers}
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  disabled={loading}
                />

                <ModelDropdown
                  models={models}
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  disabled={loading}
                />

                <Card title="🔑 API Key">
                  <Input
                    placeholder="Enter API Key..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    disabled={loading}
                  />
                </Card>

                <PromptBox
                  prompt={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onGenerate={generate}
                  loading={loading}
                  disabled={loading}
                />
              </div>

              {/* Right Side */}

              <div className="space-y-6">
                <StatsCard
                  provider={provider}
                  model={model}
                  responseTime={responseTime}
                />

                <div className="mt-6">
                  <Button onClick={generate} disabled={loading}>
                    {loading ? "🤖 Thinking..." : "🚀 Generate Response"}
                  </Button>
                </div>

                <ResponsePanel
                  loading={loading}
                  response={response}
                  onClear={clear}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </MainLayout>
  );
}

export default Dashboard;
