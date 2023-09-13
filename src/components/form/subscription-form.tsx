import StarsCanvas from "@/components/3d/stars";
const SubscriptionForm=()=>{

    return(
        <>
            <StarsCanvas/>
            <div className={'mb-80 active desktop:h-80  w-4/5 rounded-2xl m-auto text-white'}>
                <h2 className={'text-center text-xl desktop:text-3xl font-[700] mt-8'}>Subscribe To Get Notified About My Latest Courses And Blogs And Enhance Your Learning</h2>
                <form  name={'email'} className={'flex flex-col desktop:flex-row justify-center gap-3.5 items-center mt-8'}>
                    <input placeholder={'Email Address'} className={'w-full desktop:w-1/2 p-2 text-white active border rounded-xl border-white'}/>
                    <button className={'desktop:w-1/6 w-full  cursor-pointer bg-white p-4 rounded-xl text-black'}>Register</button>
                </form>
            </div>
        </>

    )
}

export default SubscriptionForm;
