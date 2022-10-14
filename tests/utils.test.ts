import * as utils from "../src/utils";

describe("Testing utils functions", () => {
  test("Test whether array of imports is returned for given fields", () => {
    expect(
      utils.getAntdImports([
        { type: "text", label: "test" },
        { type: "password", label: "test" },
        { type: "checkbox", label: "test" },
      ])
    ).toEqual(["Input", "Checkbox"]);
  });

  test("Test whether array of form props is returned for given form props", () => {
    expect(
      utils.getFormProps({
        name: "testForm",
        colon: true,
      })
    ).toEqual(['name="testForm"', "colon={true}"]);
  });

  test("Test whether array of field props is returned for given fields", () => {
    expect(
      utils.processFieldsProps([
        {
          name: "testField",
          type: "text",
          label: "test",
          extra: "test",
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
        {
          name: "testField",
          type: "text",
          label: "test",
          extra: "test",
        },
        {
          name: "testField",
          type: "password",
          label: "test",
          extra: "test",
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
        {
          name: "testField",
          type: "password",
          label: "test",
          extra: "test",
        },
        {
          name: "testField",
          type: "checkbox",
          text: "Test Field",
          label: "test",
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
        {
          name: "testField",
          type: "checkbox",
          text: "Test Field",
          label: "test",
        },
        {
          name: "testField",
          label: "test",
          type: "checkboxGroup",
          options: [{ value: "tomato", label: "Tomato" }],
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
        {
          name: "testField",
          label: "test",
          type: "checkboxGroup",
          options: [{ value: "tomato", label: "Tomato" }],
        },
        {
          name: "gender",
          type: "select",
          label: "Gender",
          options: [{ value: "male", label: "Male" }],
        },
        {
          name: "gender",
          type: "select",
          label: "Gender",
          options: [{ value: "female", label: "Female" }],
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
        {
          name: "testField",
          label: "test",
          type: "radio",
          options: [{ value: "apple", label: "Apple" }],
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
        {
          name: "testField",
          label: "test",
          type: "radio",
          options: [{ value: "apple", label: "Apple" }],
        },
        {
          name: "testField",
          label: "test",
          type: "datepicker",
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
        {
          name: "testField",
          label: "test",
          type: "datepicker",
        },
        {
          name: "testField",
          label: "test",
          type: "rangepicker",
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
        {
          name: "testField",
          label: "test",
          type: "rangepicker",
        },
        {
          label: "test",
          name: "testField",
          type: "textarea",
          rows: 4,
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
        {
          label: "test",
          name: "testField",
          type: "textarea",
        },
        {
          name: "testField",
          label: "test",
          type: "switch",
        },
        {
          name: "testField",
          label: "test",
          type: "switch",
          rules: [
            {
              required: true,
              message: "test",
            },
          ],
        },
      ])
    ).toEqual([
      {
        name: "testField",
        type: "text",
        label: "test",
        extra: "test",
        rules: ["{required:true,message:'test'}"],
      },
      {
        name: "testField",
        type: "text",
        label: "test",
        extra: "test",
        rules: false,
      },
      {
        name: "testField",
        type: "password",
        label: "test",
        extra: "test",
        rules: ["{required:true,message:'test'}"],
      },
      {
        name: "testField",
        type: "password",
        label: "test",
        extra: "test",
        rules: false,
      },
      {
        name: "testField",
        type: "checkbox",
        text: "Test Field",
        label: "test",
        rules: ["{required:true,message:'test'}"],
      },
      {
        name: "testField",
        type: "checkbox",
        text: "Test Field",
        label: "test",
        rules: false,
      },
      {
        name: "testField",
        type: "checkboxGroup",
        label: "test",
        options: [{ value: "tomato", label: "Tomato" }],
        rules: ["{required:true,message:'test'}"],
      },
      {
        name: "testField",
        type: "checkboxGroup",
        label: "test",
        options: [{ value: "tomato", label: "Tomato" }],
        rules: false,
      },
      {
        name: "gender",
        type: "select",
        label: "Gender",
        options: [{ value: "male", label: "Male" }],
        rules: false,
      },
      {
        name: "gender",
        type: "select",
        label: "Gender",
        options: [{ value: "female", label: "Female" }],
        rules: ["{required:true,message:'test'}"],
      },
      {
        name: "testField",
        label: "test",
        type: "radio",
        options: [{ value: "apple", label: "Apple" }],
        rules: ["{required:true,message:'test'}"],
      },
      {
        name: "testField",
        label: "test",
        type: "radio",
        options: [{ value: "apple", label: "Apple" }],
        rules: false,
      },
      {
        name: "testField",
        label: "test",
        type: "datepicker",
        rules: ["{required:true,message:'test'}"],
      },
      {
        name: "testField",
        label: "test",
        type: "datepicker",
        rules: false,
      },
      {
        name: "testField",
        label: "test",
        type: "rangepicker",
        rules: ["{required:true,message:'test'}"],
      },
      {
        name: "testField",
        label: "test",
        type: "rangepicker",
        rules: false,
      },
      {
        label: "test",
        name: "testField",
        type: "textarea",
        rows: 4,
        extra: undefined,
        rules: ["{required:true,message:'test'}"],
      },
      {
        label: "test",
        name: "testField",
        type: "textarea",
        extra: undefined,
        rows: undefined,
        rules: false,
      },
      {
        name: "testField",
        label: "test",
        type: "switch",
        rules: false,
      },
      {
        name: "testField",
        label: "test",
        type: "switch",
        rules: ["{required:true,message:'test'}"],
      },
    ]);
  });
});
