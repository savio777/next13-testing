export interface IPostProps {
  params: {
    id: string;
  };
}

export default function Post({ params: { id } }: IPostProps) {
  return (
    <div className="app">
      <h1>Post #{id}</h1>
    </div>
  );
}
