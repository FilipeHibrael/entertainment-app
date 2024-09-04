import getPopularActorsList from '@/actions/get-popular-actors-list';
import ActorsList from '@/components/actors-list/actors-list';

export default async function ActorsPage() {
  const actorsLists = await Promise.all([
    getPopularActorsList(1),
    getPopularActorsList(2),
    getPopularActorsList(3),
  ]);

  return (
    <main>
      <h1 style={{ fontWeight: '300', fontSize: '2rem', marginBottom: '2rem' }}>
        Popular actors
      </h1>
      {actorsLists.map((actorsList) => (
        <ActorsList data={actorsList.data} error={actorsList.error} />
      ))}
    </main>
  );
}
