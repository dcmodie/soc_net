import Modal from 'react-modal';
import { useState } from 'react';
import { savePost } from '../api/Posts';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function EditPostModal() {
  const [text, setText] = useState('');
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: savePost,
    onSuccess: () => {
      // Invalidate and refetch
      console.log('save post success');
      queryClient.invalidateQueries({ queryKey: ['fetchPosts'] });
      //queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    mutation.mutate({ userId: 1, text: text });
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create a Post"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

        <form>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default EditPostModal;
