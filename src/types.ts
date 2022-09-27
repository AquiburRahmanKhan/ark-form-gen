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

export interface IFieldProps extends IInputProps, ICheckboxProps {}

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
}

export interface IFieldPropsForHandlebar {
  text: (field: IFieldProps) => any;
  password: (field: IFieldProps) => any;
  checkbox: (field: IFieldProps) => any;
}
