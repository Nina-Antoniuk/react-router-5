function Feedback(props) {
  const { options, onLeaveFeedback } = props;

  return (
    <>
      <ul className="list">
        {Object.keys(options).map(key => {
          return (
            <li className="listItem" key={key}>
              <button
                className="reaction"
                onClick={onLeaveFeedback}
                type="button"
              >
                {key}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Feedback;
