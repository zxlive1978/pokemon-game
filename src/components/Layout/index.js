import s from "./style.module.css"
import BackImage from '../../assets/bg2.jpg';

// import { ReactComponentElement as } from "react";

const Layout =({title, desc, urlBg, colorBg})=>{
	var stile;
	console.log(colorBg);
	if(colorBg !== 'red'){
		
		 stile = {
			 
			background:"url("+BackImage+")"	 
		}	
	} else{
		
		 stile = {
			background:colorBg

		}
	}
	console.log(stile);


	return(

	<section className={s.root}>
    <div className={s.wrapper} style={stile}>
        <article>
            <div className={s.title} 
			>
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