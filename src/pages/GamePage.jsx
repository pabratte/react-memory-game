import PropTypes from "prop-types";
import Board from "../components/Board";

export default function GamePage({ showWinPage }) {
  return <Board showWinPage={showWinPage}></Board>;
}

GamePage.propTypes = {
  showWinPage: PropTypes.func.isRequired,
};
