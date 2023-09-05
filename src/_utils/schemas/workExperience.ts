export const workexperience= {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {
               name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
        {
            name:'start',
            title:'start',
            type:'date'
        },
        {
            name:'end',
            title:'end',
            type:'date'
        },
        {
            name:'position',
            title:'position',
            type:'string'
        },
            {
                name:'desc',
                title:'Desc',
                type:'string'
            },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}
