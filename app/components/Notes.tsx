import React from "react";
import Note from "./Note";
import Link from "next/link";

interface blog {
  id: number;
  title: string;
  desc: string;
}
const HomeNotes = () => {
  const blogs = [
    {
      id: 1,
      title: "How to complate an imagination!",
      desc: "Sapiente ab nam fuga repellat perferendis amet facere, ad eveniet ita? nsectetur adipisicing elit. Iure saepealiquam soluta, officiis at cupiditate eveniet",
    },
    {
      id: 2,
      title: "Why? do you want to run NPM Dev!",
      desc: "Sapiente ab nam fuga repellat perferendis amet facere, ad eveniet expedita? nsectetur adipisicing elit. Iure saepealiquam soluta, officiis at cupiditate eveniet",
    },
    {
      id: 3,
      title: "What is the main topic of the laser!",
      desc: "Sapiente ab nam fuga repellat perferendis amet facere, ad eveniet expedita? ita? nsectetur adipisicing elit. Iure saepealiquam soluta, officiis at cupiditate eveniet",
    },
    {
      id: 4,
      title: "How to unlock oppo a52!",
      desc: "Sapiente ab nam fuga repellat perferendis amet facere, ita? nsectetur adipisicing elit. Iure saepealiquam soluta, officiis at cupiditate eveniet",
    },
  ];
  return (
    <>
      <h2 className="text-2xl font-semibold py-6">Recent Blogs</h2>
      <div className="space-y-5">
        {blogs?.map((item: blog) => (
          <Note key={item.id} item={item} />
        ))}
      </div>
      <Link href="/notes" className="border-b border-primary my-6 inline-block">
        View All
      </Link>
    </>
  );
};

export default HomeNotes;
