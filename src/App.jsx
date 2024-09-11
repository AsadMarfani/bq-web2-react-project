import Header from "./components/Header";
import useTimerV1 from "./hooks/useTimerV1";
import useTimerV2 from "./hooks/useTimerV2";

function App() {
  const time = useTimerV1();
  const { formattedTime, start, stop, reset } = useTimerV2(0, true);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-2xl mx-auto p-5">
        <h3>{formattedTime}</h3>
        <button onClick={() => start()}>Start Timer</button>
        <button onClick={() => stop()}>Stop Timer</button>
        <button onClick={() => reset()}>Reset Timer</button>
        <div>
          <h1>{time}</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
