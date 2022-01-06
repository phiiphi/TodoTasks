import "../css/headerStyle.css";
import TrackerButton from "./TrackerButton";

const TrackerHeader = ({ changeButtonStyle, changeShowTaskState }) => {
  return (
    <div>
      <header className="header">
        <h1>Task Tracker</h1>
        <TrackerButton
          color={changeButtonStyle ? "red" : "green"}
          text={changeButtonStyle ? "Close" : "Add"}
          changeShowTaskState={changeShowTaskState}
        />
      </header>
    </div>
  );
};

export default TrackerHeader;
