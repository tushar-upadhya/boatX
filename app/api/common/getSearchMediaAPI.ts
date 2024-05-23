"use server";

import apiClient from "@/app/apiClient";
import { API_ROUTES } from "@/lib/enum";

const getSearchMediaAPI = async (search: string) => {
  let errors = null;
  let response = null;

  try {
    (response = await apiClient.get(
      `${API_ROUTES.SEARCH_MEDIA}?query=${search.split(" ").join("+")}`
    )),
      (response = response.data);
    return { response, errors };
  } catch (error) {
    return { response, errors: error };
  }
};

export default getSearchMediaAPI;