import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-grey-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find your dream Rental property. Bookmark properties and contact
            owners
          </InfoBox>
          <InfoBox
            heading="For Property owners"
            backgroundColor="bg-green-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-green-500",
            }}
          >
            List your property to all prospective renters. Rent as an Airbnb or
            long term
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
