import UserAvatar from "./UserAvatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFileLines, faGear, faHome, faMessage, faTag } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
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
      <UserAvatar className="mt-6 items-center" />
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
    </aside>
  );
}

export default SideBar