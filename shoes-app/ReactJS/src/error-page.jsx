import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center items-center">
      <h1 className="font-black text-3xl">Oops!</h1>
      <p>Sorry 🥲, an unexpected error has occurred .</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}