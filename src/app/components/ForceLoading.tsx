interface IForceLoading {
  ms: number;
}

export default async function ForceLoading({ ms }: IForceLoading) {
  await new Promise((res) => setTimeout(res, ms));

  return <div />;
}
