import ReactDom, { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return createPortal(
    <>
      <div className="bg-secondary-1 fixed top-0 right-0 bottom-0 left-0 z-1000 bg-black/50" />
      <div className="fixed top-1/2 left-1/2 z-1000 h-[90%] w-[90%] -translate-1/2 overflow-y-scroll rounded-lg bg-white pt-10">
        <button
          className="absolute top-0 right-0 cursor-pointer p-5"
          onClick={onClose}
        >
          <IoMdClose size={40} />
        </button>
        {children}
      </div>
    </>,
    document.body,
  );
}
