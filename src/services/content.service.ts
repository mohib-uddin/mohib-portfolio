import {client} from "@/_utils/config/sanity-config";
import {groq} from "next-sanity";
import {testimonialsType} from "@/_utils/types";

export const fetchTestimonials=():Promise<testimonialsType[]>=>{
    return client.fetch(groq`*[_type=="testimonials"]{
     name,
     company,
  "imgurl": imgurl.asset->url,
     feedback
    }`)
}
