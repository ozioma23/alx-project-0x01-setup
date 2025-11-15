import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Users</h2>

        <ul className="space-y-3">
          <li className="p-3 border rounded">Faith — Frontend Developer</li>
          <li className="p-3 border rounded">John — Backend Developer</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default UsersPage;
