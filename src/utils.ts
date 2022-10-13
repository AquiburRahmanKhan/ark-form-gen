import * as types from "./types";

import JSON5 from "json5";

const ANTDIMPORTS: types.IAntdImports = {
  text: "Input",
  password: "Input",
  checkbox: "Checkbox",
  checkboxGroup: "Checkbox",
  select: "Select",
  radio: "Radio",
  datepicker: "DatePicker",
  rangepicker: "DatePicker",
};

const FIELDPROPSFORHANDLEBAR: types.IFieldPropsForHandlebar = {
  text: (field: types.IInputProps) => ({
    name: field.name,
    type: field.type,
    label: field.label,
    extra: field.extra,
    rules: field.rules?.length ? rulesToStringArray(field.rules) : false,
  }),
  password: (field: types.IInputProps) => ({
    name: field.name,
    type: field.type,
    label: field.label,
    extra: field.extra,
    rules: field.rules?.length ? rulesToStringArray(field.rules) : false,
  }),
  checkbox: (field: types.ICheckboxProps) => ({
    name: field.name,
    type: field.type,
    label: field.label,
    text: field.text,
    rules: field.rules?.length ? rulesToStringArray(field.rules) : false,
  }),
  checkboxGroup: (field: types.IRadioProps) => ({
    name: field.name,
    type: field.type,
    label: field.label,
    options: field.options,
    rules: field.rules?.length ? rulesToStringArray(field.rules) : false,
  }),
  select: (field: types.ISelectProps) => ({
    name: field.name,
    type: field.type,
    label: field.label,
    options: field.options,
    rules: field.rules?.length ? rulesToStringArray(field.rules) : false,
  }),
  radio: (field: types.IRadioProps) => ({
    name: field.name,
    type: field.type,
    label: field.label,
    options: field.options,
    rules: field.rules?.length ? rulesToStringArray(field.rules) : false,
  }),
  datepicker: (field: types.IDatepickerProps) => ({
    name: field.name,
    type: field.type,
    label: field.label,
    rules: field.rules?.length ? rulesToStringArray(field.rules) : false,
  }),
  rangepicker: (field: types.IDatepickerProps) => ({
    name: field.name,
    type: field.type,
    label: field.label,
    rules: field.rules?.length ? rulesToStringArray(field.rules) : false,
  }),
};

export const getAntdImports = (fields: any[]): string[] => {
  const importsArray: string[] = [];
  fields.map((field: any) => {
    importsArray.push(ANTDIMPORTS[field.type as keyof types.IAntdImports]);
  });

  return [...new Set(importsArray)];
};

export const getFormProps = (formProps: types.IFormProps): string[] => {
  const formPropsArray: string[] = [];
  for (const key in formProps) {
    if (typeof formProps[key as keyof types.IFormProps] === "string") {
      formPropsArray.push(
        `${key}="${formProps[key as keyof types.IFormProps]}"`
      );
    } else if (typeof formProps[key as keyof types.IFormProps] === "boolean") {
      formPropsArray.push(
        `${key}={${formProps[key as keyof types.IFormProps]}}`
      );
    }
  }

  return formPropsArray;
};

export const rulesToStringArray = (rules: any[]): string[] => {
  return rules.map((rule: any) => JSON5.stringify(rule));
};

export const processFieldsProps = (fields: any[]): any => {
  const processedFields = fields.map((field) => {
    if (field && field.name) {
      return FIELDPROPSFORHANDLEBAR[
        field.type as keyof types.IFieldPropsForHandlebar
      ](field);
    }
  });

  return processedFields;
};
