import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import axios from 'axios';
 import {useRouter} from "next/router"
 import { useState } from 'react';
 import ReactTooltip from "react-tooltip";
import Head from 'next/head';
 const Meore = () => {
// /api/post
const router = useRouter();
const [load,setLoad] = useState(false);
const addJobs = async (values) => {
    setLoad(true);
    try {
        const data = await axios.post('/api/post',values);
        router.push('/');
        console.log(data)
    }catch(error) {
        console.log(error);
    }
    setLoad(false);
}

if(load) {
    return (
        <p className='ml-[40%] mt-[100px]'>Loading .................</p>
    )
}
  return (
    <div>
       <Head>
 <title>Add job</title>
 <meta name="description" content='This site is for people who looking for a job and also for the companies who want to hire people.' />
</Head>
    <div className='w-[100%] grid place-content-center mt-[100px]'>
        <p className='text-blue-500 text-[30px]'>Add a Job Easy</p>
      </div>
      <div className='max-w-[600px]  mb-[50px] mt-[10px] mx-[auto] p-[5px]'>
    <Formik
      initialValues={{name: "",type: '', email: "",salary: '',hashtag: '',Description: '',choose: '',Qualifications: ''}}
      validationSchema = {Yup.object({
             name: Yup.string().required("required"),
             email: Yup.string().email("invalid email adress").required("required"),
             type:  Yup.string().min(5,'more than 5').required("required"),
             salary:  Yup.string().required("required").typeError('you must specify a number'),
             hashtag:   Yup.string().required("required"),
             Description: Yup.string().required("required"),
             choose: Yup.string().required('required').oneOf(["remote", "office"]),
             Qualifications: Yup.string().required("required"),
           })}
      onSubmit={(values) => addJobs(values)} 
    >
     <Form>
           <div className='flex flex-col' ><div>
           <label htmlFor="firstinput" className='text-[20px] '>Company Name:</label>
           </div>
           <Field  id="firstinput" name="name" className="border-[1px] border-black w-[80%] p-[5px] rounded-[10px] mt-[10px]" />
           <ErrorMessage  name='name'>{errori => <p className='text-red-500'>{errori}</p>}</ErrorMessage>
           </div>
           <div className='mt-[20px] flex flex-col' >
           <label htmlFor="secondinput" className='text-[20px] '>Job type: </label>
           <Field  id="secondinput" name="type" className="border-[1px] border-black w-[80%] p-[5px] rounded-[10px] mt-[10px]" />
           <ErrorMessage  name='type'>
            {errori => <p className='text-red-500'>{errori}</p>}
           </ErrorMessage>
           </div>
           <div className='mt-[20px] flex flex-col' >
           <div className='flex justify-between w-[80%]'>
           <label htmlFor="firstinput" className='text-[20px] ' >Salary:</label>
           <div data-for="Salary" data-tip="just type a number and than add currency" className='bg-black text-white  rounded-full w-[20px] h-[20px] grid place-content-center pb-[2px] cursor-pointer'>!</div>
           </div>
           <ReactTooltip className="" id="Salary" backgroundColor="black" textColor="white" effect="solid" place="right"   />
           <Field  id="thirdinput" name="salary" className="border-[1px] border-black w-[80%] p-[5px] rounded-[10px] mt-[10px]" />
           <ErrorMessage  name='salary'>
            {errori => <p className='text-red-500'>{errori}</p>}
           </ErrorMessage>
           </div>
           <div className='mt-[20px] flex flex-col' >
           <label htmlFor="email" className='text-[20px] '>Email: </label>
           <Field  id="email" name="email" className="border-[1px] border-black w-[80%] p-[5px] rounded-[10px] mt-[10px]" />
           <ErrorMessage  name='email'>
            {errori => <p className='text-red-500'>{errori}</p>}
           </ErrorMessage>
           </div>
           <div className='mt-[20px] flex flex-col' >
           <div className='flex justify-between w-[80%]'>
           <label htmlFor="firstinput" className='text-[20px] ' >Hashtags:</label>
           <div data-for="Hashtags" data-tip="just type key words like this #frontend #programing, this helps you find person more easy." className='bg-black text-white  rounded-full w-[20px] h-[20px] grid place-content-center pb-[2px] cursor-pointer'>!</div>
           </div>
           <ReactTooltip className="" id="Hashtags" backgroundColor="black" textColor="white" effect="solid" place="right"   />
           <Field  id="hashtag" name="hashtag" className="border-[1px] border-black w-[80%] p-[5px] rounded-[10px] mt-[10px]" />
           <ErrorMessage  name='hashtag'>
            {errori => <p className='text-red-500'>{errori}</p>}
           </ErrorMessage>
           </div>
         <div className='mt-[20px] flex flex-col'>
         <label htmlFor="Description" className='text-[20px] '>Description</label>
         <Field  id="Description" name="Description" as="textarea" className="border-[1px] border-black w-[80%] p-[5px] rounded-[10px] mt-[10px]" />
         <ErrorMessage name='Description'>
           {
             errorMesigi => <p className='text-red-500'>{errorMesigi}</p>
           }
         </ErrorMessage><br />
         </div>
         <div className='mt-[20px] flex flex-col'>
         <label htmlFor="Qualifications" className='text-[20px] '>Qualifications</label>
         <Field  id="Qualifications" name="Qualifications" as="textarea" className="border-[1px] border-black w-[80%] p-[5px] rounded-[10px] mt-[10px]" />
         <ErrorMessage name='Qualifications'>
           {
             errorMesigi => <p className='text-red-500'>{errorMesigi}</p>
           }
         </ErrorMessage><br />
         </div>
         <div className='mt-[10px] flex flex-col'>
         <label htmlFor="SELECT" className='text-[20px] '>Work from ?</label>
          <Field name="choose" id="SELECT" as="select" className="border-[1px] border-black w-[80%] p-[5px] py-[10px] rounded-[10px] mt-[10px]" >
          {/* <option value="" disabled> </option> */}
          <option >Work from ?</option>
           <option value="remote" >remote</option>
          <option value="office" >office</option>
          </Field>
          <ErrorMessage name='choose'>
           {
             errorMesigi =>  <p className='text-red-500'>{errorMesigi}</p>
           }
          </ErrorMessage>
          </div>
           <button type='submit' className='flex justify-center items-center  w-[120px] h-[50px] bg-[#3498db] text-white rounded-[20px] cursor-pointer text-[18px] hover:scale-[1.01] mt-[30px] '><p>submit</p></button>
     </Form>

    </Formik>
    </div>
    </div>
  )
}

 export default Meore
