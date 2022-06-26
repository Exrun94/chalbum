import React from 'react';

const Modal = () => {

    return (
        <React.Fragment>
            <label htmlFor="my-modal-4" className="btn modal-button">open modal</label>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p className="py-4">Youve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </label>
            </label>
        </React.Fragment>

    )
}

export default Modal

/* 
    TODO
    
*/