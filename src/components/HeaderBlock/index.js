import s from './style.module.css';
// console.log('#### s', s);

const HeaderBlock =({title,hideBackground = false})=>{

	return (
		<div>
			<div>
				<h1 className={s.header}>
					 {title}
					 </h1>
				<p>Simple Triple Triad Game!</p>
			</div>

		</div>

	)
}

export default HeaderBlock;