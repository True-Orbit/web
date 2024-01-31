import { useContext, useEffect } from 'react';
import { UserContext } from '@/resources/user';

export const Test = () => {
  const { state: { users }, getAll } = useContext(UserContext);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      { Object.keys(users).map((key) => { return <div key={key}>{users[key].firstName}</div>; }) }
    </>
  );
};