import  { pathRelative }  from "../utils/paths"

export const Footer = () => {
  return (
  <footer className="w-full pb-10 px-4 flex flex-col items-center gap-4 justify-center  text-center text-white text-xs font-heinekenSans text-opacity-70">
    {/* <figure>
      <img src={pathRelative('/img/logo-footer.svg')} alt="logo terms" />
    </figure> */}
    <p className="w-full max-w-[328px] md:max-w-[656px]">
      Footer
    </p>
    {/* <a href={pathRelative('/docs/CCCGRAPOL001_Politica_Proteccion_de_DatosV2.pdf')} target="_blank" className="underline">Política de protección de datos personales</a> */}
  </footer>
  )
}
