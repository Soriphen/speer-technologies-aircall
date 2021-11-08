import "./scss/body.scss";
import "./scss/app.scss";
import "./scss/header.scss";
import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import ActivityFeed from "./components/Activities";
import { ArchiveView } from "./components/Archive";
import ControlBar from "./components/ControlBar";

/* This is for creating a new activities but with the 
updated is_archived that is retrieved from fetch POST.
*/
function makeActivities(activities) {
  let act = activities.map((call) => {
    return {
      id: call.id,
      created_at: call.created_at,
      direction: call.direction,
      from: call.from,
      to: call.to,
      via: call.via,
      duration: call.duration,
      is_archived: call.is_archived,
      call_type: call.call_type
    };
  });
  return act;
}

export default function App() {
  const activitiesRef = useRef(null);
  const [activities, setActivities] = useState(null);
  const [seeArchive, setSeeArchive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  /* Fetch all activities and store them into a useRef and a state. The reason for this is because 
  we need a useRef to store perpetual data, however, this data when updated won't cause a re-render,
  therefore the data must also be stored in state as well so that when the perpetual data in the useRef
  variable is changed it is reflected through an update of setActivities which then renders that change
  */
  const fetchActivities = () => {
    const APIaddress = "https://aircall-job.herokuapp.com/activities";

    fetch(APIaddress)
      .then((res) => res.json())
      .then(
        (data) => {
          activitiesRef.current = data;
          setActivities(data);
        },
        (error) => {
          setError(error);
        }
      );
  };

  useEffect(() => {
    fetchActivities();
    setIsLoaded(true);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id="app">
        <div className="container">
          <Header setSeeArchive={setSeeArchive} seeArchive={seeArchive} />
          <div className="container-view">
            {seeArchive ? (
              <ArchiveView
                activities={activities}
                activitiesRef={activitiesRef.current}
                makeActivities={makeActivities}
                setActivities={setActivities}
              />
            ) : (
              <ActivityFeed
                activities={activities}
                activitiesRef={activitiesRef.current}
                makeActivities={makeActivities}
                setActivities={setActivities}
              />
            )}
          </div>
          <ControlBar />
        </div>
      </div>
    );
  }
}
