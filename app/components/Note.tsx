import Link from "next/link";
import React from "react";

interface item {
  title: string;
  desc: string;
}

const Note: React.FC<{ item: item }> = ({ item }) => {
  const { title, desc } = item;
  return (
    <Link href="/" className="inline-block">
      <h3 className="font-semibold text-">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </Link>
  );
};

export default Note;
