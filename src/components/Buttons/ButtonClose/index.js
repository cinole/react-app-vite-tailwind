import CloseRed from '@/static/svg/close-red.svg'
import { useNavigate as useHistory } from 'react-router-dom'

const Index = props => {
  const history = useHistory()

  const handleRedirect = () => history.push(props.path)

  return (
    <>
      {props.type === 'desktop' && (
        <div className="btn-close" onClick={handleRedirect}>
          <img src={CloseRed} alt="close"/>
          <div className="heading-3 btn-close__text">close</div>
        </div>
      )}

      {props.type === 'mobile' && (
        <img className="mobile-btn__close" src={CloseRed} alt="close" onClick={handleRedirect}/>
      )}
    </>

  )
}

Index.defaultProps = {
  type: 'desktop'
}

export default Index
