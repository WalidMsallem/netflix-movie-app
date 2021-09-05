export const renderLongString = (str: string, maxLettres: number) => {
  const max = maxLettres || 10
  return str.length > max ? `${str.substring(0, maxLettres)}...` : str
}
