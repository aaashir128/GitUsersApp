import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getUsersApi } from "../../../utils/api/users";
import axios from "axios";

export const useHome = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const [userData, setUserData] = useState<any>(null);
  const [searchParams, setSearchParams] = useState<string | null>(null);
  const [opneUserModal, setOpneUserModal] = useState<boolean>(false);
  const [userLoading, setUserLoading] = useState<boolean>(false);
  const handleOpenUser = () => {
    setOpneUserModal(true);
  };
  const handleCloseUser = () => {
    setOpneUserModal(false);
  };
  const getUser = (user: any) => {
    console.log("getUser", user);
    handleOpenUser();
    fetchFollowers(user?.url);
  };
  const fetchFollowers = async (url: string) => {
    setUserLoading(true);
    try {
      const response = await axios.get(url);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching followers:", error);
    }
    setUserLoading(false);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setSearchParams(watch("search"));
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [watch("search")]);

  useEffect(() => {
    console.log("searchParams", searchParams);
  }, [searchParams]);

  const {
    data: { data: allUsers = [] } = {},
    isLoading: allUsersLoading,
    // error: errorAllUsers,
    // refetch: refetchAllUsers,
  } = useQuery(
    [
      "allUsers",
      {
        searchParams,
      },
    ],

    async () => {
      return getUsersApi(searchParams);
    }
  );

  // console.log("allUsers", allUsers);

  return {
    control,
    errors,
    handleSubmit,
    opneUserModal,
    handleOpenUser,
    handleCloseUser,
    userLoading,

    allUsers,
    userData,
    getUser,
    allUsersLoading,
  };
};
