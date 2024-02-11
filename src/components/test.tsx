import { useContext, useEffect } from 'react';
import { Context as UserContext } from '@/resources/users';

export const Test = () => {
  const {
    state: { list: users },
    getAll,
  } = useContext(UserContext);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      {users.map((user) => {
        return <div key={user.id}>{user.firstName}</div>;
      })}
    </>
  );
};
