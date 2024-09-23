import { FC, useState } from "react";
import UserAvatar from "./UserAvatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendar, faFileLines, faGear, faHome, faMessage, faTag } from '@fortawesome/free-solid-svg-icons';

type SideBarProps = {
  user: User | null;  // Accept user data as prop
};

const SideBar: FC<SideBarProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const { name, avatar } = user || {};
  const navItems = [
    { icon: faHome, label: 'Properties' },
    { icon: faMessage, label: 'Chat', active: true },
    { icon: faCalendar, label: 'Calendar' },
    { icon: faTag, label: 'Offers' },
    { icon: faFileLines, label: 'Documents' },
    { icon: faGear, label: 'Settings' },
  ];
  return (
    <>
      {/* Button to toggle sidebar on mobile screens */}
      <div
        className="flex sm:hidden absolute left-2 top-4 xsm:top-8"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Sidebar */}
      <aside className={`flex flex-col max-sm:absolute w-16 lg:w-52 xlg:w-64 min-h-screen bg-sidebarBg transform ${open ? 'translate-x-0 w-52' : '-translate-x-full'} transition-transform duration-300 sm:translate-x-0 z-50`}>
        {/* User Avatar */}
        {user ? (
          <UserAvatar className="mt-6 items-center" userName={name} userAvatar={avatar} openSideBar={open} />
        ) : (
          <div aria-label="Loading..." role="status" className="flex flex-col items-center justify-center space-y-4 mt-6">
            <div className="flex w-20 h-20 rounded-full bg-gray-50 animate-pulse items-center justify-center">
              {/* SVG loading spinner */}
              <svg className="h-10 w-10 animate-spin stroke-gray-300" viewBox="0 0 256 256"></svg>
            </div>
            <div className="text-lg text-zinc-700 font-semibold">Loading...</div>
          </div>
        )}

        {/* Navigation Menu */}
        <nav>
          <ul className="flex flex-col w-full gap-4 text-md mt-8 uppercase text-zinc-500 font-semibold">
            {navItems.map(({ icon, label, active }) => (
              <li
                key={label}
                className={`flex flex-row items-center ${open ? 'px-8' : 'max-lg:justify-center'} space-x-6 py-2 lg:px-3 xlg:px-8 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer border-l-4 hover:border-l-blue-600 ${active ? 'text-blue-600 border-l-blue-600' : 'border-l-transparent'}`}
              >
                <FontAwesomeIcon icon={icon} className="size-4" />
                <span className={`${open ? '' : 'max-lg:hidden'}`}>{label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for closing the sidebar */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden z-10"
          onClick={() => setOpen(false)} // Close sidebar when clicking on the overlay
        ></div>
      )}
    </>
  );
}

export default SideBar