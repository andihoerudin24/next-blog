import Image from 'next/image'

import classes from './hero.module.css'
const Hero = () =>{
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/max.png" alt="an image showing andi" width={300} height={300} />
            </div>     
                <h1>Hi im max</h1>
                <p>
                    i blog about web development - especialy frontend framework like angular or react
                </p>
        </section>
    )
}

export default Hero