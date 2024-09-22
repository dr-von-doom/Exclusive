import { Link, useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();

  // Divide la ruta en segmentos para formar el breadcrumb
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Función para capitalizar la primera letra
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="w-full rounded-md p-3 ml-4">
      <ol className="list-reset flex">
        <li className="text-gray-500">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          // Construye la ruta parcial para cada segmento del breadcrumb
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="hover:text-red-500">{capitalize(value)}</span>
              ) : (
                <Link to={to} className="text-gray-500">
                  {capitalize(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
