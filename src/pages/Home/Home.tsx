import styles from "./Home.module.css";
import { HomeProps } from "./types";
import Text from "../../components/LVL1_Atoms/Text/Text";
import ListComponent from "../../components/LVL3_Cells/ListComponent/ListComponent";
import { useHome } from "./hook";
import Input from "../../components/LVL1_Atoms/Input";
import UserModal from "../../components/LVL3_Cells/UserModal/UserModal";

const Home = ({}: HomeProps) => {
  const {
    allUsers,
    control,
    opneUserModal,
    handleCloseUser,
    userData,
    getUser,
    userLoading,
  } = useHome();


  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Text className="text-4xl">Test Task for Udhaarbook</Text>
        <div className={styles.containerHeader}>
          <div className="text-center w-72 ml-auto">
            <Input
              control={control}
              name="search"
              preDefinedClassName="inputField"
              preDefinedWrapClassName="inputField-wrap"
              // label="Name"
              placeholder="Search here..."
            />
          </div>
        </div>
        <ListComponent users={allUsers} onItemClick={getUser} />
      </div>

      <UserModal
        open={opneUserModal}
        handleClose={handleCloseUser}
        userData={userData}
        loading={userLoading}
      />
    </div>
  );
};

export default Home;
