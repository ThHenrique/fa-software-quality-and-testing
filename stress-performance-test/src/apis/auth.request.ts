import { check } from "k6";
import http, { StructuredRequestBody } from "k6/http";
import { Trend } from "k6/metrics";
import { logWaitingTime } from "../utils/logger";
import { EndpointsEnum } from "../shared/enums/endpoints.enum";
import { IUser } from "../shared/interfaces/user.interface";


type SigninResponse = {
  accessToken: string;
}

const metrics = {
  signInResponseTime: new Trend("signin_response_time", true),
};


export function signIn(user: IUser): string {
  const params = {
    headers: {},
  };

  const payload: StructuredRequestBody = {
    email: user.email,
    password: user.password
  };

  const res = http.post(EndpointsEnum.AUTH_SIGNIN, payload, params);

  const { accessToken } = res.json() as SigninResponse

  logWaitingTime({
    metric: metrics.signInResponseTime,
    response: res,
    messageType: `Post signIn`,
  });

  check(res, {
    "Signin: is 201": (r) => r.status === 201,
    'logged in successfully': () => accessToken !== '',
  });

  return accessToken
};