import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loading/LoadingContext";
import { fetchUserListApi } from "../services/userManagement";

export const useUserList = () => {
  const [userList, setUserList] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    setLoadingState({ isLoading: true });

    const result = await fetchUserListApi();

    setUserList(result.data.content);
    setLoadingState({ isLoading: false });
  };

  return userList;
};
