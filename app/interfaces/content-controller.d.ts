import { Skill } from "@/enums";

interface ContentController {
    readonly header?: string;
    readonly title?: string;
    readonly descriptionClass?: string;
    readonly description?: html[];
    readonly descriptionList?: string[];
    readonly skills?: Skill[];
}
