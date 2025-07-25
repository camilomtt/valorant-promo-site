export const ModalContainer = ({children}) => {
  return (
    <section className='w-full max-w-[607px] bg-blackModal p-8 text-white border-[2px] border-purple-100 rounded-2xl relative'>
      <div className="flex items-center h-full">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-[70%] bg-purple-100 rounded-t-lg"></div>
      </div>
      {children}
      <div className="flex items-center h-full">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-[70%] bg-purple-100 rounded-t-lg"></div>
      </div>
    </section>
  )
}
