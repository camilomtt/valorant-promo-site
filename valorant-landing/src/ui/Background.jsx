export function Background({ children, bg, overflowAuto }) {
  return (
    <main
      className={`fixed top-0 bottom-0 left-0 right-0 bg-[#E8E8E8] ${bg} bg-no-repeat bg-cover bg-center ${overflowAuto ? 'overflow-auto' : null}`}
    >
      {children}
    </main>
  );
}

export function BackgroundAge({ children, bg, overflowAuto }) {
  return (
    <main
      className={`fixed top-0 bottom-0 left-0 right-0 ${bg} bg-no-repeat bg-cover bg-center ${overflowAuto ? 'overflow-auto' : null}`}
    >
      {children}
    </main>
  );
}