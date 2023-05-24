import { ReactNode } from "react";
import {
  Link,
  Outlet,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import { clsx } from "clsx";

export function Layout() {
  return (
    <main className="w-full p-6 max-w-lg mx-auto">
      <div className="mb-12">
        <nav>
          <ul className="w-full flex justify-between">
            <li>
              <Link
                className="hover:underline focus:ring-4 px-2 py-1 text-base font-semibold text-gray-600"
                to="/"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline focus:ring-4 px-2 py-1 text-base font-semibold text-gray-600"
                to="/history"
              >
                HISTORY
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline focus:ring-4 px-2 py-1 text-base font-semibold text-gray-600"
                to="/report"
              >
                REPORT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </main>
  );
}

function ErrorBoudaryLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full p-4 max-w-screen-sm absolute left-1/2 top-16 -translate-x-1/2">
      {children}
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <ErrorBoudaryLayout>
          <h1 className="text-center text-3xl font-bold text-gray-800">
            404 not found
          </h1>
          <p className="text-center text-lg py-4 text-gray-700">
            Page you're looking for is not found
          </p>
          <div className="w-full flex justify-center">
            <Link
              className={clsx(
                "bg-blue-800 text-base font-medium px-4 py-2 rounded-lg text-white",
                "hover:bg-blue-700",
                "focus:ring-4"
              )}
              to="/"
            >
              Click here to return to homepage
            </Link>
          </div>
        </ErrorBoudaryLayout>
      );
    }
    if (error.status === 401) {
      return (
        <ErrorBoudaryLayout>
          <h1 className="text-center text-3xl font-bold text-gray-800">
            404 You aren't authorized
          </h1>
          <p className="text-center text-base py-4 text-gray-700">
            You will be redirect to homepage in 5 second
          </p>
          <div className="w-full flex justify-center">
            <Link
              className={clsx(
                "bg-blue-800 text-base font-medium px-4 py-2 rounded-lg text-white",
                "hover:bg-blue-700",
                "focus:ring-4"
              )}
              to="/"
            >
              Click here if nothing happens
            </Link>
          </div>
        </ErrorBoudaryLayout>
      );
    }
    if (error.status === 503) {
      return (
        <ErrorBoudaryLayout>
          <h1 className="text-center text-3xl font-bold text-gray-800">
            404 Internal server error
          </h1>
          <p className="text-center text-base py-4 text-gray-700">
            contact our customer service for further action
          </p>
        </ErrorBoudaryLayout>
      );
    }
  }

  return (
    <ErrorBoudaryLayout>
      <h1 className="text-center text-3xl font-bold text-gray-800">
        Something went wrong!
      </h1>
      <p className="text-center text-base py-4 text-gray-700">
        contact our customer service for further action
      </p>
    </ErrorBoudaryLayout>
  );
}
