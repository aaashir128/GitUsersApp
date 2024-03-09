import apiRequest from "../../../config/axios";

export const getUsersApi = async (user: string | null) => {
  // console.log("userLoginApi", data);
  let url = "/users";

  if (user) {
    url += `/${user}`;
  }
  const response = await apiRequest({
    method: "Get",
    url: url,
  });
  return response;
};
