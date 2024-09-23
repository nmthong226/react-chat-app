import { FC } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type UserAvatarProps = {
  userAvatar?: string;
  userName?: string;
  className?: string;
  openSideBar?: boolean;
};

const UserAvatar: FC<UserAvatarProps> = ({ userAvatar, userName, className, openSideBar }) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <img src={userAvatar} alt="user avatar" className={clsx('h-12 w-12 lg:w-20 lg:h-20 rounded-full border-4 border-white hover:cursor-pointer', className)} loading="eager"/>
      <div className='flex flex-row items-center space-x-2 hover:cursor-pointer'>
        <span className={`text-lg text-zinc-700 font-semibold ${openSideBar ? '' : 'max-lg:hidden'}`}>{userName}</span>
        <FontAwesomeIcon icon={faChevronDown} className='size-2 lg:size-3'/>
      </div>
    </div>
  )
}

export default UserAvatar