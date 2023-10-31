import { FC } from 'react'
// import styles from './styles.less'

// TODO: 实现 less modules 的方式
// TODO: 实现 less modules 的方式
// TODO: 实现 less modules 的方式
// TODO: 实现 less modules 的方式

type AppType = {
	count: number
}

const App: FC<AppType> = () => {
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
