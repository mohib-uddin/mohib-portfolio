import BackButton from "@/components/navbar/back-button";
import {PortableText} from "@portabletext/react";

export async function generateMetadata({ params }: { params:{slug:string} }) {
    const slug=params.slug;
    const blog=await fetchBlogsBySlug(slug);
    if(blog)
    {
        return { title: blog.title};
    }
    return { title: 'Project'};
}



import {fetchBlogsBySlug, fetchProjectBySlug} from "@/services/content.service";
import Image from "next/image";
import StarsCanvas from "@/components/3d/stars";

const Blog=async({ params }: { params:{slug:string} })=>{

    const slug=params.slug;
    const blog=await fetchBlogsBySlug(slug);
    console.log(blog)

    return (
        <>
            <StarsCanvas/>
            <article className={'bg-glass-light dark:bg-glass laptop:w-4/5 m-auto p-4 rounded-2xl mt-4 desktop:px-desktop__container large__desktop:px-large__screen_container large__mobile::px-mobile__container'}>
                <div className={'flex mt-4 items-center gap-4'}>
                    <BackButton/>
                    <h2 className={'font-[700] text-3xl desktop:w-4/5'}>{blog?.title}</h2>
                </div>
                <p className={'px-10 mt-4 text-color__secondary'}>Published At: {blog.publishedAt.split('T')[0]}</p>
                {blog?.imgUrl&&<Image className={'mt-10 rounded-2xl object-cover mb-2'} width={800} height={50} alt={`${"testimonial"}`} src={blog.imgUrl}/>}
                <div className={'article'}>
                    <PortableText value={blog.body}/>
                </div>
            </article>
        </>

    )

}

export default Blog;
