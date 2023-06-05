export const getElVisibilityInScreen = (listElementId) => {
  const listEl = listElementId.map((el) => document.getElementById(el))
  const listElPosition = listEl.map((el) => el.getBoundingClientRect())

  listElPosition.map((po, i) => {
    // checking whether fully visible
    // if (po.top >= 0 && po.bottom <= window.innerHeight) {
    //   console.log(listElementId[i])
    //   return listElementId[i]
    // }
    // checking for partial visibility a half pasrt of ele
    if (po.top < window.innerHeight / 2 && po.bottom >= 0) {
      console.log(listElementId[i])
      return listElementId[i]
    }
    // checking for partial visibility
    // if (po.top < window.innerHeight && po.bottom >= 0) {
    //   console.log(listElementId[i])
    //   return listElementId[i]
    // }
    return ''
  })
}
