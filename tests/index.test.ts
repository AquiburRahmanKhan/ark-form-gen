import * as fs from "fs";

import AFG from "../src/index";

describe("Testing AFG", () => {
  beforeAll(() => {
    fs.writeFileSync(
      "./tests/test.json",
      JSON.stringify({
        form: {
          name: "generated-form",
        },
        fields: [
          {
            label: "Username",
            name: "username",
            type: "text",
            extra: "This is used as a hint",
            rules: [
              {
                required: true,
                message: "Please input your username!",
              },
            ],
          },
        ],
      })
    );
  });

  afterAll(() => {
    fs.unlinkSync("./tests/test.json");
    fs.rmSync("./generatedForm", { recursive: true, force: true });
  });

  test("Test whether form is generated", () => {
    AFG.generateForm("./tests/test.json");
    const content = fs.readFileSync("./generatedForm/form.jsx", "utf8");
    expect(content).toEqual(
      `import { Button, Col, Form, Row, Input } from "antd";
import React from "react";

const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <section
      style={{
        border: "1px solid blue",
        padding: "40px 20px 20px 20px",
        boxSizing: "border-box",
      }}
    >
      <Row>
        <Col span={24}>
           <Form
             form={form}
             name="generated-form"
             onFinish={onFinish}
           >
            <Form.Item
              label="Username"
              name="username"
              extra="This is used as a hint"
              rules={[ 
                {required:true,message:'Please input your username!'},
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        </Row>
    </section>
  );
}

export default App;`
    );
  });
});
