import { ChangeEventHandler } from "react";

const InputField = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}) => (
  <div className="mb-4 relative flex flex-col font-sans">
    <label>{label}</label>
    <input
      className={`w-full px-3 py-2 border rounded bg-transparent ${
        error ? "border-red-500" : "border-gray-300"
      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default InputField;
