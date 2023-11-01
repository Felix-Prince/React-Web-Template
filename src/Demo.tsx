const Demo = () => {
	const arr = ['11', '22', '333']
	return (
		<div id='xxx' className='test' title='xxxx' style={{ width: 200 }}>
			<p>ddddd</p>
			{arr.map((item) => {
				return <div key={item}>{item}</div>
			})}
		</div>
	)
}

export default Demo
