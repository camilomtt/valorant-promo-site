import {pathRelative}  from "../utils/paths"

export const Header = () => {
  return (
    <header className="w-full h-[114px] border-b border-white border-opacity-20">
      <section className="h-full px-4 lg:px-20 flex items-center justify-between">
        {/* <figure>
          <img src={pathRelative('img/logo-header.svg')} alt="logo heineken" />
        </figure> */}

        <div className="hidden md:block">
          <h2 className="text-white text-xl font-bold">¡header!</h2>
        </div>

        {/* <figure>
          <img src={pathRelative('img/logo-champions.svg')} alt="logo champions" />
        </figure> */}
      </section>
    </header>
  )
}
