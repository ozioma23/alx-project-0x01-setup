import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (user: UserData) => {
    setNewUser({ ...user, id: posts.length + 1 });
    // You could also add it to a list of users if you want dynamic display
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-white">Users</h1>
          <p className="mt-2 text-xl text-white">
            Manage users of your application below
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {posts.map((user: UserProps, index: number) => (
            <UserCard key={index} {...user} />
          ))}
          {newUser && <UserCard {...newUser} />}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
