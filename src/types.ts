export interface IFormProps {
  name: string;
  colon?: boolean;
  disabled?: boolean;
  labelAlign?: string;
  layout?: string;
  requiredMark?: boolean;
  scrollToFirstError?: boolean;
  labelCol?: string | number;
  wrapperCol?: string | number;
}

export interface IInputProps {
  name: string;
  type: string;
  label?: string;
  extra?: string;
  rules?: any[];
}

export interface ICheckboxProps {
  name: string;
  type: string;
  label?: string;
  extra?: string;
  text?: string;
  rules?: any[];
}

export interface ISelectOptionProps {
  value: string;
  label: string;
}

export interface ISelectProps {
  name: string;
  type: string;
  label?: string;
  options?: ISelectOptionProps[];
  rules?: any[];
}

export interface IFieldProps
  extends IInputProps,
    ICheckboxProps,
    ISelectProps {}

export interface IFormData {
  form: IFormProps;
  fields: IFieldProps[];
  importsArray: string[];
  formPropsArray: string[];
  fieldsPropsArray: string[];
}

export interface IAntdImports {
  text: string;
  password: string;
  checkbox: string;
  select: string;
}

export interface IFieldPropsForHandlebar {
  text: (field: IInputProps) => any;
  password: (field: IInputProps) => any;
  checkbox: (field: ICheckboxProps) => any;
  select: (field: ISelectProps) => any;
}
