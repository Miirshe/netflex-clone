import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import NetFlexLogo from "../assets/NetFlex.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { toast } from "react-toastify";
const SignUp = () => {

  const navigate = useNavigate();

  const [type , setType] = useState('password');

  const initialValues = {
    email : '',
    password : ''
  }

  const validationSchema = Yup.object({
    email : Yup.string().required("Please enter a valid email"),
    password: Yup.string().required("Please enter a valid password")
    .matches(/[a-z]/,'password at least one small letter is required')
    .matches(/[A-Z]/,'password at least one capital letter is required')
    .matches(/[0-9]/,'password at least one Number is required')
    .min(8,'password must be less than 8 characters')
  })

  const handleSubmit = async (values , {resetForm}) =>{

    try{
      const { email , password } = values;
      const userCredentails = await createUserWithEmailAndPassword(auth , email , password);
      console.log(userCredentails);
      navigate("/Login");
      toast.success("successfully signup!");
    }catch(err){
      toast.error(err);
      console.log(err);
    }
    resetForm();
  }
  return (
    <div
      className="flex flex-col min-h-screen relative items-center gap-2 p-1"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0/50%),rgb(0 0 0/50%)), 
  url(./images/misc/home.jpeg)`,
      }}
    >
      <img src={NetFlexLogo} className=" absolute left-4  md:left-16 top-10 w-36 h-20" alt="" />

      <div className=" w-[95%] mx-auto md:w-[35%] lg:w-[30%] mt-36 p-5">

        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >

          <Form className=" flex flex-col justify-center items-start bg-gray-900 rounded p-5 space-y-10">
            <h1 className="text-4xl font-bold tracking-widest text-center">SignUp</h1>
            <Field type="email" className="fields" placeholder="Enter your email.." name="email"/>
            <ErrorMessage component="div" className="text-red-500" name="email"/>
            <div className="w-full relative">
            <Field type={type} className="fields" placeholder="Enter your password.." name="password"/>
            {
              type === 'password' ? <BiHide onClick={()=>setType('text')} size={25} className="text-black cursor-pointer inline absolute top-2 right-4" /> : <BiShow  onClick={()=>setType('password')} size={25} className="inline cursor-pointer text-black  absolute top-2 right-4"/>
            }
            <ErrorMessage component="div" className="text-red-500" name="password"/>
            </div>
            <p>I'have an account <Link  className="inline underline text-xl font-bold tracking-widest" to="/Login">Login</Link></p>
            <button type="submit" className="btn">Login</button>
          </Form>
        </Formik>

      </div>
    </div>
  );
};

export default SignUp;
