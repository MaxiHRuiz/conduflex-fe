import { ReactNode } from "react";

export interface ICustomContainerProps {
    breadCrumbs?: boolean
    excludeLink?: string[]
    children: ReactNode
}