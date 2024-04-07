// components/Footer.js
const Footer = () => {
    return (
      <div className="bg-black text-white p-4 flex justify-between fixed inset-x-0 bottom-0 bg-[#yourColor] ">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded">Pets</button>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded">Claim</button>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded">Boost</button>
      </div>
    );
  };

  export default Footer;
  