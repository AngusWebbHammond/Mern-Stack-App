import { ArrowLeft, ArrowRight } from "lucide-react"

type Props = {
    type: string,
    index: number,
    setIndex: (index: number) => void,
}

const ArrowButton = (props: Props) => {
  return (
    <button disabled={(props.type === "Left" && props.index === 0) || (props.type === "Right" && props.index === 2)} onClick={() => {
        if (props.type === "Left") {
            props.setIndex(props.index - 1)
        }
        else {
            props.setIndex(props.index + 1)
        }
    }}>{props.type === "Left"? <ArrowLeft/>:<ArrowRight/>}</button>
  )
}

export default ArrowButton