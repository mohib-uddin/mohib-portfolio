import {fetchTestimonials} from "@/services/content.service";
import Hero from "@/components/hero/hero";
import WorkTimeline from "@/components/work-timeline/work-timeline";
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
        <WorkTimeline/>
    </main>
  )
}
