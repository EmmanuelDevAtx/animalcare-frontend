import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export const ModalCustom = ({
  children,
  isOpen,
  hideModal,
}: {
  children: JSX.Element | ReactNode;
  isOpen: boolean;
  hideModal: () => void;
}) => {
  const [opacity, setOpacity] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => setOpacity(1), 1);
  }, []);
  if (!isOpen) return null;

  function hideModalCustom(){
    setOpacity(0);
    setTimeout(() => hideModal(), 400);
  }
  return (
    <div
      className="modalOverlay"
      style={{ opacity: opacity }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: opacity }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="modalContent">{children}</div>
      </motion.div>
    </div>
  );
};
