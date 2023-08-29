/* eslint-disable */

import axios from "axios";

let Maindata = [
  { username: "서예진", price: "5,000,000" },
  { news: "경제뉴스를 읽고" },
  { username: "서예진", asset: "20,000,000" },
  { username: "김익환", asset: "10,000,000" },
  { username: "남성희", asset: "5,000,000" },
];

async function fetchDataAndModifyMaindata() {
  try {
    const response = await axios.get("http://localhost:8080/main");

    const newData = response.data
      .filter((item) => item.index === 0)
      .map((item) => ({
        username: item.name,
        asset: new Intl.NumberFormat("ko-KR").format(item.point),
      }));

    Maindata = Maindata.concat(newData);
  } catch (error) {
    console.error("There was an error fetching the data:", error);
  }
}

fetchDataAndModifyMaindata();

export default Maindata;
