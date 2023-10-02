import style from "../../styles/css/SiteInfo.module.css";
import InfoItem from "./InfoItem";
import { useState, useEffect } from "react";
import * as Interfaces from "../../interface/apiDataInterface";
import { getMain } from "../../api/main";

const SiteInfo = () => {
  const [mainData, setMainData] = useState<Interfaces.MainInfo>(
    {} as Interfaces.MainInfo
  );
  useEffect(() => {
    getMain(
      (res) => {
        setMainData(res.data.data);
        console.log("메인 조회 API 연결");
      },
      (err) => {
        console.error("메인 조회 API 호출 실패:", err);
      }
    );
  }, []);
  console.log(mainData);

  return (
    <div className={style.totalwarapper}>
      <div
        style={{
          fontSize: "1.12rem",
          marginBottom: "2rem",
        }}
      >
        <div className={style.span}>후원자 여러분 덕분에</div>
        세상은 조금씩 달콤해지고 있습니다.
      </div>
      <div className={style.wrapper}>
        <div className={style.animateLeft}>
          <InfoItem
            imgSrc="/dollar-symbol.png"
            text="후원 금액"
            num={mainData.price}
            unit="원"
          />
        </div>
        <div className={style.animateLeft}>
          <InfoItem
            imgSrc="/heart.png"
            text="후원 횟수"
            num={mainData.support}
            unit="회"
          />
        </div>
        <div className={style.animateRight}>
          <InfoItem
            imgSrc="/save_money.png"
            text="모금 개수"
            num={mainData.funding}
            unit="개"
          />
        </div>
        <div className={style.animateRight}>
          <InfoItem
            imgSrc="/enterprise.png"
            text="참여 기업"
            num={mainData.company}
            unit="개"
          />
        </div>
      </div>
    </div>
  );
};

export default SiteInfo;
