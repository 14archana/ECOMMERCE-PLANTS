// import React from "react";
//  import { Form, Input, Button } from "antd";
//  import { Link } from "react-router-dom";
//  import Divider from "../components/Divider";
//  import "./Login.css";

//  const rules = [
//    {
//      required: true,
//      message: "required",
//   },
//  ];

//  export default function Login() {
//    const onFinish = (values) => {
//      console.log("Success:", values);
//    };
//    return (
//      <div className="h-screen bg-primary flex-justify-center item-center">
//        <div className="bg-white p-5 rounded w-[450px]">
//          <h1 className="text-primary text-2xl">
//            PLANTS
//            <span className="text-gray-400">Login</span>
//          </h1>
//          <Divider />
//        </div>
//        <Form layout="vertical" onFinish={onFinish}>
//          <Form.Item label="Email" name="email" rules={rules}>
//            <Input placeholder="Email" />
//          </Form.Item>
//          <Form.Item label="Password" name="Password" rules={rules}>
//            <Input type="password" placeholder="Password" />
//          </Form.Item>
//          <Button type="primary" htmlType="submit" block className="mt-2">
//            Register
//          </Button>
//          <div className="mt-5 text-center">
//            <span className="text-gray-500">             Don't have an account?{" "}
//           <Link to="/Register" className="text-primary">
//         Register
//              </Link>
//            </span>
//          </div>
//        </Form>
//      </div>
//    );
//  }
import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import Divider from "../components/Divider";
import "./Login.css"; // Import the CSS file for Register component

const rules = [
  {
    required: true,
    message: "required",
  },
];

export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-title">
          PLANTS
          <span className="login-subtitle">Login</span>
        </h1>
        <Divider />
      </div>
      <Form layout="vertical" onFinish={onFinish} className="register-form">
        <Form.Item label="Email" name="email" rules={rules}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Password" name="Password" rules={rules}>
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block className="login-button">
          Login
        </Button>
        <div className="register-footer">
          <span className="register-footer-text">
            Do not have an account?{" "}
            <Link to="/Register" className="register-footer-link">
              Register
            </Link>
          </span>
        </div>
      </Form>
    </div>
  );
}


