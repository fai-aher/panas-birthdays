import { mockFriends } from "../data/mockFriends";
import { getMonthsWithCounts } from "../utils/friendUtils";
import { MonthContainer } from "./MonthContainer";

export function CalendarContainer() {
  const calendarInfo = getMonthsWithCounts(mockFriends);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mx-auto max-w-400 mt-6">
      {calendarInfo.map((month) => (
        <MonthContainer key={month.number} monthBirthdays={month} />
      ))}
    </section>
  );
}
