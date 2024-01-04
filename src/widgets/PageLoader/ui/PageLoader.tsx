import { FC } from "react";
import cls from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";

interface Props {
    className?: string;
}

export const PageLoader: FC<Props> = ({ className }: Props) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
