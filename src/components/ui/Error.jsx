import { useRouteError } from "react-router-dom";

function Error({ error }) {
  const routerError = useRouteError();

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-5">
      <p className="text-4xl font-semibold tracking-wide text-red-600">
        Somthing Went Wrong
      </p>
      <p className="text-[20px]">{error?.message || routerError}</p>
    </div>
  );
}

export default Error;
