import { faBell } from "@fortawesome/free-regular-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
    return (
        <header className="flex w-full justify-end items-center space-x-16">
            <div className="flex items-center space-x-2 text-md hover:cursor-pointer">
                <span>Status: Sale</span>
                <FontAwesomeIcon icon={faCaretDown} className="size-4 text-zinc-500"/>
            </div>
            <FontAwesomeIcon icon={faBell} className="size-4 hover:cursor-pointer"/>
        </header>
    )
}

export default Header