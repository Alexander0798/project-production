import { FC } from "react";
import cls from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}
interface Props extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<Props> = (props: Props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
