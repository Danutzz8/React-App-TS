import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router'
import NameTag from '../components/NameTag'

export const Route = createLazyFileRoute('/nametag')({
  component: ShowNameTag,
})

function ShowNameTag() {
  return (
    <div className="flex flex-row gap-4 p-6 bg-gray-100 rounded-lg">
      <NameTag name="Steve" greeting="Salutations" />
      <NameTag name="John" greeting="Ola" />
      <NameTag name="Mark" greeting="Hey" />
    </div>
  );
}

// type UserModel = {
//   accountId: string;
//   displayName: string;
//   isVerified: boolean;
// };

// type NameTagProps = {
//   salutation: string;
//   user: UserModel;
// };

// const currentUser = {
//   displayName: "J Mascis",
//   accountId: "123",
//   isVerified: true
// };

// type WithUserProps = {
//   user: UserModel;
// };

// function withCurrentUser<T extends WithUserProps>(
//   WrappedComponent: ComponentType<T>
// ) {
//   const ComponentWithUser = (props: Omit<T, keyof WithUserProps>) => {
//     return <WrappedComponent {...(props as T)} user={currentUser} />;
//   };

//   return ComponentWithUser;
// }

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

// const NameTagWithCurrentUser = withCurrentUser(NameTag);

// const Application = () => <NameTagWithCurrentUser salutation="Howdy" />;