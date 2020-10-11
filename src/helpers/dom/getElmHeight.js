export const getElmHeight = (node) => {
  const list = [
      'margin-top',
      'margin-bottom',
      'border-top',
      'border-bottom',
      'padding-top',
      'padding-bottom',
      'height'
  ]

  const style = window.getComputedStyle(node)

  return list
    .map((key) => {
      const number = parseInt(style.getPropertyValue(key) || 0, 10);
      return number
    })
    .reduce((acc, cur) => {
      return acc + cur
    }, 0)
}