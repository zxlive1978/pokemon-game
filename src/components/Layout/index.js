import s from "./style.module.css"

import { ReactComponentElement as } from "react";

const Layout =({title, desc, urlBg='none', colorBg='none'})=>{

	return(

		<section class="root">
    <div class="wrapper">
        <article>
            <div class="title">
                <h3><-- ЗДЕСЬ props.title --></h3>
                <span class="separator"></span>
            </div>
            <div class="desc full">
                <p><-- ЗДЕСЬ props.desc --></p>
            </div>
        </article>
    </div>
</section>


		<div>
			<div>
			<h1 className={s.header}>
				{title}
			</h1>
			<p className={s.desc}>
				{desc}
			</p>
			<img src = 
			{urlBg == 'none' && 'none'}
			 
			 ></img>
			</div>
		</div>
	)

}
export default Layout;