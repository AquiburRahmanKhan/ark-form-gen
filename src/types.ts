export interface IFormProps {
  name: string;
  colon?: boolean;
  disabled?: boolean;
  labelAlign?: string;
  layout?: string;
  requiredMark?: boolean;
  scrollToFirstError?: boolean;
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

export interface ICheckboxOptionProps {
  value: string;
  label: string;
}

export interface ICheckboxGroupProps {
  name: string;
  type: string;
  label: string;
  rules?: any[];
}

export interface ISelectOptionProps {
  value: string;
  label: string;
}

export interface ISelectProps {
  name: string;
  type: string;
  label: string;
  options?: ISelectOptionProps[];
  rules?: any[];
}

export interface IRadioOptionProps {
  value: string;
  label: string;
}

export interface IRadioProps {
  name: string;
  type: string;
  label: string;
  options?: IRadioOptionProps[];
  rules?: any[];
}

export interface IDatepickerProps {
  name: string;
  type: string;
  label: string;
  rules?: any[];
}

export interface IFormData {
  form: IFormProps;
  fields: any[];
  importsArray: string[];
  formPropsArray: string[];
  fieldsPropsArray: string[];
}

export interface IAntdImports {
  text: string;
  password: string;
  checkbox: string;
  checkboxGroup: string;
  select: string;
  radio: string;
  datepicker: string;
  rangepicker: string;
}

export interface IFieldPropsForHandlebar {
  text: (field: IInputProps) => any;
  password: (field: IInputProps) => any;
  checkbox: (field: ICheckboxProps) => any;
  checkboxGroup: (field: ICheckboxGroupProps) => any;
  select: (field: ISelectProps) => any;
  radio: (field: IRadioProps) => any;
  datepicker: (field: IDatepickerProps) => any;
  rangepicker: (field: IDatepickerProps) => any;
}
