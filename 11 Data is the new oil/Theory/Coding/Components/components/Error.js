import { useRouteError } from "react-router-dom";
//Anything starting with use is an hook , hook is basically a function

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  
  return (
    <div className="m-4 p-4">
      <h1 className="text-4xl py-2">Oops!!!</h1>
      <h2 className="text-3xl py-2">Something went wrong</h2>
      <h1 className="text-2xl text-red-500 ">{err.status}: {err.statusText}</h1>
    </div>
  )
}
export default Error;