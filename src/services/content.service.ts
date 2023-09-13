import {client} from "@/_utils/config/sanity-config";
import {groq} from "next-sanity";
import {aboutType, blogType, projectType, testimonialsType, workExperienceType} from "@/_utils/types";
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

export const fetchBlogs=():Promise<blogType[]>=>{
    return client.fetch(groq`*[_type=="blogPost"]{
     title,
     slug,
     publishedAt,
  "imgUrl": imgUrl.asset->url,
  body
    }`)
}
export const fetchBlogsBySlug=(slug:string):Promise<blogType>=>{
    return client.fetch(groq`*[_type=="blogPost" && slug.current == "${slug}"]{
     title,
     slug,
     publishedAt,
  "imgUrl": imgUrl.asset->url,
  body
    }[0]`)
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
export const fetchProjectsByTag = (tag: string): Promise<projectType[]> => {
    return client.fetch(
        groq`*[_type == "works" && "${tag}" in tags]{
            title,
            description,
            projectLink,
            codeLink,
            slug,
            "imgUrl": imgUrl.asset->url,
            tags,
            dependencies
        }`
    );
};

export const fetchAbout=():Promise<aboutType>=>{
    return client.fetch(groq`*[_type=="abouts"]{
     title,
     description,
  "imgUrl": imgUrl.asset->url,
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
