import React, { useLayoutEffect } from "react";

const Modal = props => {

    const useLockBodyScroll = () => {
        useLayoutEffect(() => {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = 'hidden';
            return () => document.body.style.overflow = originalStyle;
        }, []);
    }

    if (props.isOpen) {
        useLockBodyScroll();
    }

    return props.isOpen && (
        <div className="wedding-modal">
            <div className="content">
            <span className="close" onClick={props.onClose}>X</span>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
