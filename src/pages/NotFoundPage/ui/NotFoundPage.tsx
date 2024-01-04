import { FC } from "react";
import cls from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const NotFoundPage: FC<Props> = ({ className }: Props) => {
    const { t } = useTranslation("notFoundPage");
    return <div className={classNames(cls.NotFoundPage, {}, [className])}>{t("Страница не найдена")}</div>;
};
