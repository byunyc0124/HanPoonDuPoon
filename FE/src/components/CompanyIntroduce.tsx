import React, { useEffect, useState } from "react";
import * as Interfaces from "../interface/apiDataInterface";
import DetailHashTag from "./fundingdetail/DetailHashTag";
import NewsCardList from "./NewsCardList";
import { newsCrolling } from "../api/news";
import style from "./../styles/scss/CompanyIntroduce.module.scss";

//
import Grid from "@mui/material/Grid";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkIcon from "@mui/icons-material/Link";
import BusinessIcon from "@mui/icons-material/Business";

interface CompanyIntroduceProps {
  item: Interfaces.InSearchCompanyInfoResponseInterface;
}

const CompanyIntroduce = (props: CompanyIntroduceProps) => {
  const { item } = props;

  const hashtagList = item.hashtag?.split(", ") || [];

  const [responseData, setResponseData] = useState<any>([]);

  useEffect(() => {
    const companyId = item.companyId;
    newsCrolling(
      companyId,
      (res) => {
        console.log("크롤링성공");
        setResponseData(res.data.data);
      },
      (err) => {
        console.log("크롤링실패");
      }
    );
  }, []);

  return (
    <div className={style.wrapper}>
      <h1 className={style.container}>벤처 소개</h1>
      <div className={style.field}>
        <div>{item.introduce}</div>
        <DetailHashTag hashtagList={hashtagList} />
      </div>

      <h1 className={style.container}>벤처 정보</h1>
      <Grid container className={style.field}>
        <Grid item xs={1.5} className={style.upper}>
          <WorkOutlineIcon></WorkOutlineIcon>
        </Grid>
        <Grid item xs={10.5} className={style.gap}>
          {item.registrationNumber}
        </Grid>
        <Grid item xs={1.5} className={style.upper}>
          <WhatsAppIcon></WhatsAppIcon>
        </Grid>
        <Grid item xs={10.5} className={style.gap}>
          {item.phoneNumber}
        </Grid>
        <Grid item xs={1.5} className={style.upper}>
          <MailOutlineIcon></MailOutlineIcon>
        </Grid>
        <Grid item xs={10.5} className={style.gap}>
          {item.email}
        </Grid>

        <Grid item xs={1.5} className={style.upper}>
          <LinkIcon></LinkIcon>
        </Grid>
        <Grid item xs={10.5} className={style.gap}>
          {item.websiteUrl}
        </Grid>
        <Grid item xs={1.5} className={style.upper}>
          <BusinessIcon></BusinessIcon>
        </Grid>
        <Grid item xs={10.5} className={style.gap}>
          {item.address}
        </Grid>
      </Grid>

      <h1 className={style.container}>관련기사</h1>
      <div>
        <NewsCardList items={responseData}></NewsCardList>
      </div>
    </div>
  );
};

export default CompanyIntroduce;
