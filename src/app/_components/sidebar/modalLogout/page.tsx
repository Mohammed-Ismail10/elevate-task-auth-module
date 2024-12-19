"use client";

import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";





export function ModalLogout({ openModal, setOpenModal }: any) {
  const router = useRouter();
  async function logout() {
    try {
      const response = await fetch(
        "https://exam.elevateegy.com/api/v1/auth/logout",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("examToken")}`,
          },
        }
      );
      const data = await response.json();
      if (data.message === "success") {
        localStorage.removeItem("examToken");
        router.push("/signin");
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Are you sure you want to log out?</Modal.Header>

        <Modal.Footer className="flex justify-center">
          <Button
            className="bg-[#4461F2]"
            onClick={() => {
              setOpenModal(false);
              logout();
            }}
          >
            Yes
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
