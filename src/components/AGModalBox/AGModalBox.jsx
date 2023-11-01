"use client";

import styles from "./AGModalBox.module.css";

const AGModalBox = ({ ModalElementID, ModalBoxTitleText }) => {
    return (
		<div className="modal fade" id={ModalElementID} role="dialog" aria-labelledby={`${ModalElementID}ModalLabel`} aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title text-muted" id={`${ModalElementID}ModalLabel`}><strong>{ModalBoxTitleText}</strong></h4>
						<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { document.getElementById(ModalElementID).modal("hide"); }}>Close</button>
					</div>
					<div className="modal-body">
						<h1>Something in the Modal!</h1>
					</div>
				</div>
			</div>
		</div>
    );
};

export default AGModalBox;