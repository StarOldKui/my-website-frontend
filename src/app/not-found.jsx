import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <Link href={"/"}>Return home page</Link>
    </div>
  );
};

export default NotFound;