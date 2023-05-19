import Link from "next/link";
const Navbar = () => {
    return ( 
      <nav>
        <a>Home</a>
        <a>Blogs</a>
        <a href="https://www.hermanmiller.com/en_in/about/" target="_blank" className="link">About</a>
        <Link href="http://127.0.0.1:5501/help.html">Help</Link>
        <div>
          <form className="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search"></input>
            <button  className="sbtn">Go</button>
          </form>
        </div>
        <div >
          <button type="button" className="btn">Create Blog</button>
        </div>
        <div className="dropdown">
          <button className="dbtn">User</button>
          <div className="dropdown-options">
            <a >Profile</a>
            <a >Setting</a>
            <a >Logout</a>
          </div>
        </div>
      </nav>
    );
}
 
export default Navbar;

