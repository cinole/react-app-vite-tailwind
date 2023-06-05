// import ContextProviders from './[!index]*.js'
import Web3ContextProvider from './Web3Context.js'
import CommonProvider from './CommonContext.js'

export default function Compose({ children, ...rest }) {
  return (
    <>
      {[Web3ContextProvider, CommonProvider].reduceRight((acc, Comp) => {
        return <Comp {...rest}>{acc}</Comp>
      }, children)}
    </>
  )
}
