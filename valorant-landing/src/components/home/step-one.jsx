import { Background } from "../../ui/Background.jsx";
import { MainContainer } from "../../ui/MainContainer";
import { MenuPlayer } from "./menu.jsx";
import { Player } from "./player.jsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MenuPlayerMobile } from "./menuMobile.jsx";
import { pathRelative } from "../../utils/paths.js";

export const StepOne = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Coincide con el tiempo del loader (2s)
    const timeout = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const imagePaths = {
    banner: pathRelative("/img/Agentes-en-ascenso.png"),
    visa: pathRelative("/img/logo-visa.png"),
    bac: pathRelative("/img/logo-bac.png"),
    divisionPro: pathRelative("/img/Texto-division-pro.png"),
    divisionAmateur: pathRelative("/img/Texto-division-amateur.png"),
    inscription: pathRelative("/img/Texto-inscribete.png"),
  };

  return (
    <Background bg={"bg-map"} overflowAuto={showMenu}>
      <div className="bg-blackModal">
        <MainContainer>
          {isReady && <Player setShowMenu={setShowMenu} />}

          {isReady && <MenuPlayer imagePaths={imagePaths} />}
          {isReady && <MenuPlayerMobile />}
        </MainContainer>
      </div>
    </Background>
  );
};
