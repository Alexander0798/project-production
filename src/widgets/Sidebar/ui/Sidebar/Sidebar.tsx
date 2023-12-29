import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface Props {
    className?: string;
}

export const Sidebar: FC<Props> = ({ className }: Props) => {
    const [collapsed, setCollapsed] = useState(false);
 
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher/>
            </div>
        </div>
    );
};
