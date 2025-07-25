import { pathRelative } from "../../utils/paths";
import { motion } from "framer-motion";

export const MenuPlayerMobile = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {},
      }}
      className="flex lg:hidden flex-col items-center justify-center w-auto h-screen md:mr-28 lg:mr-18 xl:ml-auto xl:mr-24 md:pl-10 lg:w-[700px] z-20"
    >
      {/* Imagen principal */}
      <motion.img
        src={pathRelative("/img/Agentes-en-ascenso.png")}
        alt="Desafío Agentes en Ascenso"
        className="w-64 lg:w-[320px] mb-1 pt-8 lg:pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      />

      {/* Logos VISA y BAC – separados */}
      <motion.div
        className="flex items-center p-0 md:-my-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src={pathRelative("/img/logo-visa.png")}
          alt="Visa"
          className="h-10 md:h-20 border-r-2 border-solid border-white"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        />
        <motion.img
          src={pathRelative("/img/logo-bac.png")}
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
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        <article className="absolute text-center -top-3 text-white font-myriad/100 max-w-3xl lg:pb-8">
          <p className="">Inscríbete y participa según tu división</p>
        </article>
        <div className="flex flex-col md:flex-row items-center md:items-end -mt-3 p-0">
          <button
            type="button"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <img
              src={pathRelative("/img/Texto-division-pro.png")}
              alt="División Pro"
              className="w-52 md:w-80 pt-10 md:pt-0"
            />
          </button>
          <button
            type="button"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <img
              src={pathRelative("/img/Texto-division-amateur.png")}
              alt="División Amateur"
              className="w-52 md:w-80 -mt-10 md:mt-0"
            />
          </button>
        </div>
      </motion.div>

      {/* Botón de Inscripción */}
      {/* <motion.div
        className="-mt-5 md:-mt-10 md:-mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <a target="_blank" href="https://battlefy.com/">
          <img
            src={pathRelative("/img/Texto-inscribete.png")}
            alt="Inscríbete"
            className="w-52 lg:w-72 transform hover:scale-105 transition-transform duration-200"
          />
        </a>
      </motion.div> */}

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
