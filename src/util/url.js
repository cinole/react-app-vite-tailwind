import { createBrowserHistory } from 'history'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
// eslint-disable-next-line compat/compat
export const useQuery = (name) => new URLSearchParams(useLocation()?.search)?.get(name)
export const objectToQueryString = (obj, options = {}) =>
  queryString.stringify(obj, {
    arrayFormat: 'bracket',
    ...options
  })
export const replaceURL = data => {
  const history = createBrowserHistory()
  // eslint-disable-next-line compat/compat
  const searchParams = new URLSearchParams(history.location.search)

  Object.keys(data).forEach(function(k) {
    if (data[k]) {
      searchParams.set([k], encodeURIComponent(data[k]))
    } else {
      searchParams.delete([k])
    }
  })

  history.push({
    pathname: history.location.pathname,
    search: searchParams.toString()
  })
}
