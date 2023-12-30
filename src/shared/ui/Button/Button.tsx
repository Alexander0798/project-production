import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = "clear",
}
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<Props> = (props) => {
    const { className, theme, children, ...otherProps } = props;
    return (
        <button type="button" className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
