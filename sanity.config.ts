import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk";
import {schemaTypes} from "@/_utils/schemas";
const config=defineConfig({
    projectId: 'frttttqt',
    dataset: 'production',
    title:"mohib-portfolio",
    basePath:"/admin",
    plugins:[deskTool()],
    schema:{types:schemaTypes}
})
export default config;
