import React, { CSSProperties, AriaAttributes } from "react";

// props for the SVGs
interface SVGProps extends AriaAttributes {
    // class names for the svg
    className?: string;
    // description text
    description?: string | null;
    size?: string | number | null;
    color?: string | null;
    // CSS style properties
    style?: CSSProperties;
    // width of the svg
    width?: number | string | null;
    // height of the svg
    height?: number | string | null;
    // click event for svg elements
    onClick?: React.MouseEventHandler<SVGSVGElement> | undefined;

}

export default SVGProps;