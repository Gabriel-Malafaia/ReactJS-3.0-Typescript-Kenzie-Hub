import { motion } from "framer-motion";
import { iChildren } from "../../interface";


export const TransitionPage = ({ children }: iChildren) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    </>
  );
};
