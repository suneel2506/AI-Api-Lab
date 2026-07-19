import Card from "../common/Card";

function StatsCard({ provider, model, responseTime, loading, error }) {
  let status = "Ready";
  let statusColor = "text-green-400";

  if (loading) {
    status = "Generating";
    statusColor = "text-yellow-400";
  }

  if (error) {
    status = "Error";
    statusColor = "text-red-400";
  }
  const providerName = provider === "groq" ? "Groq" : provider || "--";

  const modelName =
    model?.replaceAll("-", " ")?.replace("versatile", "") || "--";
  return (
    <Card title="📊 Session Statistics">
      <div className="space-y-5">
        <StatRow icon="🧠" title="Provider" value={providerName} />

        <StatRow icon="⚡" title="Model" value={modelName} />

        <StatRow
          icon="⏱"
          title="Response Time"
          value={responseTime !== "--" ? `${responseTime} sec` : "--"}
        />

        <div className="flex justify-between items-center border-t border-slate-700 pt-4">
          <span className="font-medium">🟢 Status</span>

          <span
            className={`
        rounded-full
        px-3
        py-1
        text-sm
        font-semibold
        ${statusColor}
        bg-slate-800
    `}
          >
            {status}
          </span>
        </div>
      </div>
    </Card>
  );
}

function StatRow({ icon, title, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-medium">
        {icon} {title}
      </span>

      <span className="text-slate-300 text-right break-all">{value}</span>
    </div>
  );
}

export default StatsCard;
