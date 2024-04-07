// components/Header.js

const Header = () => {
    return (
      <div className="bg-black text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <p>Hi, Monk</p>
            <p>Welcome back!</p>
          </div>
          <div>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded">Withdraw</button>
          </div>
        </div>
        <div className="mt-4">
          <p>Total xMappa Balance</p>
          <p>667 ≈ $66.7</p>
        </div>
      </div>
    );
  };
  
  export default Header;
  