import * as handlebarUtils from "../src/handlebar";

import Handlebars from "handlebars";

jest.mock("handlebars");

describe("Testing handlebar functions", () => {
  test("Successfully register partials", () => {
    handlebarUtils.registerPartials(["formOpenTagPartial", "inputPartial"]);
    expect(Handlebars.registerPartial).toHaveBeenCalledTimes(2);
  });

  test("Successfully register form template", () => {
    handlebarUtils.registerFormTemplate("../src/templates/form.hbs");
    expect(Handlebars.compile).toHaveBeenCalledTimes(1);
  });
});
