import React from "react";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

function Sedan() {
  const sedanCars = carsData.filter((car) => car.category === "sedan");

  return <CarsList data={sedanCars} />;
}

export default Sedan;
