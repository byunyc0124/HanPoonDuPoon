import { useEffect, useState } from "react";
import ProfileActivity from "./ProfileActivity";
import ProfilePhoto from "./ProfilePhoto";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
const ProfileWrapper = () => {
  const isLogined = useSelector((state: any) => state.user.auth.isLogined);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogined) {
      console.log("로그인 Y");
    } else {
      console.log("로그인 N");
      navigate("/login");
    }
    setLoading(false);
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <ProfilePhoto />
      <ProfileActivity />
    </div>
  );
};

export default ProfileWrapper;
