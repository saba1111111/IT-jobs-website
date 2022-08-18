
import arrow from "../public/assets/arrows.svg"
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Footer from "../Components/Footer";
import Head from "next/head";
const datas = [
	{
		title: 'Who is this site for?',
		text: 'This site is for people who looking for a job and also for the companies who want to hire people.',
		index: 100
	},
	{
		title: 'About all jobs page',
		text: 'This page contains all the job, you can find any kind of it job you want.',
		index: 101
	},
	{
		title: 'About Add New jobs page',
		text: 'This page is for companies, who is hiring people, you can easly post a job and than wait until somene contact you.',
		index: 101
	}
]

export default function Faq() {
	return (
		<Fragment>
			<Head>
      <title>About the site</title>
      <meta name="description" content='This site is for people who looking for a job and also for the companies who want to hire people.' />
    </Head>
		<div className="mt-[50px]">
		{datas.map((a,index) => {
			return (
				<Accordion title={a.title} index={a.index}>
					{a.text}
				</Accordion>
			)
		})}
		</div>
		</Fragment>
	);
}

function Accordion({ title, children }) {
	const [show, setShow] = useState(false);
	return (
		<div
			className={`w-[90%] mx-[auto] flex flex-col my-4  justify-between rounded-[8px]  overflow-hidden border ease-in-out duration-100 ${
				show ? 'border-blue-500' : 'border-black'
			} `}
		>
			<div
				className={`flex justify-between w-full items-center px-5 py-3 cursor-pointer ease-in-out duration-100 ${
					show ? 'text-blue-500 border-b border-blue-500' : 'text-black'
				}`}
				onClick={() => setShow(!show)}
			>
				<h2 className="w-[90%]">{title}</h2>
				<button className={`w-[20px] h-[20px] ease-in-out duration-500 ${show ? 'rotate-180' : ''}`}>
					<Image src={arrow} layout="responsive" alt="arrow" />
				</button>
			</div>
			<div
				className={`text-start w-full ease-in-out duration-500  ${
					show ? 'opacity-100 p-5' : 'h-0 opacity-0 px-5'
				}`}
			>
				{children}
			</div>
		</div>
	);
}
