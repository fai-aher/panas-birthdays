import { CalendarContainer } from "./components/CalendarContainer";
import { Header } from "./components/Header";
import { MetricCardContainer } from "./components/MetricCardContainer";

function App() {
  return (
    <>
      <Header />
      <main className="p-6 flex-1 bg-secondary">
        <MetricCardContainer />
        <CalendarContainer />
      </main>
    </>
  );
}

export default App;
