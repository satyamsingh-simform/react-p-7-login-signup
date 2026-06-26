
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type InputFormProps = {
  error?: string;
  type: "text" | "checkbox" | "date" | "email" | "number" | "password" | 'radio';
  label: string;
  placeholder?: string;
};

export function InputField({
  error,
  label,
  type,
  placeholder,
  ...rest
}: InputFormProps){
  return (
    <Field>
      <FieldLabel htmlFor={label}>{label}</FieldLabel>
      <Input id={label} type={type} placeholder={placeholder} {...rest} />
      <FieldError className="m-0">{error}</FieldError>
    </Field>
  );
}
 