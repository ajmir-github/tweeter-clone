export default async function Page({
  params,
}: {
  params: Promise<{ hashtags: string[] }>;
}) {
  const { hashtags } = await params;
  return (
    <div>
      <div>Hashtags</div>
      <ul>
        {hashtags.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
