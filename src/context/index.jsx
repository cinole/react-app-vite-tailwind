// import ContextComponents from './[!index]*.js'
import Web3Context from './Web3Context.jsx'

export default function Compose({ children, ...rest }) {
  return (
    <>
      {[Web3Context].reduceRight((acc, Comp) => {
        return <Comp {...rest}>{acc}</Comp>
      }, children)}
    </>
  )
}
