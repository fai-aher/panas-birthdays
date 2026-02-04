import { Cake } from "lucide-react";
import ReactConfetti from "react-confetti";
import type { Friend } from "../../types";

interface BirthdayCelebrationProps {
  birthdayFriends: Friend[];
}

export function BirthdayCelebration({
  birthdayFriends,
}: BirthdayCelebrationProps) {
  const count = birthdayFriends.length;

  return (
    <section className="mx-auto w-full max-w-400 flex-1">
      <div className="relative mb-8 flex min-h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-pink-200 bg-linear-to-br from-pink-50 via-white to-pink-100 p-8 text-center shadow-sm md:min-h-0 md:p-10">
        {/* Confetti animation */}
        <ReactConfetti
          gravity={0.1}
          height={948}
          initialVelocityX={2}
          initialVelocityY={2}
          numberOfPieces={200}
          opacity={1}
          recycle
          run
          width={1563}
          wind={0}
        />

        {/* Main content */}
        <div className="animate-fade-in-up relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-foreground text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
            Today we have{" "}
            <span className="text-primary drop-shadow-sm">{count}</span>{" "}
            {count === 1 ? "birthday" : "birthdays"}, Happy Birthday!
          </h1>

          <div className="mt-2 flex items-center justify-center gap-6 md:gap-10">
            {birthdayFriends.map((friend) => (
              <div
                key={friend.id}
                className="group flex flex-col items-center gap-3"
              >
                <div className="relative transform transition-transform duration-300 group-hover:scale-105">
                  <div
                    className="h-24 w-24 rounded-full bg-cover bg-center shadow-xl ring-4 ring-white md:h-32 md:w-32"
                    style={{
                      backgroundImage: `url("${friend.profilePicture}")`,
                    }}
                  ></div>
                  <div className="bg-primary absolute -right-1 -bottom-1 rounded-full border-4 border-white p-2 shadow-sm">
                    <Cake className="text-white" size={18} />
                  </div>
                </div>
                <span className="text-foreground text-lg font-bold">
                  {friend.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
