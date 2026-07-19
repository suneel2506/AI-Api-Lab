import Card from "../common/Card";
import Select from "../common/Select";

function ModelDropdown({
    models,
    value,
    onChange,
    disabled,
}){
  return (
    <Card title="🧠 AI Model">
      <Select
        value={value}
        onChange={onChange}
        options={models}
        disabled={disabled}
      />
    </Card>
  );
}

export default ModelDropdown;