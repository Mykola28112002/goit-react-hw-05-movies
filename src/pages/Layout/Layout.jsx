import { Link ,Header} from "./Layout.styled";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {

  return (
    <>
    <Header>
        <nav>
            <Link to="/" end>Home</Link>
            <Link to="/movies">Movies</Link>
        </nav>
    </Header>
    <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
    </Suspense></>
    
  );
};

export default Layout;