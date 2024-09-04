import { Skill } from "@/enums";

interface ContentController {
    readonly header?: string;
    readonly title?: string;
    readonly description?: string;
    readonly descriptionList?: string[];
    readonly skills?: Skill[];
}
