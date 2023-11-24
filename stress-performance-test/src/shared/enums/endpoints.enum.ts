const baseURL = "your API baseURL";

export enum EndpointsEnum {
  AUTH_SIGNIN = `${baseURL}/auth/signin`,

  USER_SEARCH = `${baseURL}/users/search`,
  USER_CREATE = `${baseURL}/users`,
  USER_GET_ME = `${baseURL}/users/me`,
  USER_UPDATE = `${baseURL}/users`,
  USER_DELETE = `${baseURL}/users`,

  COMMENT_GET_ALL = `${baseURL}/comments`,

  REVIEW_ANALYSIS = `${baseURL}/dashboard`,
}

