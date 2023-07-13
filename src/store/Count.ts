import { makeAutoObservable } from 'mobx'
class Count {
    num = 0
    constructor() {
        makeAutoObservable(this)
    }
    add = () => {
        this.num++
        console.log(
            "%c []-6",
            "font-size: 13px;background:pink;color:#000",
            this.num
        )
    }
}
const count = new Count()
//  console.log(count) // 次数数据为响应式的了
export default count