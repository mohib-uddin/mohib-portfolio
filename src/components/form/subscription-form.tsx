"use client"
import React, { useState } from 'react';

import StarsCanvas from '@/components/3d/stars';
import {toast} from "react-toastify";

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');

    const mailChangeHandler = (e:any) => {
        setEmail(e.target.value);
    };

    const formSubmitHandler = async (e:any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                },
                body: JSON.stringify({ email: email }), // JSON-stringify the data
            });

            if (response.ok) {
                toast.success("Subscription Successful")
            } else {
                toast.error("Subscription Failed")
            }
        } catch (error) {
            // Handle any network or other errors
            console.error('Error:', error);
        }
    };

    return (
        <>
            <StarsCanvas />
            <div className={'mb-80 active desktop:h-80 w-4/5 rounded-2xl m-auto text-white'}>
                <h2 className={'text-center text-xl desktop:text-3xl font-[700] mt-8'}>
                    Subscribe To Get Notified About My Latest Courses And Blogs And Enhance Your Learning
                </h2>
                <form onSubmit={formSubmitHandler} name={'email'} className={'flex flex-col desktop:flex-row justify-center gap-3.5 items-center mt-8'}>
                    <input
                        onChange={mailChangeHandler}
                        placeholder={'Email Address'}
                        className={'w-full desktop:w-1/2 p-2 text-white active border rounded-xl border-white'}
                    />
                    <button type={'submit'} className={'desktop:w-1/6 w-full cursor-pointer bg-white p-4 rounded-xl text-black'}>
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default SubscriptionForm;
