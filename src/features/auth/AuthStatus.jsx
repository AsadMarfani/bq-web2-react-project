import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";

const AuthStatus = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <p className="text-gray-500">You are not logged in.</p>;
  }

  return (
    <div className="flex justify-between items-center mt-5">
      <p className="text-lg">Welcome, {user.username}!</p>
      <button
        onClick={() => dispatch(logout())}
        className="px-3 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default AuthStatus;
