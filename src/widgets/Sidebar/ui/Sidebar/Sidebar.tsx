import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface Props {
    className?: string;
}

export const Sidebar: FC<Props> = ({ className }: Props) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: !collapsed }, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={onToggle}>
                {collapsed ? "<<" : ">>"}
            </Button>
            <div className={classNames(cls.switcher, { [cls.column]: !collapsed }, [])}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
