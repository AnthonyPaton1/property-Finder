import React from "react";
import NewPropertyCard from "@/components/NewPropertyCard";
import { fetchProperties } from "@/utils/requests";

const ProperitesPage = async () => {
  const properties = await fetchProperties();

  //Sort by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Propertiesfound</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <NewPropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProperitesPage;
