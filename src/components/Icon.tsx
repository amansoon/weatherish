import { IconoirProvider } from "iconoir-react";

type iconProps = {
  children?: (string | JSX.Element) | (string | JSX.Element)[];
};

function IconoirIcon({ children }: iconProps) {
  return (
    <div className="p-1 text-slate-600 hover:text-slate-900 transition-all cursor-pointer">
      <IconoirProvider
        iconProps={{
          strokeWidth: 1.25,
          width: "24px",
          height: "24px",
        }}
      >
        {children}
      </IconoirProvider>
    </div>
  );
}

export default IconoirIcon;
