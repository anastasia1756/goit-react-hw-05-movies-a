import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  color: #331333;
  &.active {
    color: #aa27aa;
  }
`;
const Wrapper = styled.div`
  padding: 12px;
`;
// const Nav = styled.nav`
//   display: flex;
//   gap: 20px;
//   margin-bottom: 20px;
// `;
export const Layout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Outlet />
      </nav>
    </Wrapper>
  );
};
