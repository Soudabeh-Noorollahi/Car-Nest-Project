import { useRouter } from "next/router";
import carsData from "../../data/carsData";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];
  console.log(carDetails);
  return <div>CarDetail</div>;
}

export default CarDetail;
