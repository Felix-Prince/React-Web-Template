import { FC } from 'react'
import Demo from './Demo'
import data from './const.json'
import styles from './styles.module.less'
import styless from './styles.less'

type AppType = {
	count: number
}

const App: FC<AppType> = () => {
	const arr = ['11', '22', '333']
	console.log(data)
	console.log(styless)
	return (
		<div
			id='xxx'
			className={styles.myComponent}
			title='xxxx'
			style={{ width: 200 }}
		>
			<p>ddddd</p>
			{arr.map((item) => {
				return <span key={item}>{item}</span>
			})}
			<Demo />
			<div className={styless.myComponent}>11111111</div>
		</div>
	)
}

export default App
