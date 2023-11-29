const aaa = 'xxxx'
const bbb = 'xxxx'

const p1 = new Promise((res) => {
	if (aaa) {
		res(true)
	}
})

console.log(aaa)
