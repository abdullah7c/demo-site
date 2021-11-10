import {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import dynamic from 'next/dynamic'

const Editor = dynamic(() =>
  import('./Editor'), { ssr: false }
)
function AddBlog() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let content = ''
    return (
      <>
        <button className="blog-btn-custom" onClick={handleShow}> Add Blog + </button>
        <Modal
          size="lg"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Editor blog={content} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AddBlog
