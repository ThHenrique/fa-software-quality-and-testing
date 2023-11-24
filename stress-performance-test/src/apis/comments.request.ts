import { check } from "k6";
import http from "k6/http";
import { logWaitingTime } from "../utils/logger";
import { EndpointsEnum } from "../shared/enums/endpoints.enum";
import { Trend } from "k6/metrics";

const metrics = {
  getCommentsResponseTime: new Trend("get_comments_response_time", true),
};

export function comments(accessToken: string) {
  const params = {

    headers: {
      Authorization: `Bearer ${accessToken}`
    },
  }

  const res = http.get(`${EndpointsEnum.COMMENT_GET_ALL}?page=1&comment=compras`, params);

  logWaitingTime({
    metric: metrics.getCommentsResponseTime,
    response: res,
    messageType: `Get Comments`,
  });

  check(res, {
    "Get data from motor de busca: is 200": (r) => r.status === 200
  });

  return
};