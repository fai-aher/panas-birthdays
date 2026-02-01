import { CalendarContainer } from "./components/CalendarContainer";
import { Header } from "./components/Header";
import { MetricCardContainer } from "./components/MetricCardContainer";

function App() {
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

export default App;
