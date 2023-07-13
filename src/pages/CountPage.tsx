import count from '../store/Count'
import { observer } from 'mobx-react-lite'
function CountPage() {
  return (
    <div>
      <h1>countpage</h1>
      <button onClick={count.add}>{count.num}</button>
    </div>
  )
}
export default observer(CountPage)
