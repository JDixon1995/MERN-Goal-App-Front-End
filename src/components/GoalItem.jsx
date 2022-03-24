import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'


function GoalItem({ goal }) {

	const dispatch = useDispatch()

  return (
	<div className="goal">
		<button onClick={() => {console.log(goal._id)}} className='btn btn-update'>Update</button>
		<div className='goal-text'>
		<h2>{goal.text}</h2>
			{new Date(goal.createdAt).toLocaleString('en-US')}
		</div>
		<button onClick={() => dispatch(deleteGoal(goal._id))} 
		className="close">X</button>
	</div>
  )
}
export default GoalItem