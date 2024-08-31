import { Skill } from "../enums";

export abstract class ContentController {
    static header: string;
    static title: string;
    static description: string;
    static skills: Skill[];
}
