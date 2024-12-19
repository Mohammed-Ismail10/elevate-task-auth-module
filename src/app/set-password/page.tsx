"use client";
import React, { useState } from "react";
import Header from "../_components/header/page";
import NavSign from "../_components/navSign/page";
import SocialSign from "../_components/socialSign/page";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export default function SetPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  async function handleSubmit(values: { resetCode: string }) {
    try {
      setLoading(true);
      const response = await fetch(
        "https://exam.elevateegy.com/api/v1/auth/resetPassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      if (data.message === "success") {
        localStorage.setItem("examToken", data.token);
        router.push("/");
      } else {
        setError(data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email address"),
    newPassword: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number"
      )
      .matches(
        /^(?=.*?[#?!@$%^&*-])/,
        "Password must include at least one special character (#?!@$%^&*-)"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
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
                      Set a Password
                    </h2>
                  </div>
                  {error && <p className="text-red-500 mt-5">{error}</p>}
                  <form onSubmit={formik.handleSubmit} className="mt-7 w-4/5">
                    <div className="mb-5">
                      <input
                        className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg  ${
                          formik.touched.email && formik.errors.email
                            ? "outline-red-500"
                            : "focus:outline-[#4461F2]"
                        }`}
                        type="email"
                        placeholder="Enter your email"
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

                    <div className="relative mb-5">
                      <input
                        className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg  ${
                          formik.touched.newPassword &&
                          formik.errors.newPassword
                            ? "outline-red-500"
                            : "focus:outline-[#4461F2]"
                        }`}
                        type={showPassword ? "text" : "password"}
                        placeholder="New Password"
                        name="newPassword"
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.newPassword &&
                      formik.errors.newPassword ? (
                        <p className="text-red-500 text-sm">
                          {formik.errors.newPassword}
                        </p>
                      ) : null}
                      {showPassword ? (
                        <VscEyeClosed
                          onClick={() => setShowPassword(!showPassword)}
                          color="#949BA5"
                          size={20}
                          className="absolute top-5 right-4"
                        />
                      ) : (
                        <VscEye
                          onClick={() => setShowPassword(!showPassword)}
                          color="#949BA5"
                          size={20}
                          className="absolute top-5 right-4"
                        />
                      )}
                    </div>

                    <div className="mt-5">
                      <button
                        type="submit"
                        className="w-full bg-[#4461F2] py-4 rounded-2xl text-white shadow-lg"
                      >
                        {loading ? "Loading..." : "Sign in"}
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
