import ContextComponents from './[!index]*.js'

export default function Compose(props) {
  const { children, ...rest } = props

  return (
    <>
      {ContextComponents.reduceRight((acc, Comp) => {
        return <Comp {...rest}>{acc}</Comp>
      }, children)}
    </>
  )
}
