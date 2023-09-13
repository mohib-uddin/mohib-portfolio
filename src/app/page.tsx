import {fetchTestimonials} from "@/services/content.service";
import Hero from "@/components/hero/hero";
import WorkTimeline from "@/components/work-timeline/work-timeline";
import Social from "@/components/social/social";
import StarsCanvas from "@/components/3d/stars";
import Projects from "@/components/projects/projects";
import SubscriptionForm from "@/components/form/subscription-form";
export default async function Home() {
    const testimonials=await fetchTestimonials();
    console.log(testimonials)
    return (
        <div>
            <StarsCanvas/>
            <Hero/>
            <Social/>
            <Projects/>
            {/*<About/>*/}
            <WorkTimeline/>
            <SubscriptionForm/>
        </div>
    )
}
