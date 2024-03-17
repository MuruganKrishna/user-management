export const setUserToLocal = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        data.user.id = `${Date.now()}-${Math.ceil(Math.random() * 1000)}`;
        data.address.id = `${Date.now()}-${Math.ceil(Math.random() * 1000)}`;
        data.address.userId = data.user.id;
        const prevUserData = JSON.parse(localStorage.getItem("users") || "[]");
        const prevAddressData = JSON.parse(
          localStorage.getItem("users") || "[]"
        );
        if (prevUserData.length === 0) {
          data.user.role = "admin";
        }
        prevUserData.push(data.user);
        prevAddressData.push(data.address);

        // throw new Error("hoo error");
        localStorage.setItem("users", JSON.stringify(prevUserData));
        localStorage.setItem("addresses", JSON.stringify(prevAddressData));
        resolve("updated successfully");
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
        const users = JSON.parse(localStorage.getItem(param));
        resolve(users);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
};
export const createUser = async (data) => {
  try {
    const resp = await setUserToLocal(data);
    // const response = new Response({ message: resp }, { status: 200 });
    const response = { message: resp };
    return response;
  } catch (e) {
    console.log(e);
    const response = { message: e };
    // const response = new Response({ message: e }, { status: 500 });
    return response;
  }
};
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
