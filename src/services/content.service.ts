import {client} from "@/_utils/config/sanity-config";
import {groq} from "next-sanity";
import {projectType, testimonialsType, workExperienceType} from "@/_utils/types";
import projects from "@/components/projects/projects";

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

export const fetchProjects=():Promise<projectType[]>=>{
    return client.fetch(groq`*[_type=="works"]{
     title,
     description,
     projectLink,
     codeLink,
     slug,
  "imgUrl": imgUrl.asset->url,
  tags
    }`)
}
export const fetchProjectBySlug = (slug: string): Promise<projectType | null> => {
    return client
        .fetch(
            groq`*[_type=="works" && slug.current == "${slug}"]{
        title,
        description,
        projectLink,
        codeLink,
        slug,
        "imgUrl": imgUrl.asset->url,
        tags,
        dependencies
      }[0]`)
};
