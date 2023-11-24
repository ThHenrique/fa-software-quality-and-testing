import { SharedArray } from "k6/data";
import { Options } from "k6/options";

import { getUser, updateUser, signIn, dashboard, comments } from "../apis"
import { users } from "../data/users";
import { group } from "k6";

const data = new SharedArray("users", function () {
  return users;
});

export const options: Options = {
  thresholds: { http_req_duration: ['p(90)<1000'] },
  scenarios: {
    smoke_test: {
      executor: "per-vu-iterations",
      vus: 5,
      iterations: 2,
      startTime: "0s",
    },
    load_test: {
      executor: "shared-iterations",
      vus: 20,
      iterations: 40,
      startTime: "0s",
    },
    // O teste abaixo travou meu setup na apresentacao
    // stress_test: {
    //   executor: "per-vu-iterations",
    //   vus: 1000,
    //   iterations: 100,
    //   startTime: "0s",
    // },
  },
};

export default function test() {
  function getRandomIntInclusive(max: number) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
  }

  // Obtém usuário da lista mocada aleatóriamente
  const user = data[getRandomIntInclusive(data.length - 1)];

  const accessToken = signIn(user)

  group('01. CRUD USER OPERATIONS', () => {
    getUser(user, accessToken)
    updateUser(user, accessToken)
  })

  group('02. DASHBOARD OPERATIONS', () => {
    dashboard(accessToken)
  })

  group('03. MOTOR DE BUSCA', () => {
    comments(accessToken)
  })
}
