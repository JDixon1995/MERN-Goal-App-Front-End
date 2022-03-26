import { Modal, Button, Form } from 'react-bootstrap'

function updateGoalModal({ show, handleClose }) {

	const handleSubmit = (e) => {
		
	}

  return (
	<Modal show={show} onHide={handleClose} >
		<Form onSubmit={handleSubmit}>
			<Modal.Header closeButton>
				<Modal.Title>Update Goal</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Group className='mb-3' controlId='task'>
					<Form.Label>Task</Form.Label>
					<Form.Control type='text' required />
				</Form.Group>
				<Button>Update Task</Button>
			</Modal.Body>
		</Form>
	</Modal>
  )
}
export default updateGoalModal