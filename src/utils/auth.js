import { getDataFromLocal } from "./user";

export const authenticate = (login) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const users = await getDataFromLocal("users");
        const user = users.filter((user) => user.email === login.email)[0];
        if (user) {
          if (user.password === login.password)
            resolve({
              message: "login successful",
              data: user.id,
              status: 200,
            });
          else resolve({ message: "invalid password", data: {}, status: 422 });
        } else {
          resolve({ message: "no user found", data: {}, status: 422 });
        }
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};
