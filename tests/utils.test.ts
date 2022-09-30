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
        labelCol: 4,
        wrapperCol: 8,
        colon: true,
      })
    ).toEqual([
      'name="testForm"',
      "labelCol={{ span: 4 }}",
      "wrapperCol={{ span: 8 }}",
      "colon={true}",
    ]);
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
          label: "test",
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
        label: "test",
        rules: ["{required:true,message:'test'}"],
      },
      {
        name: "testField",
        type: "checkbox",
        label: "test",
        rules: false,
      },
    ]);
  });
});
