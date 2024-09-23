import { FC, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

type UserAvatarProps = {
  userAvatar?: string;
  userName?: string;
  className?: string;
  openSideBar?: boolean;
  setAuthenticated: (value: boolean, user: User | null) => void;
};

const UserAvatar: FC<UserAvatarProps> = ({ userAvatar, userName, className, openSideBar, setAuthenticated }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference to the dropdown element
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    alert('Navigating to Profile...');
  };

  const handleLogout = () => {
    localStorage.removeItem('userData'); // Clear user data from local storage
    setAuthenticated(false, null);
    navigate('/login'); // Redirect to login page
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      <div className='flex flex-col items-center justify-center space-y-4 '>
        <img
          src={userAvatar}
          alt="user avatar"
          className={clsx('h-12 w-12 lg:w-20 lg:h-20 rounded-full border-4 border-white hover:cursor-pointer', className)}
          loading="eager"
        />
        <div className="flex flex-row items-center space-x-2 hover:cursor-pointer" onClick={handleToggleDropdown}>
          <span className={`text-lg text-zinc-700 font-semibold ${openSideBar ? '' : 'max-lg:hidden'}`}>{userName}</span>
          <FontAwesomeIcon icon={faChevronDown} className="size-2 lg:size-3" />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className={`absolute lg:top-36 lg:right-0 bg-white shadow-lg rounded-lg w-32 text-left z-10 ${openSideBar ? 'top-[120px] right-0' : 'top-12 left-16'}`}
        >
          <ul className="py-1">
            <li
              onClick={handleProfileClick}
              className="px-4 py-1 hover:bg-gray-100 hover:cursor-pointer text-md"
            >
              User Profile
            </li>
            <li
              onClick={handleLogout}
              className="px-4 py-1 hover:bg-gray-100 hover:cursor-pointer text-red-500 text-md"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
