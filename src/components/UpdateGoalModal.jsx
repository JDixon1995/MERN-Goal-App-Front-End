import { Modal, Button, Form } from 'react-bootstrap'

function updateGoalModal({ show, handleClose }) {

	const handleSubmit = (e) => {
		
	}

  return (
	<>
	<Modal.Dialog show={show} onHide={handleClose}>
		<Form>
  			<Modal.Header closeButton>
    			<Modal.Title>Update Goal</Modal.Title>
  			</Modal.Header>
  		<Modal.Body>
    		<Form.Group>
				<Form.Label>Task</Form.Label>
				<Form.Control type='text' required />
			</Form.Group>
  		</Modal.Body>
  			<Modal.Footer>
    			<Button variant="secondary">Close</Button>
    			<Button variant="primary" type='submit'>Save changes</Button>
  			</Modal.Footer>
		</Form>
	</Modal.Dialog>

	</>
  )
}
export default updateGoalModal