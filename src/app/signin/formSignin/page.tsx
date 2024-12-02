import SocialSign from "@/app/_components/socialSign/page";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import * as Yup from "yup";

export default function FormSignin() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  function handleSubmit(values: any) {
    setLoading(true);
    signIn("credentials", {
      ...values,
      redirect: true,
      callbackUrl: "/",
    });
    setLoading(false);
  }

  const validationSchema = Yup.object({
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
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="mt-7 w-4/5">
        <div className="mb-5">
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
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="relative mb-5">
          <input
            className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg border ${
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
        <div className="text-end">
          <Link className="text-[#4461F2]" href={"/forgot-your-password"}>
            Recover Password ?
          </Link>
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
    </>
  );
}
