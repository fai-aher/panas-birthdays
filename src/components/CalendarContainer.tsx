import { useMemo } from "react";
import { getMonthsWithCounts } from "../data/mockFriends";
import { MonthContainer } from "./MonthContainer";

function CalendarContainer() {
  const calendarInfo = useMemo(() => getMonthsWithCounts(), []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mx-auto max-w-400 mt-6">
      {calendarInfo.map((month) => (
        <MonthContainer key={month.number} monthBirthdays={month} />
      ))}
    </section>
  );
}

export default CalendarContainer;
