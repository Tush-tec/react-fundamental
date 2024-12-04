import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Dashboard from '../dashBoard/dashBoard';

const Homepage = () => {
  const [login, setLogin] = useState(false);  // State for tracking login status

  const handleLoginSuccess = () => {
    setLogin(true); // Change state to true when login is successful
  };

  return (
    <div>
      {login === false ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />  // Pass the success handler to LoginPage
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default Homepage;




// import React, { useState } from "react";
// import Dashboard from "./dashBoard/dashBoard";
// import LoginForm from "./LoginForm";

// const Login = () => {
//   const [login, setlogin] = useState(false);
//   const admin_UserName = "UserName";
//   const admin_password = "password ";

//   if (admin_UserName === admin_UserName && admin_password === admin_password) {
//     setlogin(true);
//   }

//   return <div>{itlogin == true ? <Dashboard /> : <LoginForm />}</div>;
// };

// export default Login;
