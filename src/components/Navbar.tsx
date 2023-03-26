import React from "react";
import {
  Check,
  Settings,
  Calendar,
  LogOut,
  StatsUpSquare,
  ViewGrid,
} from "iconoir-react";
import Icon from "./Icon";

function Navbar(): JSX.Element {
  return (
    <div className="h-screen flex flex-col justify-between py-12 px-6 bg-slate-50">
      <div className="flex flex-col gap-4">
        <Icon>
          <ViewGrid />
        </Icon>
        <Icon>
          <StatsUpSquare />
        </Icon>
        <Icon>
          <Calendar />
        </Icon>
        <Icon>
          <Settings />
        </Icon>
      </div>
      <div>
        <Icon>
          <LogOut />
        </Icon>
      </div>
    </div>
  );
}

export default Navbar;
