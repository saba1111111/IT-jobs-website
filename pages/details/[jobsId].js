import React from 'react'
import {MongoClient,ObjectId} from 'mongodb';

import {useRouter} from "next/router";
import { data } from 'autoprefixer';
function jobsId(props) {
    const datas = props.datas;
  return (
    <div className='mt-[50px] ml-[5%]'>
        <div className='text-[20px] border-t-[1px] max-w-[600px]'>
      <p className='mb-[10px]'>Comapny: {datas.name}</p>
      <p className='mb-[10px]'>Job:  {datas.type}</p>
      <p>salary:  {datas.salary}</p>
      <p className='mt-[10px]'>Work place: {datas.choose}</p>
      </div>

      <div className='mt-[30px]'>
        <p className='text-[20px] mb-[20px] border-t-[1px] max-w-[600px] pb-[5px]'>Description</p>
        <p className='max-w-[600px]'>{datas.Description}</p>
      </div>
      <div className='mt-[30px]'>
        <p className='text-[20px] mb-[20px] border-t-[1px] max-w-[600px] pb-[5px]'>Qualifications</p>
        <p className='max-w-[600px]'>{datas.Qualifications}</p>
      </div>
      <div className='my-[40px] border-t-[1px] max-w-[600px]'>
      <p className=''>If you want to join as a {datas.type}, send as your cv {datas.email} :)</p>
      </div>
      {/* <p>{datas.email}</p>
      <p>{datas.salary}</p>
      <p>{datas.hashtag}</p>
      <p>{datas.Description}</p>
      <p>{datas.Qualifications}</p> */}
    </div>
  )
}

export async function getStaticPaths() {
    const connect = await MongoClient.connect('mongodb+srv://sbs:sbsmaster@cluster0.09cl0tf.mongodb.net/jobs?retryWrites=true&w=majority');
const db = connect.db();
const collection = db.collection('jobs');
const idGroup = await collection.find({},{_id: 1}).toArray();
    return {
        paths: idGroup.map(a => ({params: {jobsId: a._id.toString()}})),
         fallback: false
    }

}
export async function getStaticProps(context) {
 const id = context.params.jobsId
const connect = await MongoClient.connect('mongodb+srv://sbs:sbsmaster@cluster0.09cl0tf.mongodb.net/jobs?retryWrites=true&w=majority');
const db = connect.db();
const collection = db.collection('jobs');
const exactly = await collection.findOne({_id: ObjectId(id)})
    return {
        props: {
            datas: {
        id: exactly._id.toString(),
        name: exactly.name,
        type: exactly.type,
        email: exactly.email,
        salary: exactly.salary,
        hashtag: exactly.hashtag,
        Description: exactly.Description,
        choose: exactly.choose,
        Qualifications: exactly.Qualifications
            }    
        }
    }
}
export default jobsId
