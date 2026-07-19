import Card from "../common/Card";
import Select from "../common/Select";

function ProviderCard({
    providers,
    value,
    onChange,
    disabled,
}) {
  return (
    <Card title="🤖 AI Provider">
      <Select
        value={value}
        onChange={onChange}
        options={providers}
        disabled={disabled}
      />
    </Card>
  );
}

export default ProviderCard;