package com.dool.socialservice.api.request;

import com.dool.socialservice.db.domain.ReportType;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Data
public class CreateReportRequest {
    private String userId;
    private Long diaryId;
    private ReportType reportType;
}
