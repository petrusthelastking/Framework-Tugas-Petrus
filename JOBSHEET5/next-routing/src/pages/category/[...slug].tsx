import { useRouter } from "next/router";

const CategoryPage = () => {
  const { query } = useRouter();
  const slugList = Array.isArray(query.slug)
    ? query.slug
    : query.slug
      ? [query.slug]
      : [];

  return (
    <div>
      <h1>Halaman Category</h1>
      <ul>
        {slugList.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
