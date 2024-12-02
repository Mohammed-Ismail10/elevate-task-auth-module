"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Header from "../_components/header/page";
import NavSign from "../_components/navSign/page";
import SocialSign from "../_components/socialSign/page";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function ForgotYourPassword() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(values: any) {
    try {
      setLoading(true);
      const response = await fetch(
        "https://exam.elevateegy.com/api/v1/auth/forgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.message === "success") {
        router.push("/verify-code");
      }
      else{
        setError(data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <section className="grid grid-cols-2 h-screen">
        <div>
          <Header />
        </div>

        <div className="w-3/4 mx-auto pt-10 ">
          <div className="h-full flex flex-col">
            <NavSign />

            <div className="flex-grow">
              <div className="flex items-center h-full">
                <div className="w-full">
                  <div>
                    <h2 className="font-bold text-2xl leading-[30px]">
                      Forgot your password?
                    </h2>
                  </div>
                    {error && <p className="text-red-500 mt-5">{error}</p>}
                  <form onSubmit={formik.handleSubmit} className="mt-7 w-4/5">
                    <div>
                      <input
                        className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg border ${
                          formik.touched.email && formik.errors.email
                            ? "outline-red-500"
                            : "focus:outline-[#4461F2]"
                        }`}
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <p className="text-red-500 text-sm">
                          {formik.errors.email}
                        </p>
                      ) : null}
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="w-full bg-[#4461F2] py-4 rounded-2xl text-white shadow-lg"
                      >
                        {loading ? "loading..." : "Send code"}
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <div className="w-1/3 h-[1px] bg-[#E0E0E9]"></div>
                      <div>
                        <p className="text-[#6C737F]">Or Continue with</p>
                      </div>
                      <div className="w-1/3 h-[1px] bg-[#E0E0E9]"></div>
                    </div>
                    <SocialSign />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
