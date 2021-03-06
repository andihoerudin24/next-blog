import Logo from "./logo"
import Link from 'next/link'
import classes from './main-navigation.module.css'
const MainNavigation = () =>{
        return(
            <header className={classes.header}>
                <Link href="/">
                   <a>
                       <Logo/>
                  </a>
                </Link>
                <nav>
                    <li>
                       <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                       <Link href="/contact">Contact</Link>
                    </li>
                </nav>
            </header>
        )
}

export default MainNavigation