import {MongoClient} from "mongodb"
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from "next/link"
import Loader from "../Components/Loader"
import Footer from "../Components/Footer"


 function Home(props) {
  // const datas = props.datas;
  if(!props.datas) {
    <Loader />
  }
  return (
   <Fragment>
    <Head>
      <title>It jobs</title>
      <meta name="description" content='This site is for people who looking for a job and also for the companies who want to hire people.' />
    </Head>
    <div className='max-w-[1000px]   mx-[auto] mt-[100px]'>
      {
       props.datas.map((datas,index) => {
        return (
          <div key={index} className='w-[100%] md:h-[150px] border-[1px] border-[#2c3e50] rounded-[10px] flex justify-between px-[2%] mb-[40px] mob-res'>
            <div className='flex flex-col h-[100%] justify-center'>
              <p className='text-black font-bold text-[18px]'>{datas.type}</p>
              <p className='mt-[10px] text-gray-500'>{datas.name}</p>
            </div>
            <div className='h-[100%] flex items-center max-w-[200px] text-blue-700 mrgin'>
               <p>{datas.hashtag}</p>
            </div>
            <div className='flex items-center mrgin'>
            <div className='flex justify-center items-center  w-[120px] h-[70px] bg-green-500 text-white rounded-[20px] cursor-pointer text-[18px] mr-[5px] hover:scale-[1.01]'>
              <p className='mr-[5px]'>Salary:</p>
              <p>{datas.salary}</p>
            </div>
            <div className='flex justify-center items-center  w-[120px] h-[70px] bg-[#3498db] text-white rounded-[20px] cursor-pointer text-[18px] hover:scale-[1.01]'><Link href={'/details/' + datas.id}><p>Details</p></Link></div>
            </div>
          </div>
        )
       })
      }
    </div>
    <Footer />
   </Fragment>
  )
}

export async function getServerSideProps() {
      const connect = await MongoClient.connect('mongodb+srv://sbs:sbsmaster@cluster0.09cl0tf.mongodb.net/jobs?retryWrites=true&w=majority');
      const db = connect.db();
      const document = db.collection('jobs');
      const infos = await document.find().toArray();
      const changes = [infos[infos.length - 1],...infos];
      connect.close();
      console.log(infos)
  return {
    props: {
      datas: changes.slice(0,changes.length - 1).map(a => ({
        id: a._id.toString(),
        name: a.name,
        type: a.type,
        email: a.email,
        salary: a.salary,
        hashtag: a.hashtag,
        Description: a.Description,
        choose: a.choose,
        Qualifications: a.Qualifications
      }))
    }
  }
}
export default Home