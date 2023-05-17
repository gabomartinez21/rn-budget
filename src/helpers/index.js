export const formatCount = count => {

  return Number(count).toLocaleString('en-US', {
    style:'currency',
    currency: 'USD'
  })
}

export const generateId = () => {
  const randomId = Math.random.toString(36).substring(2, 11)
  const fecha = Date.now().toString(36)
  return randomId + fecha
}