import Result from "./Result";

function Results({ text, animeData }) {
  // console.log(animeData);
  return (
    <>
      {animeData.map((animeEntry) => (
        <Result animeEntry={animeEntry} />
      ))}
    </>
  );
}

export default Results;
