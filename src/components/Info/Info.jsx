import { Outlet, useLocation } from "react-router-dom";
import { AddInfo, Link, List, Button, Wrapper } from "./Info.styled";
import { GiClick } from "react-icons/gi";
import PropTypes from "prop-types";

export const Info = ({ id, cast, reviews }) => {
  const { state } = useLocation();
  return (
    <Wrapper>
      <AddInfo>Additional information</AddInfo>
      <List>
        <Link
          to={`/movies/${id}/cast`}
          state={{ from: { state, label: "Go back" } }}
        >
          <Button>
            Cast <GiClick />
          </Button>
        </Link>
        <Link
          to={`/movies/${id}/reviews`}
          state={{ from: { state, label: "Go back" } }}
        >
          <Button>
            Reviews <GiClick />
          </Button>
        </Link>
        <Outlet context={[{ cast, reviews }]} />
      </List>
    </Wrapper>
  );
};

Info.propTypes = {
  id: PropTypes.number,
};
