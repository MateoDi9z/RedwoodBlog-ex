import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <div className="navbar">
          <Link to={routes.about()}>About</Link>
          <Link to={routes.contact()}>Contact</Link>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
