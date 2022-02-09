import { Outlet, useLocation } from "react-router-dom";
import { Link, Wrapper, Header } from "./Layout.styled";

import { Suspense } from "react";
import { Loader } from "../Loader";
import ParticlesBg from "particles-bg";

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
            height: 2020,
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
