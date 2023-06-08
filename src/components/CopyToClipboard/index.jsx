import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const Index = ({ text }) => {
  const [copiedText, copy] = useCopyToClipboard()

  return (
    <span className="" onClick={() => copy(text)}>
      <ContentCopyIcon sx={{ fontSize: '13px' }} className="ml-1" />
      {copiedText && (
        <span className="wp-tooltip px-2 py-1 mt-2 text-orange">Copied</span>
      )}
    </span>
  )
}

export default Index
