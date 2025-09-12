import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-8">
      <p className="text-4xl font-bold tracking-wide text-red-600">
        Page Not Found
      </p>
      <Link
        className="rounded-lg bg-blue-400 px-5 py-3 font-semibold tracking-wide"
        to="/"
      >
        Go Home
      </Link>
    </div>
  );
}

export default PageNotFound;
