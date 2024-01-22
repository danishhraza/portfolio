// DraggableTextBox.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface DraggableTextBoxProps {
  text: string;
}

const DraggableTextBox: React.FC<DraggableTextBoxProps> = ({ text }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      whileHover={{ scale: 1.1 }}
      className="flex text-white bg-blue-800 mx-auto p-1 rounded-lg"
    >
      {text}
    </motion.div>
  );
};

export default DraggableTextBox;
