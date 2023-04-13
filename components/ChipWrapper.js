import Chip from './Chip'
import chips from '@/data/chips'

const ChipWrapper = ({ text }) => {
  return (
    <div className="flex flex-wrap content-center justify-start gap-x-1 gap-y-2">
      {chips.map((chip) => (
        <Chip key={chip.name} text={chip.name} type={chip.type} />
      ))}
    </div>
  )
}

export default ChipWrapper
