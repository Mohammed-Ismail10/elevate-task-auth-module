"use client";
import SocialSign from "@/app/_components/socialSign/page";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import * as Yup from "yup";

export default function FormSignup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(values: any) {
    try {
      setLoading(true);
      const response = await fetch(
        "https://exam.elevateegy.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      if (data.message === "success") {
        router.push("/signin");
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
    username: Yup.string()
      .required("Required")
      .min(3, "Username must be at least 3 characters"),
    firstName: Yup.string()
      .required("Required")
      .min(3, "firstName must be at least 3 characters")
      .max(16, "firstName must be at most 16 characters"),
    lastName: Yup.string()
      .required("Required")
      .min(3, "lastName must be at least 3 characters")
      .max(16, "firstName must be at most 16 characters"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number"
      )
      .matches(
        /^(?=.*?[#?!@$%^&*-])/,
        "Password must include at least one special character (#?!@$%^&*-)"
      ),
    rePassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    phone: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="mt-7 w-4/5">
        {error && <p className="text-red-500 mt-5">{error}</p>}
        <div className="mb-5">
          <input
            className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg  ${
              formik.touched.username && formik.errors.username
                ? "outline-red-500"
                : "focus:outline-[#4461F2]"
            }`}
            type="text"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="text-red-500 text-sm">{formik.errors.username}</p>
          ) : null}
        </div>
        <div className="mb-5">
          <input
            className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg  ${
              formik.touched.firstName && formik.errors.firstName
                ? "outline-red-500"
                : "focus:outline-[#4461F2]"
            }`}
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
          ) : null}
        </div>
        <div className="mb-5">
          <input
            className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg  ${
              formik.touched.lastName && formik.errors.lastName
                ? "outline-red-500"
                : "focus:outline-[#4461F2]"
            }`}
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
          ) : null}
        </div>
        <div className="mb-5">
          <input
            className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg  ${
              formik.touched.email && formik.errors.email
                ? "outline-red-500"
                : "focus:outline-[#4461F2]"
            }`}
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mb-5">
          <input
            className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg  ${
              formik.touched.phone && formik.errors.phone
                ? "outline-red-500"
                : "focus:outline-[#4461F2]"
            }`}
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-red-500 text-sm">{formik.errors.phone}</p>
          ) : null}
        </div>
        <div className="relative mb-5">
          <input
            className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg ${
              formik.touched.password && formik.errors.password
                ? "outline-red-500"
                : "focus:outline-[#4461F2]"
            }`}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
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
        <div className="relative mb-5">
          <input
            className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg ${
              formik.touched.rePassword && formik.errors.rePassword
                ? "outline-red-500"
                : "focus:outline-[#4461F2]"
            }`}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.rePassword && formik.errors.rePassword ? (
            <p className="text-red-500 text-sm">{formik.errors.rePassword}</p>
          ) : null}
          {showConfirmPassword ? (
            <VscEyeClosed
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              color="#949BA5"
              size={20}
              className="absolute top-5 right-4"
            />
          ) : (
            <VscEye
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              color="#949BA5"
              size={20}
              className="absolute top-5 right-4"
            />
          )}
        </div>
        <div className="text-center mb-5">
          <span>Already have an account? </span>
          <Link className="text-[#4461F2]" href={"/signin"}>
            Login
          </Link>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-[#4461F2] py-4 rounded-2xl text-white shadow-lg"
          >
            {loading ? "loading..." : "Create Account"}
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
    </>
  );
}
