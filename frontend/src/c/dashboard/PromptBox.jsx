import Card from "../common/Card";
import Button from "../common/Button";

function PromptBox({ prompt, onChange, onGenerate, loading = false , disabled = false}) {
  return (
    <Card title="💬 Prompt">
      <textarea
        rows="10"
        value={prompt}
        onChange={onChange}
        disabled={disabled}
        placeholder="Ask anything..."
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-800
          p-4
          text-white
          outline-none
          resize-none
          focus:border-cyan-400
        "
      />
      <Button onClick={onGenerate} disabled={loading}>
        {loading ? "Generating..." : "🚀 Generate Response"}
      </Button>
    </Card>
  );
}

export default PromptBox;
