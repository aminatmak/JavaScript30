const inputs = document.querySelectorAll('.controls input')

const update = (e) => {
  const suffix = e.currentTarget.dataset.sizing || '';
  const name = e.currentTarget.name
  const value = e.currentTarget.value
  console.log(value)
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
}

inputs.forEach(input => input.addEventListener('change', (e) => update(e)))
inputs.forEach(input => input.addEventListener('mousemove', (e) => update(e)));
