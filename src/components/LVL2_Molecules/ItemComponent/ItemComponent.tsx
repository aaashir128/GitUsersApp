import React from "react";
import styles from "./ItemComponent.module.css";

interface ItemComponentProps {
  user: any;
  onItemClick: (user: any) => void;
}

const ItemComponent: React.FC<ItemComponentProps> = ({ user, onItemClick }) => {


  return (
    <div className={styles.itemContainer} onClick={() => onItemClick(user)}>
      <img src={user?.avatar_url} alt={user?.login} />
      <p>{user?.login}</p>
      <a href={user?.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default ItemComponent;
