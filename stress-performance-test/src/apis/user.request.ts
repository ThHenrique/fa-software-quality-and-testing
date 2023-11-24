import { check } from "k6";
import http, { StructuredRequestBody } from "k6/http";
import { Trend } from "k6/metrics";
import { logWaitingTime } from "../utils/logger";
import { EndpointsEnum } from "../shared/enums/endpoints.enum";
import { IUser } from "../shared/interfaces/user.interface";

const metrics = {
  getUserResponseTime: new Trend("get_user_response_time", true),
  updateUserResponseTime: new Trend("update_user_response_time", true),
  deleteUserResponseTime: new Trend("delete_user_response_time", true),
};

type Response<T> = {
  data: T;
  statusCode: number;
};

export function getUser(user: IUser, accessToken: string): Response<IUser> {
  const params = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
  }

  const res = http.get(EndpointsEnum.USER_GET_ME, params);
  const jsonRes = res.json() as IUser;
  logWaitingTime({
    metric: metrics.getUserResponseTime,
    response: res,
    messageType: `Get User`,
  });

  check(res, {
    "Get User By Id: is 200": (r) => r.status === 200,
    "Get User By Id: has correct id": (_) => jsonRes.id === user.id,
    "Get User By Id: has correct email": (_) => jsonRes.email === user.email,
  });

  return {
    data: jsonRes,
    statusCode: res.status,
  };
};

export function updateUser(user: IUser, accessToken: string): Response<{}> {
  const params = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
  }

  const payload: StructuredRequestBody = {
    name: user.name + " Test Stress",
  };


  const res = http.put(EndpointsEnum.USER_UPDATE, payload, params);

  logWaitingTime({
    metric: metrics.updateUserResponseTime,
    response: res,
    messageType: `Update User`,
  });

  check(res, {
    "Update User by token: is 204": (r) => r.status === 204,
  });

  return {
    data: {},
    statusCode: res.status,
  };
};

export function deleteUser(userId: number): Response<{}> {
  const res = http.del(`${EndpointsEnum.USER_DELETE}/${userId}`);
  logWaitingTime({
    metric: metrics.deleteUserResponseTime,
    response: res,
    messageType: `Delete User`,
  });

  check(res, {
    "Delete User By Id: is 204": (r) => r.status === 204,
  });

  return {
    data: {},
    statusCode: res.status,
  };
};
