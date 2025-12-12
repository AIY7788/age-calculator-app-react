import "./Displays.css";

function Displays({ age }) {
  return (
    <div className="display-section">
      <p>
        <span>{age.year ? age.year : "- -"}</span>
        {age.year !== 1 ? "years" : "year"}
      </p>
      <p>
        <span>{age.month ? age.month : "- -"}</span>
        {age.month !== 1 ? "months" : "month"}
      </p>
      <p>
        <span>{age.day ? age.day : "- -"}</span>
        {age.day !== 1 ? "days" : "day"}
      </p>
    </div>
  );
}

export default Displays;
