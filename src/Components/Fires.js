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

  useEffect(() => {
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
    fetchItems();
  }, []);

  const closeBox = () => {
    setEventInfo(null);
  };

  const changeFunction = (events) => {
    console.log(events);
    setTitle(events[0]);
    console.log("ello");
  };

  const IconMarkers = events.map((event) => {
    if (event.categories[0].title == title) {
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
                key: "AIzaSyA15GEpBi9SrYjg9pmvg3JDWL1RbgzdaHo",
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
