import { ContentController } from "../../interfaces";
import { Skill } from "@/enums";

export const LoyconController: ContentController =  {
    header: 'October 2019 - February 2022',
    title: 'Frontend Developer | Loycon Systems',
    description: 'Built the real estate market application connecting buyers, brokers, and developers.',
    descriptionList: [
        'Built fleet management system allowing users to track devices mounted on objects working for heavy industry',
        'Built three cross-platform mobile applications to implement specific components of a fleet management system',
        'Focused on performance optimisation',
        'Handling thousands of data snapshots per device, for hundreds of devices per customer, across thousands of customers'
    ],
    skills: [
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
