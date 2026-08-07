import { FC, ReactNode } from 'react';
export declare type ControlRefType = {
    hide: () => void;
    open: () => void;
};
declare type DropdownProps = {
    children: ReactNode;
    className?: string;
    trigger?: string | ReactNode;
    margin?: number;
    portal?: HTMLElement | null;
    isAnimated?: boolean;
    openOnMount?: boolean;
    hideOnLinkClick?: boolean;
    controlRef?: (ref: ControlRefType) => void;
    onOpen?: () => void;
    onClose?: () => void;
};
declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
