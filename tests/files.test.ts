import * as fileFunctions from "../src/files";
import * as fs from "fs";

describe("Testing file functions", () => {
  beforeAll(() => {
    fs.writeFileSync("./tests/test.json", JSON.stringify({ name: "test" }));
  });

  afterAll(() => {
    fs.unlinkSync("./tests/test.json");
    fs.rmSync("./tests/testFolder", { recursive: true, force: true });
  });

  test("If file exists in path, read and return parsed content using function readFile", () => {
    expect(fileFunctions.readFile("./tests/test.json")).toEqual({
      name: "test",
    });
  });

  test("If file does not exist in path, log error using function readFile", () => {
    expect(() => fileFunctions.readFile("./fakePath.json")).toThrow(
      "No such file found for ./fakePath.json"
    );
  });

  test("If file exists in path, read and return parsed content using function readHandlebarTemplate", () => {
    expect(fileFunctions.readHandlebarTemplate("./tests/test.json")).toEqual(
      '{"name":"test"}'
    );
  });

  test("If file does not exist in path, log error using function readHandlebarTemplate", () => {
    expect(() =>
      fileFunctions.readHandlebarTemplate("./fakePath.json")
    ).toThrow("No such file found for ./fakePath.json");
  });

  test("Test whether folder is created if it does not exist in given path", () => {
    fileFunctions.createDirectory("./tests/testFolder");
    expect(fs.existsSync("./tests/testFolder")).toBe(true);
  });

  test("Test whether error is thrown when createDirectory fails", () => {
    expect(() =>
      fileFunctions.createDirectory(
        "./tests/testFolder/testFolder2/testFolder3"
      )
    ).toThrow(
      "ENOENT: no such file or directory, mkdir './tests/testFolder/testFolder2/testFolder3'"
    );
  });

  test("Test whether text is written on file in given path", () => {
    fileFunctions.writeFile("./tests/testFolder/test.txt", "test");
    expect(fs.readFileSync("./tests/testFolder/test.txt", "utf8")).toEqual(
      "test"
    );
  });

  test("Test whether error is thrown when writeFile fails", () => {
    expect(() =>
      fileFunctions.writeFile(
        "./tests/testFolder/testFolder2/testFolder3/test.txt",
        "test"
      )
    ).toThrow(
      "ENOENT: no such file or directory, open './tests/testFolder/testFolder2/testFolder3/test.txt'"
    );
  });
});
