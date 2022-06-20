import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import axios from "axios";
import InfoBox from "./InfoBox";
import LocationLegend from "./LocationLegend";

const Fires = (props) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);
  const [title, setTitle] = useState("Wildfires");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://eonet.gsfc.nasa.gov/api/v2.1/events"
      );
      setEvents(response.data.events);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const closeBox = () => {
    setEventInfo(null);
  };

  const changeFunction = (events) => {
    //console.log(events);
    setTitle(events);
  };

  const IconMarkers = events.map((event) => {
    // console.log(title, event.categories[0]);
    console.log(title);
    if (title.includes(event.categories[0].title, 0)) {
      return (
        <LocationMarker
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          type={event.categories[0].title}
          onClick={() =>
            setEventInfo({
              id: event.id,
              title: event.title,
              lat: event.geometries[0].coordinates[1],
              lng: event.geometries[0].coordinates[0],
            })
          }
        />
      );
    }

    //title.map((el) => (

    // ));
    //   }
  });

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <Map events={events}>
            <LocationLegend changeFunction={changeFunction} />
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_bootstrapURLKeys,
              }}
              defaultCenter={{ lat: 42.3265, lng: -122.8756 }}
              defaultZoom={6}
            >
              {IconMarkers}
              {eventInfo && (
                <InfoBox
                  lat={eventInfo.lat + 1}
                  lng={eventInfo.lng + 1}
                  info={eventInfo}
                  closeBox={closeBox}
                />
              )}
            </GoogleMapReact>
          </Map>
        </>
      )}
    </>
  );
};

Fires.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

const Map = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export default Fires;
