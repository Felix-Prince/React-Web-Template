import { FC } from 'react'
import Demo from './Demo'
import data from './const.json'
import styles from './styles.module.less'

type AppType = {
	count: number
}

const App: FC<AppType> = () => {
	const arr = ['11', '22', '333']
	console.log(data)
	console.log(styles)
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
		</div>
	)
}

export default App
