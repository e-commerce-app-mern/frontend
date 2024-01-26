import { MdError } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="container not-found">
      <MdError />
      <h1>Page Not Found</h1>
    </div>
  );
}
