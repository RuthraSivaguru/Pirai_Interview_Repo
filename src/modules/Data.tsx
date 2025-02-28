import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      let data = response.data;
      setData(data);
    } catch (error) {
      console.log(error);

      throw error;
    }
  };
  return (
    <div className="columns-4 ">
      {data.map((item: any) => (
        <div
          key={item.id}
          className="border border-black-50 mb-10 rounded-lg p-1 bg-purple-500"
        >
          <img
            src="bird.jpg"
            alt="Smiley face"
            width="42"
            height="42"
            className="border-5px border-black-500"
          />
          <div
            className="font-bold text"
            style={{
              width: "100%",
              padding: 20,
              marginBottom: 10,
              flexDirection: "row",
            }}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
