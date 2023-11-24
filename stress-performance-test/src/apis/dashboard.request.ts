import { check } from "k6";
import http from "k6/http";
import { logWaitingTime } from "../utils/logger";
import { EndpointsEnum } from "../shared/enums/endpoints.enum";
import { Trend } from "k6/metrics";

const metrics = {
  getDashboardResponseTime: new Trend("get_dashboard_response_time", true),
};

export function dashboard(accessToken: string) {
  const params = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
  }

  const res = http.get(EndpointsEnum.REVIEW_ANALYSIS, params);

  logWaitingTime({
    metric: metrics.getDashboardResponseTime,
    response: res,
    messageType: `Get Dashboard`,
  });

  check(res, {
    "Get data from dashboard: is 200": (r) => r.status === 200
  });

  return
};