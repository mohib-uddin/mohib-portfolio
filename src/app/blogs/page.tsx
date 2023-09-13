import {fetchBlogs} from "@/services/content.service";
import AnimatedContainer from "@/components/animations/animated-container";
import Image from "next/image";
import ProjectView from "@/components/projects/project-view";
import BLogView from "@/components/blog-list/blog-view";




const Blogs=async()=>{
    const blogs=await fetchBlogs();
 return(
     <section className={'flex m-auto  flex-col w-full desktop:w-11/12 xl__screens:w-1/2  desktop:px-desktop__container large__desktop:px-large__screen_container p-4'}>
         <h2 className={'mt-10 font-[700]  large__desktop:leading-snug  dark:text-white  text-4xl large__desktop:text-5xl text-center m-auto'}>Blogs</h2>
         <div className={'grid gap-4 grid-cols-1 desktop:grid-cols-3'}>
             {blogs.map((blog,index)=>{
                 return(
                     <AnimatedContainer key={index} className={' relative bg-glass-light dark:bg-glass mt-4 p-4 rounded shadow-4xl'} initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: 1,delay:0.25*(index+1) }}  >
                         {blog.imgUrl&&<Image className={'rounded-2xl object-cover mb-2'} width={400} height={50} alt={`${"testimonial"+index}`} src={blog.imgUrl}/>}
                         <BLogView slug={blog.slug} title={blog.title}/>
                         {/*<p className={'text-sm text-color__secondary mt-2'}>{blog.description}</p>*/}
                     </AnimatedContainer>
                 )
             })}
         </div>

     </section>
 )
}

export default Blogs;
