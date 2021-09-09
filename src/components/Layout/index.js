import s from "./style.module.css"

// import { ReactComponentElement as } from "react";

const Layout =({title, desc, urlBg='none', colorBg='none'})=>{

	return(

	<section className={s.root}>
    <div className={s.wrapper}>
        <article>
            <div className={s.title}>
                <h3>{title}</h3>
                <span className={s.separator}></span>
            </div>
            <div className={s.desc.full}>
                <p>{desc}</p>
            </div>
        </article>
    </div>
</section>


	)

}
export default Layout;