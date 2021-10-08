function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2 className="title">Statistics</h2>
      <p>Good - {good}</p>
      <p>Neutral - {neutral}</p>
      <p>Bad - {bad}</p>
      <p>Total feedback - {total()}</p>
      <p>Positive feedback percentage - {positivePercentage()}</p>
    </div>
  );
}
export default Statistics;
