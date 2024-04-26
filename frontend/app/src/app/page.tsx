import api from './_api';

export default async function Home() {
  const fullName = await api.user.getFullName();
  
  return (
    <p>My name is {fullName}</p>
  );
}
