import React from "react";
import { useState } from "react";
import { MenuItemType } from "../../types/index";
import ListMenu from "./ListMenu";

function ItemMenu({ item }: { item: MenuItemType }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(label: string) {
    setDisplayCurrentChildren((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p onClick={() => handleToggleChildren(item.label)}>{item.label}
        {item && item.children && item.children.length ? (
          <span>
            {displayCurrentChildren[item.label] ? (
             <span>-</span>
            ) : (
              <span>+</span>
            )}
          </span>
        ) : null}
        </p>
      </div>

        <div className="menu-children">
            {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                <ListMenu list={item.children} />
            ) : null}

        </div>
    </li>
  );
}

export default ItemMenu;
