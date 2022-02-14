import { Outlet, useLocation } from "react-router-dom";
import { AddInfo, Link, List } from "./Info.styled";
import { GiClick } from "react-icons/gi";
import PropTypes from "prop-types";

export const Info = ({ id, cast, reviews }) => {
  const { state } = useLocation();
  return (
    <>
      <AddInfo>Additional information</AddInfo>
      <List>
        <Link
          to={`/movies/${id}/cast`}
          state={{ from: { state, label: "Go back" } }}
        >
          Cast <GiClick />{" "}
        </Link>
        <Link
          to={`/movies/${id}/reviews`}
          state={{ from: { state, label: "Go back" } }}
        >
          Reviews <GiClick />
        </Link>
        <Outlet context={[{ cast, reviews }]} />
      </List>
    </>
  );
};

Info.propTypes = {
  id: PropTypes.number,
};
