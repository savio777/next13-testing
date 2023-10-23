export default async function User() {
  const response = await fetch(`https://api.github.com/users/savio777`, {
    cache: "no-store",
  });
  const user = await response.json();

  return (
    <div className="app">
      <h1>User</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
