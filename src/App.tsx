import { FC } from 'react'
import styles from './styles.less'

type AppType = {
	count: number
}

const App: FC<AppType> = () => {
	return (
		<div
			id='xxx'
			className={styles.myComponent}
			title='xxxx'
			style={{ width: 200 }}
		>
			<p>ddddd</p>
			<div className={styles.myComponent}>11111111</div>
		</div>
	)
}

export default App
