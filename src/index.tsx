import React from 'react'
// import styles from './styles.less'

type AppType = {
	count: number
}

const App: React.FC<AppType> = () => {
	const a = 'xxxx'
	const lintext = 'bbbb'
	const arr = ['11', '22', '333']
	return (
		<div id='xxx' className='test' title='xxxx' style={{ width: 200 }}>
			<p>ddddd</p>
			{arr.map((item) => {
				return <span key={item}>{item}</span>
			})}
		</div>
	)
}

export default App
