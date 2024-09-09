import { useSelector } from "react-redux";
import AddExercise from "./features/exercises/AddExercise";
import ExerciseList from "./features/exercises/ExerciseList";
import Header from "./components/Header";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-2xl mx-auto p-5">
        {!isAuthenticated ? (
          <>
            <Login />
            <Register />
          </>
        ) : (
          <>
            <AddExercise />
            <ExerciseList />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
