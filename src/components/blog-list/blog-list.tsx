import {fetchBlogs} from "@/services/content.service";

const BlogList=async ()=>{
    const blogList=await fetchBlogs();

}
export default BlogList;
