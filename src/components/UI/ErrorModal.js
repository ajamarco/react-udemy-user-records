import React from 'react'
import Card from './Card'
import Button from './Button'
import "./ErrorModal.css"

export default function ErrorModal({header, body, onModalBtnClick}) {
    return (
        <div>
            <div className='backdrop' onClick={onModalBtnClick}></div>
            <Card className='modal'>
                <header className='header'>
                    <h2>{header}</h2>
                </header>
                <div className='content'>{body}</div>
                <footer className='actions'>
                    <Button handleClick={onModalBtnClick}>Ok</Button>
                </footer>
            </Card>
        </div>
    )
}
