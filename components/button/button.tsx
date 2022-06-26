import * as React from 'react';
import classnames from "../../utils/classnames";
import { ButtonColor, ButtonShape, ButtonSize, ButtonType } from "./types";

type ButtonProps = {
    children: string;
    outline: boolean;
    disabled: boolean;
    wide: boolean;
    color: ButtonColor;
    size: ButtonSize;
    type: ButtonType;
    shape?: ButtonShape;
    onClick: any;
}

const Button = (props: ButtonProps) => {
    const { children, color, outline, size, disabled, type, shape, wide, onClick } = props;

    const classes = classnames(
        'btn',
        `btn-${color}`,
        size && `btn-${size}`,
        outline && 'btn-outline',
        disabled && 'btn-disabled',
        shape && `btn-${shape}`,
        wide && 'btn-wide'
    )

    if (type === 'link') return <a role="button" className={classes}>{children}</a>

    return <button className={classes} onClick={onClick}>{children}</button>

}


Button.defaultProps = {
    color: 'primary',
    outline: false,
    size: '',
    disabled: false,
    type: 'button',
    wide: false,
    onClick: () => console.log('I am a weird button')
}

export default Button;
