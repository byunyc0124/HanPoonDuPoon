package com.stn.hpdp.controller.message.response;

import com.stn.hpdp.model.entity.Message;
import lombok.*;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class FindDetailMessageRes {

    private Long messageId;
    private String title;
    private String content;
    private String opponentName;
    private String createdDate;
    private boolean to;
    private Long opponentId;
    private Long myId;

    public FindDetailMessageRes of(Message message){
        return FindDetailMessageRes.builder()
                .messageId(message.getId())
                .title(message.getTitle())
                .content(message.getContent())
                .to(message.isToWho())
                .createdDate(message.getCreatedDate().toString())
                .build();
    }
}
