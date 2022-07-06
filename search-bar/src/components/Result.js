function Result({ text, animeEntry }) {
  // console.log("RESULT is reached");
  // console.log(animeEntry.title);
  return (
    <div className="results--list__item">
      <img src={animeEntry.image_url} alt="anime poster image" />
      <a className="anime-link" href={animeEntry.url}>
        {animeEntry.title}
      </a>
    </div>
  );
}

export default Result;
