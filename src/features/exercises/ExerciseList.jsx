import { useSelector } from 'react-redux';

const ExerciseList = () => {
  const exercises = useSelector((state) => state.exercises.exercises);

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold">Tracked Exercises</h2>
      {exercises.length === 0 ? (
        <p className="text-gray-500">No exercises tracked yet.</p>
      ) : (
        <ul className="list-disc list-inside">
          {exercises.map((exercise, index) => (
            <li key={index}>
              <span className="font-semibold">{exercise.name}</span>: {exercise.reps} reps, {exercise.sets} sets
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExerciseList;
