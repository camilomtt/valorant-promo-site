import { pathRelative } from "../../utils/paths";
import { motion } from "framer-motion";
import BotonPro from "../../ui/BotonPro";

export const MenuPlayer = ({ imagePaths }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {},
      }}
      className="contenido_visual hidden lg:flex flex-col items-center justify-center w-auto h-screen md:mr-28 lg:mr-18 xl:ml-auto xl:mr-24 md:pl-10 lg:w-[700px] z-20"
    >
      {/* Imagen principal */}
      <motion.img
        src={imagePaths.banner}
        alt="Desafío Agentes en Ascenso"
        width={320}
        className="w-64 lg:w-[320px] mb-1 pt-8 lg:pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      />

      {/* Logos VISA y BAC – separados */}
      <motion.div
        className="flex items-center p-0 md:-my-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src={imagePaths.visa}
          alt="Visa"
          className="h-10 md:h-20 border-r-2 border-solid border-white"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        />
        <motion.img
          src={imagePaths.bac}
          alt="BAC Credomatic"
          className="h-10 md:h-20"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        />
      </motion.div>

      {/* Botones de División */}
      <motion.div
        className="flex flex-col relative items-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <article className="absolute text-center -top-4 text-white font-myriad/100 max-w-3xl lg:pb-8">
          <p className=" text-xl">Inscríbete y participa según tu división</p>
        </article>
        <div className="flex flex-col md:flex-row justify-center md:items-end mt-14 gap-x-7">
          <a
            href="https://battlefy.com/"
            target="_blank"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <BotonPro>
              DIVISION
              <span className="text-[#f50045] group-hover:text-black transition-colors duration-300 pl-2">
                PRO
              </span>
            </BotonPro>
          </a>
          <a
            href="https://battlefy.com/"
            target="_blank"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <BotonPro>
              DIVISION
              <span className="text-[#f50045] group-hover:text-black transition-colors pl-2 duration-300">
                AMATEUR
              </span>
            </BotonPro>
          </a>
        </div>
      </motion.div>

      {/* Botón de Inscripción */}
      {/*<motion.div
        className="mt-8 md:mt-5 md:-mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <a target="_blank" href="https://battlefy.com/">
          <img
            src={imagePaths.inscription}
            alt="Inscríbete"
            className="w-52 lg:w-72 transform hover:scale-105 transition-transform duration-200"
          />
        </a>
      </motion.div>*/}

      {/* Texto legal */}
      <motion.p
        className="text-xs px-1 text-white opacity-50 text-center justify-center text-balance mt-8 md:mt-12 font-myriad/100 max-w-3xl lg:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua...
      </motion.p>
    </motion.div>
  );
};
