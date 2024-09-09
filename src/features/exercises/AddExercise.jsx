import { useDispatch } from 'react-redux';
import { addExercise } from './exercisesSlice';
import { useState } from 'react';

const AddExercise = () => {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && reps && sets) {
      dispatch(addExercise({ name, reps: parseInt(reps), sets: parseInt(sets) }));
      setName('');
      setReps('');
      setSets('');
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold">Add New Exercise</h2>
      <form onSubmit={handleSubmit} className="mt-3 space-y-3">
        <div>
          <label className="block text-sm">Exercise Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g., Push-ups"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Reps</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g., 10"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Sets</label>
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g., 3"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Add Exercise
        </button>
      </form>
    </div>
  );
};

export default AddExercise;
