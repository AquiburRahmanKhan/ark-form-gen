import * as fileFunctions from "./files";
import * as handlebarUtils from "./handlebar";
import * as types from "./types";
import * as utils from "./utils";

const generateForm = (filePath: string) => {
  const formData: types.IFormData = fileFunctions.readFile(filePath);

  // Get Imports Array
  formData.importsArray = utils.getAntdImports(formData.fields);

  // Get Form Props String Array
  formData.formPropsArray = utils.getFormProps(formData.form);

  // Get Fields Props String Array
  formData.fieldsPropsArray = utils.processFieldsProps(formData.fields);

  // Register Handlebar partials
  handlebarUtils.registerPartials([
    "formOpenTagPartial",
    "inputPartial",
    "passwordPartial",
    "checkboxPartial",
    "checkboxGroupPartial",
    "selectPartial",
    "radioPartial",
    "datepickerPartial",
    "rangepickerPartial",
  ]);

  // Register Main Template

  const template = handlebarUtils.registerFormTemplate(
    "../src/templates/form.hbs"
  );

  // Fill Template With Data And Return As Html String
  const htmlString = template({
    importsArray: formData.importsArray,
    formPropsArray: formData.formPropsArray,
    fieldsPropsArray: formData.fieldsPropsArray,
  });

  fileFunctions.createDirectory("./generatedForm");

  fileFunctions.writeFile("./generatedForm/form.jsx", htmlString);
};

export default { generateForm };
