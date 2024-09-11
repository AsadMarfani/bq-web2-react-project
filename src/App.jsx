import ColorPicker from "./features/colorPicker/colorPicker";

const App = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Color Picker App</h1>
      <ColorPicker />
    </div>
  </div>
);

export default App;
