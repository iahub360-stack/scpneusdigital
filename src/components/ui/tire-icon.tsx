interface TireIconProps {
  selected?: boolean
  onClick?: () => void
  number: number
  className?: string
}

export function TireIcon({ selected = false, onClick, number, className = "" }: TireIconProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all
        ${selected 
          ? "border-[#3483FA] bg-[#3483FA]/10 shadow-md" 
          : "border-gray-300 hover:border-gray-400 bg-white"
        }
        ${className}
      `}
    >
      {/* Pneu externo */}
      <div className={`
        absolute inset-1 rounded-full border
        ${selected ? "border-[#3483FA]/40" : "border-gray-400"}
      `} />
      
      {/* Aro */}
      <div className={`
        w-5 h-5 rounded-full border flex items-center justify-center
        ${selected ? "border-[#3483FA] bg-[#3483FA]/20" : "border-gray-500 bg-gray-100"}
      `}>
        <div className={`
          w-2 h-2 rounded-full
          ${selected ? "bg-[#3483FA]" : "bg-gray-600"}
        `} />
      </div>
      
      {/* Pneus internos (desenho do tread) */}
      <div className="absolute inset-2">
        <div className={`
          w-full h-full rounded-full opacity-30
          ${selected ? "bg-[#3483FA]" : "bg-gray-600"}
        `} />
      </div>
      
      {/* Número */}
      <span className={`
        absolute -bottom-5 text-xs font-medium
        ${selected ? "text-[#3483FA]" : "text-gray-600"}
      `}>
        {number}
      </span>
    </button>
  )
}