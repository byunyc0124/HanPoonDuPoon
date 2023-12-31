import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Interfaces from "../../interface/apiDataInterface";
import { getMessage } from "../../api/messages";
import MessagePart from "./MessagePart";
import style from "../../styles/css/ReceivedMessage.module.css";
import NullModal from "../common/NullModal";
const ReceivedMessage = () => {
  const accessToken = useSelector((state: any) => state.user.auth.accessToken);
  const [messageData, setMessageData] = useState<
    Interfaces.MessagesInterface[]
  >([]);

  useEffect(() => {
    getMessage(
      accessToken,
      0,
      (res) => {
        setMessageData(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className={style.message}>
      <div className={style.down_content}>
        {messageData.length > 0 ? (
          messageData.map((message, index) => (
            <div key={message.messageId}>
              <MessagePart key={message.messageId} message={message} flag={0} />
            </div>
          ))
        ) : (
          <NullModal text="받은 쪽지가 없습니다." />
        )}
      </div>
    </div>
  );
};

export default ReceivedMessage;
