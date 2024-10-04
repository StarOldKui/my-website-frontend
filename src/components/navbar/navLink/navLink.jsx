import Link from "next/link";

const NavLink = ({item}) => {
  return (
    <Link href={item.path} key={item.title}>{item.title}</Link>
  );
};

export default NavLink;