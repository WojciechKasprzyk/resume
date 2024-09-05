import { ContentController } from "../../interfaces";
import { Skill } from "@/enums";

export const ComarchController: ContentController =  {
    header: 'March 2022 - July 2023',
    title: 'Senior Frontend Developer | Codete (now Exadel Europe)',
    description: ['Developed micro frontend monorepo application for the real estate market, connecting buyers, brokers, and developers.'],
    skills: [
        Skill.Angular,
        Skill.Typescript,
        Skill.NgRx,
        Skill.RxJs,
        Skill.SCSS,
        Skill.Nx,
        Skill.Material,
        Skill.Storybook,
    ]
}
