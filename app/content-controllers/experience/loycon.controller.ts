import { ContentController } from "@/abstracts";
import { Skill } from "@/enums";

export class LoyconController extends ContentController {
    static header = 'October 2019 - February 2022';
    static title = 'Frontend Developer | Loycon Systems';
    static description = 'Built the real estate market application connecting buyers, brokers, and developers.';
    static descriptionList = [
        'Built fleet management system allowing users to track devices mounted on objects working for heavy industry',
        'Built three cross-platform mobile applications to implement specific components of a fleet management system',
        'Focused on performance optimisation',
        'Handling thousands of data snapshots per device, for hundreds of devices per customer, across thousands of customers'
    ]
    static skills = [
        Skill.Angular,
        Skill.Typescript,
        Skill.NgRx,
        Skill.RxJs,
        Skill.SCSS,
        Skill.Nx,
        Skill.Material,
        Skill.MapApi,
        Skill.PrimeNg,
        Skill.Flutter,
        Skill.Dart,
    ]
}
