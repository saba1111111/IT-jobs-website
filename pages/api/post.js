import { MongoClient } from 'mongodb';

import React from 'react'

 async function post(req,res) {
  if(req.method === 'POST') {
    const datas = req.body;

    const connect = await MongoClient.connect('mongodb+srv://sbs:sbsmaster@cluster0.09cl0tf.mongodb.net/jobs?retryWrites=true&w=majority');
    const db = connect.db();
    const collections = db.collection('jobs');
    const add = await collections.insertOne(datas);
    connect.close();

    res.status(201).json({message: 'Meetup inserted'})
  }
}

export default post
