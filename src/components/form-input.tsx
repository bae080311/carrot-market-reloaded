interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  error?: string[];
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  error = [],
  name,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent pl-3 rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-4 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {error.map((err, idx) => {
        return (
          <span key={idx} className="text-red-500 font-medium">
            {err}
          </span>
        );
      })}
    </div>
  );
}
