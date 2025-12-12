import "./App.css";
import InputGroups from "./InputGroups";
import Displays from "./Displays";
import { useState } from "react";
import dayjs from "dayjs";

function App() {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [age, setAge] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  const [errors, setErrors] = useState("");

  const handleClick = () => {
    const today = dayjs();
    const dob = dayjs(
      `${date.year}-${String(date.month).padStart(2, "0")}-${String(
        date.day
      ).padStart(2, "0")}`
    );
    const newErrors = { day: "", month: "", year: "", invalidDate: "" };

    if (!date.year) {
      newErrors.year = "This field is required";
    } else if (isNaN(date.year)) {
      newErrors.year = "Must be a valid year";
    } else if (date.year > today.year()) {
      newErrors.year = "Must be in the past";
    }

    if (!date.month) {
      newErrors.month = "This field is required";
    } else if (isNaN(date.month) || date.month < 1 || date.month > 12) {
      newErrors.month = "Must be a valid month";
    }

    const daysInMonth = dayjs(
      `${date.year}-${String(date.month).padStart(2, "0")}-01`
    ).daysInMonth();

    if (!date.day) {
      newErrors.day = "This field is required";
    } else if (isNaN(date.day) || date.day < 1 || date.day > daysInMonth) {
      newErrors.day = "Must be a valid day";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((v) => v !== "")) return;

    const years = today.diff(dob, "year");
    const afterYears = dob.add(years, "year");
    const months = today.diff(afterYears, "month");
    const afterMonths = afterYears.add(months, "month");
    const days = today.diff(afterMonths, "day");

    setAge({ year: years, month: months, day: days });
  };

  return (
    <div className="container">
      <InputGroups date={date} setDate={setDate} errors={errors} />

      <div className="container-btn">
        <hr />
        <button onClick={handleClick}>
          <img src="icon-arrow.svg" alt="Icon-arrow" />
        </button>
      </div>

      <Displays age={age} />
    </div>
  );
}

export default App;
