import Card from "../common/Card";
import Button from "../common/Button";
import Loader from "../common/Loader";

function ResponsePanel({ loading, response, onClear }) {
  const copyResponse = async () => {
    if (!response) return;

    try {
      await navigator.clipboard.writeText(response);

      alert("Response copied!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card title="📄 AI Response">
      <div className="mb-4 flex justify-end gap-3">
        <Button onClick={copyResponse} disabled={!response} className="w-auto">
          📋 Copy
        </Button>

        <Button
          variant="danger"
          onClick={onClear}
          disabled={!response}
          className="w-auto"
        >
          🗑 Clear
        </Button>
      </div>

      <div
        className="
    min-h-[320px]
    rounded-xl
    bg-slate-800
    p-5
    transition-all
    duration-300
"
      >
        <div
          className="
        min-h-[320px]
        rounded-xl
        bg-slate-800
        p-5
        transition-all
        duration-300
    "
        >
          {loading ? (
            <Loader text="Thinking..." />
          ) : (
            <div
              className="
                whitespace-pre-wrap
                leading-7
                text-slate-100
                animate-fadeIn
            "
            >
              {response || "Waiting for AI response..."}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ResponsePanel;
