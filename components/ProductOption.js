function ProductOptions({ name, values, selectedOptions, setOptions }) {
  return (<fieldset>

    <legend class="text-xl font-semibold">{name}</legend>
    <div class="inline-flex items-center flex-wrap">
      {
        values.map(value => {
          const id = `options=${name}-${value}`
          const isChecked = selectedOptions[name] === value

          return (
            <label key={id} htmlFor={id}>
              <input className="sr-only" type={"radio"} id={id} name={`option-${name}`} value={value} checked={isChecked} onChange={() => setOptions(name, value)} />

              <div className={`p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 ${isChecked ? "text-white bg-gray-900" : "text-gray-900 bg-gray-200"}`}>
                <span className="px-2">{value}</span>
              </div>

            </label>
          )
        })
      }
    </div>
  </fieldset>)
}

export default ProductOptions
