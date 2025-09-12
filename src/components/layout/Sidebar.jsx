import { CgProfile } from "react-icons/cg";
import { LuDatabase } from "react-icons/lu";
import ButtonLink from "../ui/ButtonLink";

function Sidebar() {
  return (
    <div className="hidden w-fit min-w-55 border-r border-neutral-200 bg-neutral-100 pt-8 lg:block">
      <nav>
        <ul className="flex flex-col gap-1">
          <li>
            <ButtonLink to="/">
              <LuDatabase />
              Data
            </ButtonLink>
          </li>
          <li>
            <ButtonLink to="/profile">
              <CgProfile />
              Profile
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
