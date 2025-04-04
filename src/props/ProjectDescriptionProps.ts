import {ReactNode} from "react";
import {AssociatedProjectProps} from "./AssociatedProjectProps";
import { GalleryProps } from "./GalleryProps";

export type ProjectDescriptionProps = {
    otherProjectsLinkSpace?: ReactNode,
    image?: string,
    tags?: ReactNode[],
    descriptionContent: {
        header: string,
        anchor?: string,
        links?: ReactNode[],
        associatedProjects?: AssociatedProjectProps[],
        gallery?: GalleryProps[]
    },
    children: ReactNode
};
