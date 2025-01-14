"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "./_components/sidebar/page";
import MainDashboard from "./_components/mainDashboard/page";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("examToken")) {
      router.push("/");
    } else {
      router.push("/signin");
    }
  }, [router]);
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 ">
          <div className="md:col-span-1">
            <Sidebar/>
          </div>
          <div className="md:col-span-4">
            <MainDashboard/>
          </div>
        </div>
      </section>
    </>
  );
}
