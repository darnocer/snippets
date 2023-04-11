import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <div className="mr-3 rounded-sm bg-primary-500 bg-opacity-50 px-2">
      <Link href={`/tags/${kebabCase(text)}`}>
        <a className="text-xs uppercase text-primary-900 hover:text-primary-700 dark:text-primary-100 dark:hover:text-primary-400">
          {text.split(' ').join('-')}
        </a>
      </Link>
    </div>
  )
}

export default Tag
