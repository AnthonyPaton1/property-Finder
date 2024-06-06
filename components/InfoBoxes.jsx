import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="Visitors enter here"
            backgroundColor="bg-grey-100"
            buttonInfo={{
              text: "Browse Venues",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find a local inclusive environment to meet friends and family, and
            most importantly just be yourself
          </InfoBox>
          <InfoBox
            heading="For Venue managers"
            backgroundColor="bg-green-100"
            buttonInfo={{
              text: "Add Venue",
              link: "/properties/add",
              backgroundColor: "bg-green-500",
            }}
          >
            List and advertise your venue here. Edit your profile, update your
            images and advertise upcoming events
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
