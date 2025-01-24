import React from "react";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");

  return <CarsList data={hatchbackCars} />;
}

export default Hatchback;
