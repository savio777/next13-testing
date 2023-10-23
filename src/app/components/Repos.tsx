export default async function Repos() {
  const response = await fetch(`https://api.github.com/users/savio777/repos`, {
    cache: "no-store",
  });
  const userRepos = await response.json();

  return (
    <div className="app">
      <h1>Repos</h1>
      <p>{JSON.stringify(userRepos)}</p>
    </div>
  );
}
