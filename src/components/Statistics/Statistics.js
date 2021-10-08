function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p>Good - {good}</p>
      <p>Neutral - {neutral}</p>
      <p>Bad - {bad}</p>
      <p>Total feedback - {total()}</p>
      <p>Positive feedback percentage - {positivePercentage()}</p>
    </>
  );
}
export default Statistics;
