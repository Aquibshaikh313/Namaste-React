import { useRouteError } from "react-router-dom";
//Anything starting with use is an hook , hook is basically a function

const Error = () => {
  const err = useRouteError();
  console.log(err);
  
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <h1>{err.status}: {err.statusText}</h1>
    </div>
  )
}
export default Error;