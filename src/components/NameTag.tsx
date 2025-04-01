import React from "react";
import "./nameTag.scss"

type NameTagProps = {
    name: string;
    greeting?: string;
  };
  
const NameTag = ({ name, greeting = 'Hello' }: NameTagProps) => {
    return (
      <main className="name-tag">
        <header>
          <h1>{greeting}</h1>
          <p>My Name Is</p>
        </header>
        <section className="display-name">
          <p>{name}</p>
        </section>
        <footer />
      </main>
    );
};
  
//   const Application = () => <NameTag name="Steve" greeting="Salutations" />;
  
export default NameTag;

// const NameTag = ({ user, salutation }: NameTagProps) => {
//   return (
//     <main>
//       <header>
//         <h1>{salutation}</h1>
//         <p>My Name Is</p>
//       </header>
//       <section className="display-name">
//         <p>{user.displayName}</p>
//       </section>
//       <footer />
//     </main>
//   );
// };