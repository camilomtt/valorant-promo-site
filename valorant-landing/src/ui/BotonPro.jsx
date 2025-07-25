export default function BotonPro({ children }) {
  return (
    <div className="group relative py-1 px-5 border-2 border-[#f50045] text-[#e8faff] font-gridnik text-3xl uppercase bg-black cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#f50045] hover:text-white hover:border-[#b70e3a] hover:shadow-[inset_0_0_0_3px_#6a0c23]">
      {/* Esquinas y flechas */}
      <div
        className="absolute top-[-1px] left-[-1px] w-[25px] h-[25px] bg-[#f50045] transition-all duration-300 ease-in-out /* Transición añadida */
          group-hover:w-[30px] group-hover:h-[30px] group-hover:bg-[#b70e3a] /* Efectos de hover añadidos */"
        style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
      ></div>
      <div
        className="absolute bottom-[-1px] right-[-1px] w-[25px] h-[25px] bg-[#f50045]
          group-hover:w-[30px] group-hover:h-[30px] group-hover:bg-[#b70e3a]"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
      ></div>
      <div
        className="absolute top-[-2px] left-[-2px] w-6 h-6 bg-black"
        style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
      ></div>
      <div
        className="absolute bottom-[-2px] right-[-2px] w-6 h-6 bg-black"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
      ></div>
      <div
        className="absolute top-[-2px] left-[-2px] w-3.5 h-3.5 bg-[#f50045]"
        style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
      ></div>
      <div
        className="absolute bottom-[-2px] right-[-2px] w-3.5 h-3.5 bg-[#f50045]"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
      ></div>
      {children}
    </div>
  );
}
