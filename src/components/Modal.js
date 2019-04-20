import React from 'react'

function Modal({ show, children, toggleModal }) {
  if (show) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '99',
          backgroundColor: 'rgba(30, 30, 30, 0.8)'
        }}

        onClick={toggleModal}
      >
        <div style={{
          width: '90vw',
          paddingTop: '50.625%',
          position: 'relative'
        }}>
          {/* 50.625 comes from (9 / 16) * 90 */}
          {children}
        </div>

        <button style={{ margin: 30 }} onClick={toggleModal}>Close</button>
      </div>
    )
  }

  return null
}

export default Modal