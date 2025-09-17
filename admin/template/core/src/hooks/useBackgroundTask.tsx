import Task from '../views/task'
import { Modal } from '@kacat/ui'

const useBackgroundTask = () => {
  Modal.open({
    // title: '后台任务',
    content: <Task />
  })
}

export default useBackgroundTask
