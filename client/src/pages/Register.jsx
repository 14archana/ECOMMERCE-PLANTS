// // import React from 'react'
// // import {Form, Input,Button} from 'antd';
// // import { Link,  } from 'react-router-dom';
// // import Divider from '../components/Divider';

// // const rules = [
// // {
// //   required : true,
// //   message :'required',
// // },

// // ]

// //  export default function Register() {

// //   const onFinish = (values) => {
// //    console.log("Success:", values);
// //   };
// //     return (
// //     <div 
// //     className='h-screen bg-primary flex-justify-center item-center'
// //     >
// //       <div className='bg-white p-5 rounded w-[450px]'>
// // <h1 className= 'text-primary text-2xl'>PLANTS
// // <span className ="text-gray-400">Register</span>

// // </h1>
// // <Divider/>  
// //       </div>
// // <Form layout='vertical'
// // onFinish={onFinish}>
// //   <Form.Item 
// //   label='Name' name='name' rules={rules}>
// //     <Input placeholder='Name'/> 
// //  </Form.Item> <Form.Item 
// //   label='Email' name='email' rules={rules}>
// //     <Input placeholder='Email'/> 
// //  </Form.Item>
// //  <Form.Item 
// //   label='Password' name='Password'rules={rules} >
// //     <Input type ='password' placeholder='Password'/> 
// //  </Form.Item>
// //  <Button type= 'primary' htmlType='submit'block className='mt-2'>Register</Button>
// //  <div Classname="mt-5 text-center">
// //   <span className='text-grey-500'>
// //     Already have an account? <Link to="/Login"className='text-primary'> Login</Link>
// //   </span>
// //   </div>


// // </Form>

// //     </div>
// //   )
// // }
// import React from 'react';
// import { Form, Input, Button } from 'antd';
// import { Link } from 'react-router-dom';
// import Divider from '../components/Divider';

// const rules = [
//   {
//     required: true,
//     message: 'required',
//   },
// ];

// export default function Register() {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

//   return (
//     <div className="h-screen bg-primary flex justify-center items-center">
//       <div className="bg-white p-5 rounded w-[450px]">
//         <h1 className="text-primary text-2xl">
//           PLANTS
//           <span className="text-gray-400">Register</span>
//         </h1>
//         <Divider />
//       </div>
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item label="Name" name="name" rules={rules}>
//           <Input placeholder="Name" />
//         </Form.Item>
//         <Form.Item label="Email" name="email" rules={rules}>
//           <Input placeholder="Email" />
//         </Form.Item>
//         <Form.Item label="Password" name="password" rules={rules}>
//           <Input type="password" placeholder="Password" />
//         </Form.Item>
//         <Button type="primary" htmlType="submit" block className="mt-2">
//           Register
//         </Button>
//         <div className="mt-5 text-center">
//           <span className="text-gray-500">
//             Already have an account?{' '}
//             <Link to="/Login" className="text-primary">
//               Login
//             </Link>
//           </span>
//         </div>
//       </Form>
//     </div>
//   );
// }


import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import Divider from "../components/Divider";
import "./Register.css"; // Import the CSS file for Register component

const rules = [
  {
    required: true,
    message: "required",
  },
];

export default function Register() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h1 className="register-title">
          PLANTS
          <span className="register-subtitle">Register</span>
        </h1>
        <Divider />
        </div>
 <Form layout='vertical'
 onFinish={onFinish}>
   <Form.Item 
   label='Name' name='name' rules={rules}>
     <Input placeholder='Name'/> 
  </Form.Item> <Form.Item 
   label='Email' name='email' rules={rules}>
     <Input placeholder='Email'/> 
  </Form.Item>
  <Form.Item 
   label='Password' name='Password'rules={rules} >
     <Input type ='password' placeholder='Password'/> 
  </Form.Item>
  <Button type= 'primary' htmlType='submit'block className='mt-2'>Register</Button>
  <div Classname="mt-5 text-center">
   <span className='text-grey-500'>
    Already have an account? <Link to="/Login"className='text-primary'> Login</Link>
   </span>
   </div>


 </Form>

   </div>
  );
}

