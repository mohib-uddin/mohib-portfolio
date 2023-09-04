import {fetchTestimonials} from "@/services/content.service";

import Image from "next/image";
import Hero from "@/components/hero/hero";
export default async function Home() {
    const testimonials=await fetchTestimonials();
    console.log(testimonials)
  return (
    <main>
        {/*{testimonials.map((e,index)=>{*/}
        {/*    return(*/}
        {/*        <div key={index}>*/}
        {/*            {e.name}*/}
        {/*            {e.company}*/}
        {/*            {e.feedback}*/}
        {/*            {e.imgurl&&<Image width={100} height={50} alt={`${"testimonial"+index}`} src={e.imgurl}/>}*/}
        {/*        </div>*/}
        {/*    )*/}
        {/*})}*/}
        <Hero/>
    </main>
  )
}
