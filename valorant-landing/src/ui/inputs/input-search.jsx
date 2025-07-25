import { IconSearch } from "../icons";

export const InputSearch = ({
  value,
  onChange,
  placeholder = '',
  className = '',
  onFocus,
  ...props
}) => {
  return (
    <div className={`relative w-full max-w-[475px] ${className}`}>
      <span className="absolute inset-y-0 right-4 flex items-center">
        <IconSearch />
      </span>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={onFocus}
        placeholder={placeholder}
        className={`
          w-full h-[48px] pl-4 pr-10
          bg-white bg-opacity-[16%]
          border-[1px] border-opacity-[8%] border-white
          rounded-xl text-sm
          placeholder:text-white
          placeholder:text-opacity-[60%]
          font-heinekenSans font-light
          focus:outline-none focus:border-white
          text-white transition-all duration-200 ease-in
        `}
        {...props}
      />
    </div>
  );
};

