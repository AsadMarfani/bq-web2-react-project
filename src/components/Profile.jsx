import ProfleImg from "../assets/profile.png";

const Profile = () => {
  return (
    <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <img src={ProfleImg} alt="Profile" className="w-36 h-36 rounded-full mx-auto" />
      <h1 className="text-2xl font-bold mt-4">John Doe</h1>
      <p className="text-gray-600 mt-2">Full Stack Developer</p>
    </div>
  );
};

export default Profile;
