import IconCategoryTv from '@/icons/icon-category-tv';

export default function TvCardText({
  name,
  firstAirDate,
}: {
  name: string;
  firstAirDate: string;
}) {
  return (
    <>
      <div>
        <span>{firstAirDate.split('-')[0]}</span>
        <span>
          <IconCategoryTv /> Tv Serie
        </span>
      </div>
      <h3>{name}</h3>
    </>
  );
}
