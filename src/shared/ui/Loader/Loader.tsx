import { FC } from "react";
import "./Loader.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface Props {
    className?: string;
}

export const Loader: FC<Props> = ({ className }: Props) => {
    return (
        <div className={classNames("lds-ellipsis", {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
