// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ConfigProvider } from 'antd';
// import 'tailwindcss/tailwind.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ConfigProvider
//       theme={{
//         components: {
//           Button: {
//             color: '#40513B',
//             colorHover: '#40513B',
//             borderRadius: '2px',
            
//           },
//         },
//         token : {
//           borderRadius :"2px"
//           // colorPrimary : '#40513B' 1:07:17
//         },
//       }}
//     >
//       <App />
//     </ConfigProvider>
//   </React.StrictMode>
// );

// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import 'tailwindcss/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            color: '#40513B',
            colorHover: '#40513B',
            borderRadius: '2px',
          },
        },
        token: {
          borderRadius: '2px',
          colorPrimary: '#40513B' 
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
