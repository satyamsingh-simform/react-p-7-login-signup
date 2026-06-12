
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type Props = {
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
}: Props) {
  return (
    <Field>
      <FieldLabel htmlFor={label}>{label}</FieldLabel>
      <Input id={label} type={type} placeholder={placeholder} {...rest} />
      <FieldError className="m-0">{error}</FieldError>
    </Field>
  );
}
 


// import {
//   Field,
//   FieldDescription,
//   FieldLabel,
// } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"

// export function InputField() {
//   return (
//     <Field>
//       <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
//       <Input
//         id="input-field-username"
//         type="text"
//         placeholder="Enter your username"
//       />
//       <FieldDescription>
//         Choose a unique username for your account.
//       </FieldDescription>
//     </Field>
//   )
// }