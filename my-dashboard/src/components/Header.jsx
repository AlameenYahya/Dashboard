const Header = () => {
    return (
      <header className="flex justify-between p-4 shadow-md bg-white">
        <h2 className="text-lg font-semibold">Good to have you, Abdullahi!</h2>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search" className="border p-2 rounded-md" />
          <img src="profile.jpg" className="w-10 h-10 rounded-full" alt="User" />
        </div>
      </header>
    );
  };
  export default Header;
  