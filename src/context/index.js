import ContextComponents from './[!index]*.js'

export default function Compose(props) {

  return (
    <>
      {ContextComponents.reduceRight((acc, Comp) => {
        return <Comp {...props.rest}>{acc}</Comp>
      }, children.children)}
    </>
  )
}
