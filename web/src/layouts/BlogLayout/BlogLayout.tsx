import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="maintitle">
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
        </div>
        <nav className="navbar">
          <div className="leftside">
            <Link to={routes.home()}>Home</Link>
            <Link to={routes.about()}>About</Link>
            <Link to={routes.contact()}>Contact</Link>
          </div>

          <div className="rightside">
            {isAuthenticated ? (
              <div>
                <span className="navlogin">
                  Logged in as{' '}
                  <span className="username">{currentUser.email}</span>
                </span>
                <button type="button" onClick={logOut} className="button1">
                  Logout
                </button>
              </div>
            ) : (
              <Link to={routes.login()}>Login</Link>
            )}
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
