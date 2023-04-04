import Movies from "./Movies";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json()
  console.log(res)
  return (
    <main>
      <h1>Hello Next 12 🔥</h1>
      {res.results.map(movie => (
        <Movies key={movie.id} id={movie.id} title={movie.title} poster_path={ movie.poster_path} release_date={movie.release_date} />
      ))}
    </main>
  );
}
