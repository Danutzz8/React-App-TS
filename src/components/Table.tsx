import React from "react";
import { CharacterType } from '../utils/characters';

type TableProps = { children: React.ReactNode };
type TableRowProps = {
  heading: Capitalize<keyof CharacterType>;
  value: CharacterType[keyof CharacterType];
};

export const Table = ({ children }: TableProps) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

export const TableRow = ({ heading, value }: TableRowProps) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};
