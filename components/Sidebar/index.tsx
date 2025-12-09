import {
  BellIcon,
  HashIcon,
  HomeIcon,
  LogOutIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import NavLink from "./NavLink";

export default function Sidebar() {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col items-center md:items-start gap-4 shadow">
      <div className=" grow flex flex-col items-center md:items-start gap-4">
        <NavLink href="/" name="Home" icon={<HomeIcon />} />
        <NavLink href="/search" name="Search" icon={<SearchIcon />} />
        <NavLink href="/explore" name="Explore" icon={<HashIcon />} />
        <NavLink
          href="/notification"
          name="Notifications"
          icon={<BellIcon />}
        />
        <NavLink href="/profile" name="Profile" icon={<UserIcon />} />
      </div>
      <div className="">
        <NavLink href="/logout" name="Logout" icon={<LogOutIcon />} />
      </div>
    </div>
  );
}
