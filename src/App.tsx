import { CalendarContainer } from "./components/containers/CalendarContainer";
import { MetricCardContainer } from "./components/containers/MetricCardContainer";
import { Header } from "./components/ui/Header";

export function App() {
  return (
    <>
      <Header />
      <main className="bg-surface flex-1 p-6">
        <MetricCardContainer />
        <CalendarContainer />
      </main>
    </>
  );
}
