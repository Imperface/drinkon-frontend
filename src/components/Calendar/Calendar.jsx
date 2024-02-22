import { useState } from 'react';
import { StyledDatePicker } from './Calendar.styled';
import { getYear, getMonth } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1980, getYear(new Date()) + 1, 1);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  function range(start, end, step) {
    const length = Math.floor(Math.abs((end - start) / step)) + 1;
    return Array.from({ length }, (_, index) => start + index * step);
  }

  return (
    <StyledDatePicker
      dateFormat="dd/MM/yyyy"
      placeholderText="dd/mm/yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showYearDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={7}
      shouldCloseOnSelect={true}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {'<'}
          </button>

          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {'>'}
          </button>
        </div>
      )}
    />
  );
};

export default Calendar;
