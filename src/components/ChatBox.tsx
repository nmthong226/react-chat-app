import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ChatBox = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="text-2xl font-semibold">Chat</h1>
      <div className="flex flex-row w-full h-full mt-8">
        <div className="flex flex-1 w-[40%] h-full">
          <div className="flex flex-row w-full h-10 relative items-center text-md">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute" />
            <input className="w-full bg-transparent border-b-[1px] px-6 py-4 border-slate-300 outline-none" placeholder="Search" />
          </div>
        </div>
        <div className="flex w-[60%] h-full bg-slate-300">
          b
        </div>
      </div>
    </div>
  )
}

export default ChatBox