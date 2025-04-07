export interface RGBColorType {
    red: number;
    green: number;
    blue: number;
}

export interface MenuItemType {
    label: string;
    to: string;
    children?: MenuItemType[]; // Optional nested menu items
}

