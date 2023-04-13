import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Chip = ({ text, type }) => {
  return (
    <div
      className={`mr-3 flex max-h-7 cursor-pointer items-center rounded-md bg-opacity-50 px-2 duration-200 ease-in hover:scale-105 ${
        type === 'yay' ? 'bg-primary-500' : 'bg-red-500'
      }`}
    >
      <p className="py-0 text-xs font-semibold uppercase leading-none text-gray-800 no-underline dark:text-gray-100">
        {text}
      </p>
    </div>
  )
}

export default Chip
