import s from './style.module.css';
// console.log('#### s', s);

const HeaderBlock =({title,hideBackground = false})=>{
	const styleRoot= hideBackground ?{backgroundImage:'none'}:{};
	return (
		<div>
			<div>
				<h1 className={s.header} style={styleRoot}>
					 {title}
					 </h1>
				<p>Simple Triple Triad Game!</p>
			</div>

		</div>

	)
}

export default HeaderBlock;