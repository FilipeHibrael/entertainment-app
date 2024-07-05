import IconCategoryMovie from '@/icons/icon-category-movie';

export default function MovieCardText({
  title,
  releaseDate,
}: {
  title: string;
  releaseDate: string;
}) {
  return (
    <>
      <div>
        <span>{releaseDate.split('-')[0]}</span>
        <span>
          <IconCategoryMovie /> Movie
        </span>
      </div>
      <h3>{title}</h3>
    </>
  );
}
