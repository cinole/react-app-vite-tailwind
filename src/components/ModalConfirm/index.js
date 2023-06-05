import React from 'react'
import { Modal } from '@mui/material'

const index = ({ title, isOpen, onConfirm, onClose, loading }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="wp-modal-confirm-common p-4">
        <div className="modal-title text-center text-white capitalize">
          {title}
        </div>
        <div className="flex items-center w-full mt-6">
          <button
            className="btn-cancel uppercase sub-color w-6/12 mr-2 p-2"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            disabled={loading}
            className="btn-ok rounded-none text-white uppercase text-main w-6/12 p-2 flex items-center justify-center"
            onClick={onConfirm}
          >
            {loading && (
              <span className="spinner spinner--quarter mr-1">&nbsp;</span>
            )}
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default index
