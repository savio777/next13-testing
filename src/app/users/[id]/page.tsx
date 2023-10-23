export interface IPostProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IPostProps) {
  return {
    title: `User ${params.id}`,
  };
}

export default async function Post({ params: { id } }: IPostProps) {
  // static
  /*
 const response = await fetch(`https://api.github.com/users/${id}`);
  const user = await response.json();
 */

  // revalidate
  /*
  const response = await fetch(`https://api.github.com/users/${id}`, {
    next: { revalidate: 5 },
  });
  const user = await response.json();
  */

  // cache options
  const response = await fetch(`https://api.github.com/users/${id}`, {
    cache: "no-store",
  });
  const user = await response.json();

  return (
    <div className="app">
      <h1>User #{id}</h1>

      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
