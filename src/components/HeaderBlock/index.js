import s from './style.module.css';
console.log('#### s', s);
const HeaderBlock =()=>{
	return (
		<div>
			<div>
				<h1 className={s.header}> This pokemon card game</h1>
				<p>Simple Triple Triad Game!</p>
			</div>

		</div>

	)
}

export default HeaderBlock;