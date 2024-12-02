"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Header from "../_components/header/page";
import NavSign from "../_components/navSign/page";
import Link from "next/link";
import SocialSign from "../_components/socialSign/page";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function VerifyCode() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  async function handleSubmit(values: { resetCode: string }) {
    console.log(values);
    try {
      setLoading(true);
      const response = await fetch(
        "https://exam.elevateegy.com/api/v1/auth/verifyResetCode",
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
      if (data.status === "Success") {
        router.push("/set-password");
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
    resetCode: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      resetCode: "",
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
                      Verify code
                    </h2>
                  </div>
                  {error && <p className="text-red-500 mt-5">{error}</p>}
                  <form onSubmit={formik.handleSubmit} className="mt-7 w-4/5">
                    <div>
                      <input
                        className={`w-full p-4 rounded-[10px] bg-[#F9F9F9] shadow-lg border ${
                          formik.touched.resetCode && formik.errors.resetCode
                            ? "outline-red-500"
                            : "focus:outline-[#4461F2]"
                        }`}
                        type="text"
                        placeholder="Enter Code"
                        name="resetCode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.resetCode}
                      />
                      {formik.touched.resetCode && formik.errors.resetCode ? (
                        <p className="text-red-500 text-sm">
                          {formik.errors.resetCode}
                        </p>
                      ) : null}
                    </div>
                    <div className="text-end my-5">
                      <span>Did't receive a code? </span>
                      <Link className="text-[#4461F2]" href={""}>
                        Resend
                      </Link>
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="w-full bg-[#4461F2] py-4 rounded-2xl text-white shadow-lg"
                      >
                        {loading ? "Loading..." : "Verify"}
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
