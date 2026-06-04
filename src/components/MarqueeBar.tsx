"use client";
import { motion } from "framer-motion";

const categories = [
  "NETWORKING", "LINUX", "DOCKER", "PROXMOX", "FIREWALL", 
  "CISCO", "ACL", "PYTHON", "KALI LINUX", "BASH", "SWITCH", 
  "ROUTER", "VIRTUALIZATION", "SECURITY", "PENTESTING"
];

export default function MarqueeBar() {
  return (
    // 'fixed bottom-0' lo tiene in fondo alla pagina
    // 'z-50' lo tiene sopra tutto il resto
    <div className="fixed bottom-0 left-0 w-full bg-black py-3 overflow-hidden border-t border-black z-50">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...categories, ...categories].map((cat, index) => (
          <div key={index} className="flex items-center px-8 text-emerald-500 font-mono tracking-widest">
            <span className="mr-4">▶</span> {cat}
          </div>
        ))}
      </motion.div>
    </div>
  );
}