export type testimonialsType={
    name:string;
    company:string;
    imgurl:string;
    feedback:string;
}
export type workExperienceType={
    name:string;
    company:string;
    start:Date;
    end:Date;
    desc:string[];
    imgurl:string[];
    position:string;

}

export type projectType={
    title:string;
    description:string;
    codeLink:string;
    projectLink:string;
    imgUrl:string;
    tags:string[];
    slug:{
        current:string;
    };
    dependencies:string[];
}

export type aboutType={
    title:string;
    description:string;
    imgUrl:string;
}

export type blogType={
    imgUrl:string;
    title:string;
    slug:{
        current:string;
    },
    publishedAt:string;
    body:any;
}
