import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export function Portal(props: PortalProps) {
    const { children, element } = props;
    return createPortal(children, element);
}
