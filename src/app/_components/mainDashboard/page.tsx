import React from "react";
import Search from "./search/page";
import ProfileHeader from "./profileHeader/page";
import Quizes from "./Quizes/page";

export default function MainDashboard() {
  return (
    <>
      <section className="w-4/5 mx-auto py-5">
        <Search />
        <ProfileHeader />
        <Quizes />
      </section>
    </>
  );
}
