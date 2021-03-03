import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import {setShowModal} from '../redux/actions';

const Modal = (props) => {
    const modal = props.showModal ? 'modal show' : 'modal'

    const handleModal = () => {
        props.setShowModal()
    }

    return (
        <div className={modal}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <p>Добавьте новый пост:</p>
                    </div>
                    <div className="modal-body">
                        <AddTodo />
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleModal} type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {showModal: state.showModal}
};

export default connect(mapStateToProps, {setShowModal})(Modal)