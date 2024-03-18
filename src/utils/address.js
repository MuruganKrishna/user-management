import { getDataFromLocal } from "./user";
export const setAddressToLocal = (userId, address) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        address.id = `${Date.now()}-${Math.ceil(Math.random() * 1000)}`;
        address.userId = userId;
        const prevAddressData = JSON.parse(
          localStorage.getItem("addresses") || "[]"
        );
        prevAddressData.push(address);
        localStorage.setItem("addresses", JSON.stringify(prevAddressData));
        resolve(address);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};
export const getUserAddress = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const addresses = await getDataFromLocal("addresses");
      const address = addresses.filter(
        (address) => address.userId === userId
      )[0];
      resolve(address);
    } catch (e) {
      reject(e);
    }
  });
};
export const createAddress = async (userId, address) => {
  try {
    await setAddressToLocal(userId, address);
    const response = { message: "User Date Created successfully" };
    return response;
  } catch (e) {
    console.log(e);
    return { message: e };
  }
};
