import {fetchTestimonials} from "@/services/content.service";
import Hero from "@/components/hero/hero";
import WorkTimeline from "@/components/work-timeline/work-timeline";
import Social from "@/components/social/social";
import StarsCanvas from "@/components/3d/stars";
export default async function Home() {
    const testimonials=await fetchTestimonials();
    console.log(testimonials)
  return (
    <div>
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
        <StarsCanvas/>
        <Hero/>
        <Social/>
        <WorkTimeline/>
    </div>
  )
}
