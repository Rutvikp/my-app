import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./FadeIn.css";

export default function FadeIn({ children }) {
    return (
        <CSSTransition in appear timeout={500} classNames="fade">
            {children}
        </CSSTransition>
    );
}