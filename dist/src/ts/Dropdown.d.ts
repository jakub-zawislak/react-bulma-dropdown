import { FC, ReactNode } from "react";
declare type DropdownProps = {
    children: ReactNode;
    className?: string;
    trigger?: string | ReactNode;
    margin?: number;
    portal?: HTMLElement | null;
    isAnimated?: boolean;
    openOnMount?: boolean;
    hideOnLinkClick?: boolean;
};
declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
