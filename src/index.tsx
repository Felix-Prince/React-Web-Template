import React from 'react'

type AppType = {
	count: number
}

const App: React.FC<AppType> = () => {
	const a = 'xxxx'
	const lintext = 'bbbb'
	const arr = ['11', '22', '333']
	return (
		<div id='xxx' className='xxx' title='xxxx' style={{ width: 200 }}>
			{arr.map((item) => {
				return <span key={item}>{item}</span>
			})}
		</div>
	)
}

export default App
