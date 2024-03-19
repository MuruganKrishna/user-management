import { getDataFromLocal } from "./user";

export const authenticate = (login) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const users = await getDataFromLocal("users");
        const user = users.filter((user) => user.email === login.email)[0];
        if (!user) return resolve({ message: "No user Found", status: 401 });
        if (user.password !== login.password)
          return resolve({
            message: "Password Mismatch",
            status: 401,
          });
        return resolve({
          message: "Login successfull",
          status: 200,
          data: user,
        });
      } catch (e) {
        reject({ message: e, staus: 500 });
      }
    }, 500);
  });
};
