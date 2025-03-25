import Link from "next/link";

export default async function Home() {
  // const res = await fetch("http://localhost:3010/api/users");
  // const users = await res.json();
  // console.log("data", users);

  return (
    <div>
      <Link href="signup">Sign Up</Link>
      <Link href="signin">Sign In</Link>
    </div>
  );
}
