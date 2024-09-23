import { FC } from "react";
import UserAvatar from "./UserAvatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFileLines, faGear, faHome, faMessage, faTag } from '@fortawesome/free-solid-svg-icons';

type SideBarProps = {
  user: User | null;  // Accept user data as prop
};

const SideBar: FC<SideBarProps> = ({ user }) => {
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
    <aside className="flex flex-col w-64 h-screen bg-sidebarBg">
      {user ?
        (
          <UserAvatar className="mt-6 items-center" userName={name} userAvatar={avatar} />
        ) :
        (
          <div aria-label="Loading..." role="status" className="flex flex-col items-center justify-center space-y-4 mt-6">
            <div className="flex w-20 h-20 rounded-full bg-gray-50 animate-pulse items-center justify-center">
              <svg className="h-10 w-10 animate-spin stroke-gray-300" viewBox="0 0 256 256">
                <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
                <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                </line>
                <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
                <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                </line>
                <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
                <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                </line>
              </svg>
            </div>
            <div className="text-lg text-zinc-700 font-semibold">Loading...</div>
          </div>
        )
      }
      <nav>
        <ul className="flex flex-col w-full gap-4 text-md mt-8 uppercase text-zinc-500 font-semibold">
          {navItems.map(({ icon, label, active }) => (
            <li
              key={label}
              className={`flex flex-row items-center space-x-6 py-2 px-8 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer border-l-4 hover:border-l-blue-600 ${active ? 'text-blue-600 border-l-blue-600' : 'border-l-transparent'}`}
            >
              <FontAwesomeIcon icon={icon} className="size-4" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside >
  );
}

export default SideBar