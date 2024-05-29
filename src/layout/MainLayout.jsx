import {
  faArrowLeft,
  faCartShopping,
  faFile,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, NavLink ,useLocation , Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";




const NavItem = ({ icon, text, to,crumb }) => (
  <NavLink 
    to={to}
    className={({ isActive }) =>
  `flex items-center space-x-6 w-64 px-10 py-2 ${isActive ? "bg-gray-50 text-black" : ""}`
}
  >
    <FontAwesomeIcon
      icon={icon}
      className="bg-blue-500 text-white p-1 rounded-full w-3 h-3"
    />
    
    <span>{text}</span>   
  </NavLink>
);


const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    // Main App
    <div className="flex flex-col h-screen ">
      {/* Header */}
      <header className="h-12 bg-blue-500 shadow-lg z-50 text-white py-3 px-10 flex  justify-between ">
        <div className="flex ">
          <button onClick={()=>navigate("/")}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <p className="mx-10 text-nowrap">React Material Admin Full</p>
        </div>
        <div className="flex">
          <img
            className="rounded-full  w-7 h-7 "
            src="https://static.wikia.nocookie.net/a86f75a1-4894-4636-8cf3-00e9b3bd3fbb/smart/width/386/height/259"
          ></img>
          <p className="mx-3 text-nowrap" >Hi , admin </p>
        </div>
      </header>

      <div className="flex flex-grow ">
        {/* Sidebar */}
        <nav className="  text-gray-400 bg-white shadow-xl z-10  flex border-r-2">
          <div className="  w-full px-0 py-10  border-b-2">
          {/* <ul className="space-y-3 p-4  w-74 px-0">
  <NavItem icon={faUser} text="Profile" to="profile" />
  <NavItem icon={faHome} text="Dashboard" to="dashboard" />
  <NavItem icon={faCartShopping} text="Ecommerce" to="ecommerce" />
  <NavItem icon={faUser} text="User" to="user" />
  <NavItem icon={faFile} text="Documentation" to="documentation" />
</ul> */}
<ul className="flex flex-col justify-between space-y-3 p-4 w-74 px-0  ">
  <NavItem icon={faUser} text="Profile" to="profile" />
  <NavItem icon={faHome} text="Dashboard" to="dashboard" />
  <NavItem icon={faCartShopping} text="Ecommerce" to="ecommerce" />
  <NavItem icon={faUser} text="User" to="user" />
  <NavItem icon={faFile} text="Documentation" to="documentation" />
</ul>
          </div>
        </nav>
        <main className="flex-grow bg-purple-50 p-4">
          {/* BreadCrumbBar */}
          <div className=" h-10 z-10 shadow-lg bg-white w-full m-1 flex items-center px-2">

          <nav aria-label="breadcrumb ">
  <ol className="breadcrumb flex">
    <li className="breadcrumb-item ">
      <Link  className="text-gray-500"to="/"> </Link>
    </li>
    {pathnames.map((value, index) => {
  const isLastPage = index === pathnames.length - 1;
  const to = `/${pathnames.slice(0, index + 1).join("/")}`;

  return (
    <Fragment key={to}>
      <li className={`breadcrumb-item ${isLastPage ? "active" : ""}`} aria-current={isLastPage ? "page" : undefined}>
        <Link to={to} className={isLastPage ? "text-blue-500 ml-2" : "ml-2"}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Link>
        {!isLastPage && <span>  &gt;</span>}
      </li>
    </Fragment>
  );
})}
  </ol>
</nav>
          </div>

          {/* Profile Viewer  */}
         <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
