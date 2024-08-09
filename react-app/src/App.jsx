import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import Button from './components/Button'
import FormComponent from './components/form/FormComponent';
import Navbar from './components/global/Navbar';
import Register from './components/form/Register';
// import Navbar from './components/global/Navbar'
// import Home from './pages/Home'
// import mySvg from './assets/image/react.svg'
// import Card from './components/Card'
// import Form from './components/form/Form'


function App() {

  const myClass = 'bg-blue-500';

  const [value, setValue] = useState(0);


  const add = () => {
    setValue(value + 1);
    // console.log(value);
  }
  const myFun = () => {

  }

  useEffect(() => {
    // console.log("I am useEffect");
    myFun();
  }, []);

  return (
    <>
      <Register />
      {/* <Navbar /> */}
      {/* <Navbar title="This is navbar" />
      <Home />
      <Card path={mySvg} />
      <Form placeholder="Enter name" />*/}
      {/* <Button text="Go to About" bgColor="bg-blue-500" /> */}
      {/* <button className={`p-2 px-4 ${myClass}`} onClick={add}>Add</button> */}
      {/* <br /> */}
      {/* <span>value = {value}</span> */}

      {/* <FormComponent title="Login" type="login" btnText="Login" />
      <FormComponent title="Register" type="register" btnText="Sign up" /> */}
    </>
  )
}

export default App
