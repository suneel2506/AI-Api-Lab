import Card from "../common/Card";

function ErrorCard({ error }) {
  if (!error) return null;

  return (
    <Card title="❌ Error">
      <div className="rounded-xl border border-red-500 bg-red-950 p-4">
        <h3 className="font-semibold text-red-300">
          Something went wrong
        </h3>

        <p className="mt-2 whitespace-pre-wrap text-red-200">
          {error}
        </p>
      </div>
    </Card>
  );
}

export default ErrorCard;