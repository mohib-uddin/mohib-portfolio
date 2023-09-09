import {client} from "@/_utils/config/sanity-config";
import {groq} from "next-sanity";
import {testimonialsType, workExperienceType} from "@/_utils/types";

export const fetchTestimonials=():Promise<testimonialsType[]>=>{
    return client.fetch(groq`*[_type=="testimonials"]{
     name,
     company,
  "imgurl": imgurl.asset->url,
     feedback
    }`)
}

export const fetchWorkExperiences=():Promise<workExperienceType[]>=>{
    return client.fetch(groq`*[_type=="workExperience"]{
     name,
     company,
     start,
     position,
     end,
     desc,
  "imgurl": imgurl.asset->url,
    }`)
}

export const fetchBlogs=():Promise<workExperienceType[]>=>{
    return client.fetch(groq`*[_type=="blogPost"]{
     title,
     slug,
     publishedAt,
     blog,
  "imgurl": imgurl.asset->url,
    }`)
}
