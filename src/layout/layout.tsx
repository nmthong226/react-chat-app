import { FC } from "react";
import SideBar from "../components/SideBar";
import clsx from "clsx";
import Header from "../components/Header";

type TProps = {
    children: React.ReactNode;
};

const Layout: FC<TProps> = ({ children }) => {
    return (
        <div className="flex flex-row bg-boxBg dark:bg-zinc-900 min-h-screen">
            {/* Sidebar */}
            <SideBar />
            {/* Main Content */}
            <div className={clsx("flex flex-col min-h-full container w-full flex-1 py-8 px-20")}>
                <Header />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;