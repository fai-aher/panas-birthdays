import { useMemo } from "react";
import { mockFriends } from "../data/mockFriends";
import { getMonthsWithCounts } from "../utils/friendUtils";
import { MonthContainer } from "./MonthContainer";

export function CalendarContainer() {
  const calendarInfo = useMemo(() => getMonthsWithCounts(mockFriends), []);

  return (
    <section className="mx-auto mt-6 grid max-w-400 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {calendarInfo.map((month) => (
        <MonthContainer key={month.number} monthBirthdays={month} />
      ))}
    </section>
  );
}
