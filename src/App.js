import React from "react";
import {
  Button,
  Flex,
  Dropdown,
  ConfigProvider,
  Checkbox,
  Form,
  Input,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
const onMenuClick = (e) => {
  console.log("click", e);
};
const items = [
  {
    key: "1",
    label: "1st item",
  },
  {
    key: "2",
    label: "2nd item",
  },
  {
    key: "3",
    label: "3rd item",
  },
];
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const App = () => (
  <div style={{ marginTop: "10%", marginLeft: "10%" }}>
    <Flex gap="small" wrap="wrap">
      <Button
        ghost
        icon={<SearchOutlined />}
        size="large"
        type="primary"
        loading
      >
        Primary Button
      </Button>
      <Button block disabled>
        Default Button
      </Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button danger block type="link">
        Link Button
      </Button>
      <Dropdown.Button
        menu={{
          items,
          onClick: onMenuClick,
        }}
      >
        Actions
      </Dropdown.Button>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultBg:
                "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);",
              defaultBorderColor: "red",
            },
          },
        }}
      >
        <Button>Default Button</Button>
      </ConfigProvider>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  </div>
);
export default App;
