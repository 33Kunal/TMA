// components/Layout.js
const Layout = ({ children }) => {
    return (
      <div className="flex flex-col h-screen justify-between">
        {children}
      </div>
    );
  };
  
  export default Layout;
  