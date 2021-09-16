import React from "react";

export function NextArrow(props) {

    //props contains- className style onClick
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style }}
                onClick={props.onClick}
            />
        </>
    );
}

export function PrevArrow(props) {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style }}
                onClick={props.onClick}
            />
        </>
    );
}