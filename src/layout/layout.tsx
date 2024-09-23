import { FC } from "react";
import SideBar from "../components/SideBar";
import clsx from "clsx";
import Header from "../components/Header";

type TProps = {
    children: React.ReactNode;
    user: User | null;
    setAuthenticated: (value: boolean, user: User | null) => void
};

const Layout: FC<TProps> = ({ children, user, setAuthenticated }) => {
    return (
        <div className="flex flex-row bg-boxBg dark:bg-zinc-900 min-h-screen">
            {/* Sidebar */}
            <SideBar user={user} setAuthenticated={setAuthenticated}/>
            {/* Main Content */}
            <div className={clsx("flex flex-col min-h-full flex-grow w-full px-2 sm:px-6 py-4 xsm:py-8 xlg:px-20 mx-auto")}>
                <Header />
                <main className="flex-1 w-full">
                    {children || <p>No content available.</p>}
                </main>
            </div>
        </div>
    );
};

export default Layout;