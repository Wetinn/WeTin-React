
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from "./DragAndDrop.module.css";

const DragAndDrop = () => {
    const [fileLoaded, setFileLoaded] = useState(false);
    const [dragging, setDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                setFileLoaded(true);
            }
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                setFileLoaded(true);
            }
        }
    };

    return (
        <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleClick}
            style={{
                border: dragging ? '2px dashed #025373' : '2px dashed #025373',
                width: "90%",
                borderRadius: "5px",
                height: "11vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.7rem",
                paddingLeft: "10px",
                cursor: "pointer"
            }}
            className={styles['arrasteAqui']}
        >
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {
                fileLoaded ? (
                    <FontAwesomeIcon icon={faCheckCircle} size="3x" color="green" />
                ) : (
                    <p>Arraste e solte uma imagem aqui, ou clique para selecionar</p>
                )
            }
        </div >
    );
};

export default DragAndDrop;
