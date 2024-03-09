import styles from "./UserModal.module.css";
import Text from "../../LVL1_Atoms/Text/Text";
import { Button } from "../../LVL1_Atoms/Button";
import CustomModal from "../../LVL2_Molecules/CustomModal/CustomModal";
import { UserModalProps } from ".";
import Loader from "../../LVL1_Atoms/Loader";

const UserModal = ({
  open,
  handleClose,
  userData,
  loading,
}: UserModalProps) => {
  return (
    <div className={styles["UserModal"]}>
      <CustomModal open={open} onClose={handleClose}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-col items-center mt-4">
              <img
                src={userData?.avatar_url}
                alt="User Avatar"
                className="rounded-full w-44 h-44 mb-2"
              />
              <Text className="text-xl font-bold">Name: {userData?.name}</Text>
              <div className="flex mt-2">
                <Text className="mr-2">Followers: {userData?.followers}</Text>
                <Text>Following: {userData?.following}</Text>
              </div>
              <Text className="mt-2">Location: {userData?.location}</Text>
            </div>
            <div className="flex justify-center mt-4">
              <Button
                type="button"
                className="secondaryBtn"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </CustomModal>
    </div>
  );
};

export default UserModal;
