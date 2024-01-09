import Link from "next/link";
import { createElement } from "react";

type Props = {
  routes: { url: string; title: string; icon: React.ElementType }[];
  show: boolean;
};

const RenderRoutes = ({ routes, show }: Props) => {
  return (
    <>
      {routes.map((route) => {
        return (
          <Link
            href={route.url}
            className="group p-1 rounded-md hover:bg-green-100 hover:text-green-600  dark:hover:bg-slate-200"
            key={route.title}
          >
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div
                  className={`absolute bg-green-600 text-white text-[0.7rem] p-1 rounded-md -top-6 left-[0.7rem] transform -translate-x-1/2 invisible ${
                    show && "md:hidden"
                  } group-hover:visible`}
                >
                  {route.title}
                </div>
                {createElement(route.icon, {
                  className:
                    "text-slate-500 group-hover:text-green-600 transition-opacity shrink-0 duration-200 cursor-pointer",
                  size: 24,
                })}
              </div>
              <span className={`hidden ${show && "md:inline"}`}>
                {route.title}
              </span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default RenderRoutes;
