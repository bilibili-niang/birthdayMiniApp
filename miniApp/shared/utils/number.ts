/** 根据下标返回 A ~ ZZ 的字符串 */
export const getIndexLabel = (index: number) => {
  let label = ''
  while (index >= 0) {
    label = String.fromCharCode((index % 26) + 65) + label
    index = Math.floor(index / 26) - 1
  }
  return label
}
