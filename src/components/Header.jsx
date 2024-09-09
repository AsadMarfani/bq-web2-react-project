import AuthStatus from "../features/auth/AuthStatus";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white text-center">
      <h1 className="text-3xl font-bold">Fitness Tracker</h1>
      <AuthStatus />
    </header>
  );
};

export default Header;
