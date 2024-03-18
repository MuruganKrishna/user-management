import { setAddressToLocal } from "./address";

export const setUserToLocal = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        user.id = `${Date.now()}-${Math.ceil(Math.random() * 1000)}`;
        const prevUserData = JSON.parse(localStorage.getItem("users") || "[]");
        if (prevUserData.length === 0) {
          user.role = "admin";
        }
        prevUserData.push(user);
        localStorage.setItem("users", JSON.stringify(prevUserData));
        resolve(user);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};
export const getDataFromLocal = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const users = JSON.parse(localStorage.getItem(param)) || [];
        resolve(users);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};
export const createUser = async (user) => {
  try {
    return {
      message: "User Date Created successfully",
      data: await setUserToLocal(user),
    };
  } catch (e) {
    console.log(e);
    return { message: e };
  }
};
export const updateData = async (updatedDatum, dataType) => {
  return new Promise(async (resolve, reject) => {
    try {
      const localData = await getDataFromLocal(dataType);
      const oldDatum = localData.filter(
        (datum) => datum.id === updatedDatum.id
      )[0];
      const filteredData = localData.filter(
        (datum) => datum.id !== updatedDatum.id
      );
      if (dataType === "addresses" && filteredData.length === 0) {
        filteredData.push(
          await setAddressToLocal(updatedDatum.userId, updatedDatum)
        );
      } else {
        filteredData.push({ ...oldDatum, ...updatedDatum });
        localStorage.setItem(dataType, JSON.stringify(filteredData));
      }

      resolve(filteredData);
    } catch (e) {
      reject(e);
    }
  });
};
export const deleteUser = async (id) => {};
export const getUser = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await getDataFromLocal("users");
      const user = users.filter((user) => user.id === id)[0];
      resolve(user);
    } catch (e) {
      reject(e);
    }
  });
};
export const getCurrentUser = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const userToken = localStorage.getItem("userToken");
      const users = await getDataFromLocal("users");
      const user = users.filter((user) => user.id === userToken)[0];
      if (user) {
        resolve(user);
      } else {
        throw new Error({ message: "No user Found" });
      }
    } catch (e) {
      reject(e);
    }
  });
};
