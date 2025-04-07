import React from "react";
import ItemMenu from "./ItemMenu";
import {MenuItemType} from '../../types/index'; 

interface ListMenuProps {
    list: MenuItemType[]; // Array of menu items
}

const ListMenu: React.FC<ListMenuProps> = ({ list = [] }) => {
    return (
      <ul className="menu-list-container">
        {list && list.length > 0
          ? list.map((listItem) => (
              <ItemMenu item={listItem} /> // Use `to` as the key
            ))
          : null}
      </ul>
    );
};

export default ListMenu;