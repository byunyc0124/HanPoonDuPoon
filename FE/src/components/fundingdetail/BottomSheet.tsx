import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import style from "../../styles/css/BottomSheet.module.css";
import { getMemberInfo } from "../../api/members";
import { userActions } from "../../store/user-slice";

function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface BottomSheetProps {
  // 값이 변경될수 있으므로 아래와 같은 형식을 사용,
  // void는 반환하는 값이 없고 형식을 지키기 위해 사용
  setIsBottomSheetOpen: (value: boolean) => void;
  handleDonationAmount: (value: number) => void;
  title: string;
  rewardPrice: number;
}

const BottomSheet = ({
  setIsBottomSheetOpen,
  handleDonationAmount,
  title,
  rewardPrice,
}: BottomSheetProps) => {
  const [donationAmount, setDonationAmount] = useState("");
  const [isActive, setIsActive] = useState(false);
  const userPoint = formatNumber(
    useSelector((state: any) => state.user.info.point)
  );
  const reward_price = formatNumber(rewardPrice);
  // bottomsheet를 닫을 수 있게 함
  const handleClose = () => {
    setIsActive(false);
    // 서서히 꺼지게 하는 모션을 위한 딜레이
    // 없으면 바로 사라짐
    setTimeout(() => {
      setIsBottomSheetOpen(false);
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(e.target.value);
    handleDonationAmount(Number(e.target.value));
  };
  const dispatch = useDispatch();
  // 처음부터 true일 경우 모션을 넣을 수 없음
  // useEffect로 값을 변경
  const accessToken = useSelector((state: any) => state.user.auth.accessToken);
  useEffect(() => {
    setIsActive(true);
    //모달열면 그냥 요청 보내기
    getMemberInfo(
      accessToken,
      (res) => {
        dispatch(userActions.saveMemberInfo(res.data.data));
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    // {스타일을 동적으로 할당, isActive=true일 경우 올라오는 애니메이션 사용}
    <div
      className={`${style.bottomsheetcontainer} ${
        isActive ? style.active : ""
      }`}
      style={{ zIndex: 5 }}
    >
      <div className={style.closeicon}>
        <Icon icon="bi:x-circle" onClick={handleClose} />
      </div>
      <div className={style.bottomsheetcontent}>
        <div className={style.question}>
          <span style={{ fontWeight: "600", fontSize: "1.2rem" }}>
            "{title}"
          </span>{" "}
          펀딩에 참여하시겠습니까?
        </div>
        <div className={style.cost}>
          <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>후원 금액</div>
          <input
            className={style.input}
            type="text"
            onChange={handleInputChange}
          />
          <div className={style.usepoint}>사용 가능 포인트 : {userPoint} P</div>
          <div className={style.reward_alert}>
            {reward_price}P 이상 후원시 리워드가 지급됩니다
          </div>
        </div>
      </div>
      <div style={{ height: "6rem" }}></div>
    </div>
  );
};

export default BottomSheet;
