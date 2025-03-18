export default async function Home() {
  const res = await fetch("http://localhost:3010/users");
  const users = await res.json();
  console.log("data", users);

  return <div>Landing page</div>;
}
