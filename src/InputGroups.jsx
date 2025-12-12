import "./InputGroups.css";

function InputGroups({ date, setDate, errors }) {
  const updateInputs = (e) => {
    const { name, value } = e.target;
    setDate((prevDate) => ({
      ...prevDate,
      [name]: Number(value),
    }));
  };

  return (
    <>
      <div className="input-groups">
        {["day", "month", "year"].map((field) => (
          <div className="input" key={field}>
            <label className={errors[field] && "error"} htmlFor={field}>
              {field.toUpperCase()}
            </label>
            <input
              className={errors[field] && "input-err"}
              value={date[field]}
              onChange={updateInputs}
              name={field}
              id={field}
              type="text"
              placeholder={
                field === "year" ? "YYYY" : field === "month" ? "MM" : "DD"
              }
            />
            <p className="error">{errors[field]}</p>
          </div>
        ))}
      </div>
      {errors.invalidDate && <p className="error">{errors.invalidDate}</p>}
    </>
  );
}

export default InputGroups;
