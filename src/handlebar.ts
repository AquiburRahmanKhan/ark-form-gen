import * as fileFunctions from "./files";

import Handlebars from "handlebars";
import path from "path";

const H = require("just-handlebars-helpers");
H.registerHelpers(Handlebars);

const registerPartial = (partialName: string) => {
  Handlebars.registerPartial(
    partialName,
    fileFunctions.readHandlebarTemplate(
      path.resolve(__dirname, `../src/templates/partials/${partialName}.hbs`)
    )
  );
};

export const registerPartials = (partialNames: string[]) => {
  partialNames.map((partialName: string) => registerPartial(partialName));
};

export const registerFormTemplate = (templatePath: string) => {
  const templateString = fileFunctions.readHandlebarTemplate(
    path.resolve(__dirname, templatePath)
  );

  return Handlebars.compile(templateString);
};
