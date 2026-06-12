import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldError, FieldLabel } from "./field";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

export type Option = {
  value: string;
  label: string;
};

type Props<T extends FieldValues> = {
  options: Option[];
  label: string;
  placeholder: string;
  error?: string;
  name: FieldPath<T>;
  control: Control<T>;
};

export function SelectField<T extends FieldValues>({
  name,
  label,
  options,
  placeholder,
  control,
  error,
  ...rest
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Field>
          <FieldLabel htmlFor={label}>{label}</FieldLabel>
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent id={label}>
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {options.map((option) => (
                  <SelectItem key={option.value} {...rest} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldError>{error}</FieldError>
        </Field>
      )}
    ></Controller>
  );
}

 