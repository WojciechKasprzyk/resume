import { ContentController } from "@/abstracts";
import { Skill } from "@/enums";

export class CodeteController extends ContentController {
    static header = 'July 2017 - September 2019';
    static title = 'Web Developer | Comarch Healthcare';
    static description = 'Developed a CMS for the healthcare industry, featuring a patient portal for scheduling appointments and accessing medical documentation. Additionally, built a mobile application for health monitoring, similar to the iOS Health app, with seamless integration into the existing healthcare system.';
    static skills = [
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
