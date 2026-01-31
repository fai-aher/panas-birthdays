import { Calendar, PartyPopper, TrendingUp, User } from "lucide-react";
import CalendarContainer from "./components/CalendarContainer";
import { Header } from "./components/Header";
import { MetricCard } from "./components/MetricCard";

function App() {
  return (
    <>
      <Header />
      <main className="p-6 flex-1 bg-secondary">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-400">
          <MetricCard title="Total Friends" icon={User}>
            <p className="text-foreground text-3xl font-bold">142</p>
          </MetricCard>

          <MetricCard title="Next Up" icon={PartyPopper}>
            <p className="text-foreground text-xl font-bold truncate">
              Sarah Jenkins
            </p>
            <p className="text-primary text-sm font-semibold">Tomorrow</p>
          </MetricCard>

          <MetricCard title="This Month" icon={Calendar}>
            <p className="text-foreground text-3xl font-bold">8</p>
          </MetricCard>

          <MetricCard title="Monthly Highlight" icon={TrendingUp}>
            <div className="flex flex-col gap-1 mt-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground font-semibold">
                  Most Common Age
                </span>
                <span className="text-primary font-bold">28</span>
              </div>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>Milestone (30th)</span>
                <span>2 Friends</span>
              </div>
            </div>
          </MetricCard>
        </section>

        <CalendarContainer />
      </main>
    </>
  );
}

export default App;
