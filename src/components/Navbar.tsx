import React, { useEffect, useState } from "react";
import axiosClient from "../service/axios";

export default function Navbar(): JSX.Element {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axiosClient.get("track/4aawyAB9vmqN3uQ7FjRGTy");
      console.log(data);
    };
    getData().catch((err) => console.log(err));
  }, []);

  return <div>Navbar</div>;
}
