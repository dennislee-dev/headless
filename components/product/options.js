import React from 'react'

export default function ProductOptions({ name, values, selectedOptions, setOptions }) {
  return (
    <fieldset className="mt-3">
      <legend className="font-semibold">{name}</legend>
      <div className="inline-flex items-center flex-wrap gap-2">
        {
          values.map(value => {
            const id = `option-${name}-${value}`
            const checked = selectedOptions[name] === value

            return (
              <label key={id} htmlFor={id}>
                <input 
                  className="sr-only"
                  type="radio"
                  id={id}
                  name={`option-${name}`}
                  value={value}
                  checked={checked}
                  onChange={() => {
                    setOptions(name, value)
                  }}
                />
                <div className={`text-sm border-2 border-neutral-300 rounded font-semibold py-1 px-3  cursor-pointer  ${checked ? "text-white bg-general border-2 border-general" : "text-gray-900 bg-[#f6f6f6f6] border-[#f6f6f6f6] "}`}>
                  <span className="px-2">{value}</span>
                </div>
              </label>
            )
          })
        }
      </div>
    </fieldset>
  )
}
