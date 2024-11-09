import React, { useEffect, useState } from "react";
import HappyClientCard from "./HappyClientCard";
import axios from "axios";
const HappyClientSection = () => {
  const [data, setData] = useState();
  let Clients = [1, 2, 3, 4];
  const fetchingdata = async () => {
    try {
      const data1 = await axios.get(
        "http://localhost:8080/api/v1/Client/all-clients"
      );
      setData(data1.data.Clients);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingdata();
  }, []);
  return (
    <div className="mt-12">
      <h1 className="font-bold text-3xl text-center mb-8 text-blue-600">
        Happy Clients
      </h1>
      <div className=" flex justify-center">
        {data?.map((e) => {
          return (
            <HappyClientCard
              id={e._id}
              name={e.name}
              Designation={e.Designation}
              description={e.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HappyClientSection;