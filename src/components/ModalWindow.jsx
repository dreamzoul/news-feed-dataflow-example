import { createPortal } from 'react-dom';

export default (props) => {
    const modal = document.getElementById('modal-window');

    return createPortal(props.children, modal);
};