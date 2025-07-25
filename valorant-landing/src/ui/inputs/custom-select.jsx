import { useState, useRef, useEffect } from 'react';
import { ArrowDown } from '../icons';

export const CustomSelect = ({
  options = [],
  value,
  onChange,
  placeholder = 'Selecciona una opción',
  className = '',
  onFocus
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;

  // Cierra el menú si haces click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative w-full max-w-[230px] ${className}`} ref={ref}>
      <button
        type="button"
        onFocus={onFocus}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-[48px] flex items-center justify-between bg-white bg-opacity-[16%] border-[1px] border-opacity-[8%] border-white rounded-xl px-4 text-sm text-white font-heinekenSans font-light text-left focus:outline-none"
      >
        {selectedLabel}
        {isOpen ?
          <ArrowDown className="rotate-180" />
          :
          <ArrowDown />
        }
      </button>

      {isOpen && (
        <ul className="absolute max-h-[180px] z-10 mt-2 w-full bg-blackSelect backdrop-blur border border-white border-opacity-[8%] rounded-xl overflow-auto shadow-lg">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange?.(opt.value);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm text-white font-heinekenSans hover:bg-white hover:bg-opacity-20 cursor-pointer ${
                opt.value === value ? 'bg-white bg-opacity-10' : ''
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
