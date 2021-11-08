import {
  ArchiveSwitchStyle,
  ActivitySwitchBtn,
  ArchiveSwitchBtn
} from "./ArchiveStyles";
import { CallBox, ArchiveOrUndo } from "./Activities";
import { ThreeDotVertStyle } from "./ArchiveStyles";

const ArchiveSwitch = ({ setSeeArchive, seeArchive }) => {
  return (
    <>
      <ArchiveSwitchStyle seeArchive={seeArchive}>
        <div id="btn"></div>
        <ActivitySwitchBtn
          seeArchive={seeArchive}
          onClick={() => setSeeArchive(false)}
        >
          Activity
        </ActivitySwitchBtn>
        <ThreeDotVertStyle />
        <ArchiveSwitchBtn
          seeArchive={seeArchive}
          onClick={() => setSeeArchive(true)}
        >
          Archives
        </ArchiveSwitchBtn>
      </ArchiveSwitchStyle>
    </>
  );
};

const ArchiveView = ({
  activities,
  activitiesRef,
  makeActivities,
  setActivities
}) => {
  if (activities) {
    return (
      <>
        <ArchiveOrUndo
          archiveOrUndo={"undo"}
          activities={activities}
          setActivities={setActivities}
          makeActivities={makeActivities}
          activitiesRef={activitiesRef}
        />
        {activities.map((call, callIndex) =>
          call.is_archived ? (
            <CallBox
              key={call.id}
              date={call.created_at}
              from={call.from}
              to={call.to}
              callType={call.call_type}
              isArchived={call.is_archived}
              via={call.via}
              direction={call.direction}
              id={call.id}
              activitiesRef={activitiesRef}
              makeActivities={makeActivities}
              setActivities={setActivities}
              callIndex={callIndex}
            />
          ) : null
        )}
      </>
    );
  } else {
    return null;
  }
};

export { ArchiveSwitch, ArchiveView };
