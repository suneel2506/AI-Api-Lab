import Card from "../common/Card";

function StatsCard({
  provider = "--",
  model = "--",
  responseTime = "--",
}) {
  return (
    <Card title="📊 Statistics">

      <div className="grid grid-cols-3 gap-4">

        <div className="rounded-xl bg-slate-800 p-4 text-center">
          <p className="text-slate-400 text-sm">
            Provider
          </p>

          <h3 className="mt-2 text-lg font-bold">
            {provider}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-4 text-center">
          <p className="text-slate-400 text-sm">
            Model
          </p>

          <h3 className="mt-2 text-lg font-bold">
            {model}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-4 text-center">
          <p className="text-slate-400 text-sm">
            Response Time
          </p>

          <h3 className="mt-2 text-lg font-bold">
            {responseTime}
          </h3>
        </div>

      </div>

    </Card>
  );
}

export default StatsCard;