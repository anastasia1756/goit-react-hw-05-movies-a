import { Outlet, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Suspense } from "react";
import { Loader } from "../Loader";
import ParticlesBg from "particles-bg";
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
const Header = styled.div`
  background-color: #7f26867d;
  margin: -12px;
  padding: ${(props) => props.theme.spacing(3)};
`;
export const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <ParticlesBg
          type="circle"
          bg={{
            position: "absolute",
            zIndex: -1,
            height: 1200,
          }}
        />
      )}

      <Wrapper>
        <nav>
          <Header>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Header>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </nav>
      </Wrapper>
    </>
  );
};
