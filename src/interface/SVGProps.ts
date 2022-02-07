import { CSSProperties, AriaAttributes } from "react";


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
}

export default SVGProps;