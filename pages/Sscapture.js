import { useCapture } from 'react-capture'

const Sscapture = () => {

  const { snap } = useCapture();
  const element = useRef(null)
 
  const onClick = useCallback(() => {
    snap(element, { file: 'download.png' })
  }, [snap, element])

  return ( 
   <>
      <ComponentWrapper ref={element}>
        <Sscapture />
      </ComponentWrapper>
 
    <Button onClick={onClick} value="Download" />
     </>
   );
}
 
export default SScapture;