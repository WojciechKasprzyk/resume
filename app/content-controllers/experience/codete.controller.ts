import { ContentController } from "../../interfaces";
import { Skill } from "@/enums";

export const CodeteController: ContentController =  {
    header: 'July 2017 - September 2019',
    title: 'Web Developer | Comarch Healthcare',
    description: 'Developed a CMS for the healthcare industry, featuring a patient portal for scheduling appointments and accessing medical documentation. Additionally, built a mobile application for health monitoring, similar to the iOS Health app, with seamless integration into the existing healthcare system.',
    skills: [
        Skill.Angular,
        Skill.Typescript,
        Skill.NgRx,
        Skill.RxJs,
        Skill.SCSS,
        Skill.React,
        Skill.NodeJs,
        Skill.ExpressJs,
        Skill.MongoDB,
    ]
}
