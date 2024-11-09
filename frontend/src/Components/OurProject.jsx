import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const OurProject = () => {
  let projects = [1, 2, 3, 4];
  const [data, setData] = useState();

  const fetchingdata = async () => {
    try {
      const data1 = await axios.get(
        "http://localhost:8080/api/v1/project/all-Project"
      );
      console.log(data1.data.Project);
      setData(data1.data.Project);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingdata();
  }, []);
  return (
    <div id="Projects" className="mt-12 bg-blue-50">
      <h1 className="font-bold text-3xl text-center text-blue-600">
        Our Projects
      </h1>
      <p className=" text-center text-gray-600 mt-4">
        we know what buyers are looking for and suggest projects that will bring
        <br /> clients top dollar for the sale of their homes
      </p>
      <div className=" flex justify-center">
        {data?.map((e) => {
          return <Card id={e._id} name={e.name} description={e.description} />;
        })}
      </div>
    </div>
  );
};

export default OurProject;
