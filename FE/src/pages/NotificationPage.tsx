import React, { useEffect, useState } from "react";
import { OptionTopbar } from "../components/common/TopBar";
import Activity from "../components/notification/Activity";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";

const NotificationPage = () => {
  const navigate = useNavigate();

  const isLogined = useSelector((state: any) => state.user.auth.isLogined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLogined) {
      navigate("/login");
    }
    setLoading(false);
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div>
      <OptionTopbar text={"알림"} />
      <div>
        <Activity></Activity>
      </div>
    </div>
  );
};

export default NotificationPage;
