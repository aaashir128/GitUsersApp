import React from "react";
import styles from "./ListComponent.module.css";
import ItemComponent from "../../LVL2_Molecules/ItemComponent/ItemComponent";

interface ListComponentProps {
  users: any[];
  onItemClick: (user: any) => void;
}

const ListComponent: React.FC<ListComponentProps> = ({
  users,
  onItemClick,
}) => {
  return (
    <div className={styles.listContainer}>
      {users?.length > 0 ? (
        users?.map((user) => (
          <ItemComponent key={user?.id} user={user} onItemClick={onItemClick} />
        ))
      ) : (
        <ItemComponent user={users} onItemClick={onItemClick} />
      )}
    </div>
  );
};

export default ListComponent;
