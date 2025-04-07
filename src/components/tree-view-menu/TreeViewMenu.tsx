import React from 'react';
import ListMenu from './ListMenu';
import {MenuItemType} from '../../types/index'; 
import './index.scss';


// Define the props for the TreeViewMenu component
interface TreeViewMenuProps {
    menus: MenuItemType[]; // Array of menu items
}
  
const TreeViewMenu: React.FC<TreeViewMenuProps> = ({ menus }) => {
    return (
        <div className="tree-view-container">
            <ListMenu list={menus} />
        </div>
    );
};

export default TreeViewMenu;