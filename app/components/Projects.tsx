import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold py-6">Recent Projects</h2>
      <Link href="/notes" className="border-b border-primary my-6 inline-block">
        View All
      </Link>
    </div>
  );
};

export default Projects;
