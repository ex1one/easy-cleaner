import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import { Popup } from "../components/Popup";
import { Layout } from "../features/Layout";
import { Icon } from "../ui";

import s from "./index.module.css";
import { useRippleAnimation } from "../hooks/useRippleAnimation";

const Home: NextPage = () => {
  const buttonRef = useRef<null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useRippleAnimation({
    ref: buttonRef,
    styles: {
      isActive: `${s.effectContainerActive}`,
      style: `${s.effectContainer}`,
    },
    config: { color: "#fff", size: 100, duration: 200 },
  });

  const doToggleModal = () => setIsOpenModal((prev) => !prev);

  useEffect(() => {
    if (isOpenModal) {
      timer.current = setTimeout(() => {
        setIsOpenModal(false);
      }, 1000 * 600);
    }

    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [isOpenModal]);

  return (
    <Layout>
      <div className="flex h-screen flex-col items-center justify-center">
        <button
          ref={buttonRef}
          data-ripple="#fff"
          onClick={doToggleModal}
          className="ripple-bg-gray-300 relative h-40 w-40 overflow-hidden rounded-full border border-black/40 bg-[#0089ff] text-3xl font-bold uppercase text-white shadow-2xl outline-none hover:bg-[#0089ff]/90"
        >
          Clean
        </button>
      </div>

      <Popup
        overlayProps={{ className: "bg-black/40" }}
        hideCloseIcon
        isOpen={isOpenModal}
        onClose={doToggleModal}
        className="max-h-[400px] max-w-md rounded-lg bg-white"
      >
        <div className="relative flex items-center justify-center rounded-t-lg bg-[#0089ff] py-2 text-white">
          <Icon
            onClick={doToggleModal}
            name="arrow-left"
            className="absolute left-2 top-1/2 h-8 w-8 -translate-y-1/2 cursor-pointer p-1 hover:rounded-full hover:bg-white/10"
          />
          <h1 className="text-center text-2xl ">Cleaning</h1>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute h-16 w-16 animate-spin rounded-full border-[6px] border-solid border-[#0089ff] border-t-slate-200 duration-500" />
        </div>
      </Popup>
    </Layout>
  );
};

export default Home;
