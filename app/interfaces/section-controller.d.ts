import { ContentController } from "./content-controller";

export interface SectionController {
    id: string;
    header: string;
    content: ContentController[];
    link?: {
        label: string;
        href: string;
    }
}
