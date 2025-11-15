import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        <PostCard />
        <PostCard />
      </div>
      <Footer />
    </>
  );
};

export default PostsPage;
