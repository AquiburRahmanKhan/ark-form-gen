import * as fs from "fs";

export const readFile = (filePath: string) => {
  try {
    const fileContent: string = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (err: any) {
    console.error(`No such file found for ${err.path}`);
    process.exit();
  }
};

export const readHandlebarTemplate = (filePath: string) => {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err: any) {
    console.error(`No such file found for ${err.path}`);
    process.exit();
  }
};

export const writeFile = (filePath: string, html: string) => {
  try {
    fs.writeFileSync(filePath, html);
    console.log(`Successfully generated form at ${filePath}`);
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

const checkIfDirectoryDoesNotExist = (dirPath: string) => {
  return !fs.existsSync(dirPath);
};

export const createDirectory = (dirPath: string) => {
  try {
    if (checkIfDirectoryDoesNotExist(dirPath)) {
      fs.mkdirSync(dirPath);
    }
  } catch (err: any) {
    console.error(err);
    process.exit();
  }
};
