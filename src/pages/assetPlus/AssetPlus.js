/* eslint-disable */
import styled from "styled-components";
import coin3 from "../../image/AssetPlus/coin3.png";
import { Link } from "react-router-dom";

let MenuBtn = styled(Link)`
  background: ${(props) => props.bg};
  color: black;
  width: ${(props) => props.width || "168px"};
  height: ${(props) => props.height || "164px"};
  border: solid white 0px;
  border-radius: 15px;
  box-shadow: ${(props) => props.boxShadow};
  position: relative;
  text-align: left;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-decoration: none;
  &:hover {
    background: ${(props) => props.hoverBg || props.bg};
    color: white;
  }
`;

function AssetPlus() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        padding: "10px",
        marginTop: "160px",
      }}
    >
      <div style={{ marginBottom: "45px" }}>
        어떤 방법으로 <br></br>
        자산을 늘릴까요?
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <MenuBtn
          to="/stock"
          bg="rgba(255, 224, 112, 0.5)"
          hoverBg="rgba(255, 224, 112)"
          style={{ textAlign: "right", padding: "32px 50px 0 20px" }}
        >
          <div>
            <div
              style={{
                fontWeight: 400,
                marginBottom: "13px",
              }}
            >
              큰 수익과 <br></br>
              위험이 공존하는
            </div>
            <div style={{ fontSize: "22px", fontWeight: 600, font: "inter" }}>
              주식
            </div>
          </div>
        </MenuBtn>
        <img
          src={coin3}
          style={{
            position: "absolute",
            zIndex: 5,
            marginTop: "50px",
          }}
        />
        <MenuBtn
          to="/savings"
          bg="rgba(112, 195, 255, 0.5);"
          hoverBg="rgba(112, 195, 255)"
          style={{ padding: "32px 7px 0 42px" }}
        >
          <div>
            <div
              style={{
                fontWeight: 400,
                marginBottom: "13px",
              }}
            >
              원금과 이자를 <br></br>
              보장하고 안정적인
            </div>
            <div style={{ fontSize: "22px", fontWeight: 600, font: "inter" }}>
              예금
            </div>
          </div>
        </MenuBtn>
      </div>
    </div>
  );
}

export default AssetPlus;
