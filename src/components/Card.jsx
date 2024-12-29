export default function Card({
  id,
  value,
  isFlipped,
  clickCallback,
  userCanClick,
  isMatched,
}) {
  const classes =
    "card " +
    (isFlipped || isMatched ? " flipped" : "") +
    (userCanClick && !isFlipped && !isMatched ? " clickable" : "") +
    (isMatched ? " matched" : "");
  const imgClass = `card-${value + 1}`;
  const onClick = () => {
    if (userCanClick && !isFlipped && !isMatched) {
      clickCallback(id, value);
    }
  };

  return (
    <div className={classes} onClick={onClick}>
      <div className="card-face card-back">
        <div className={"card-border"}></div>
      </div>
      <div className={`card-face card-front ${imgClass}`}>
        <div className={"card-border"}></div>
      </div>
    </div>
  );
}
