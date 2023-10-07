import React from 'react'
import { useState } from 'react';

export default function JoinUs() {
    const [selectedFile, setSelectedFile] = useState(null);


    // const [answer, setAnswer] = useState('');
    // const [error, setError] = useState(null);
    // const [status, setStatus] = useState('typing');




    const handleInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                image.style.display = 'block'
                image.src = e.target.result;
                image.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    };

    function handleSubmit2(e) {

        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    const handleFileUpload = () => {
        if (!selectedFile) {
            alert('Please select a file first.');
            return;
        }
        const formData = new FormData();
        formData.append('file', selectedFile);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

    }
    return (
        <>
            <form onSubmit={handleSubmit2} method={'POST'}>
                <div className={'team__person you'}>
                    <div className={'team__photo'}>
                        <img id="image" className={'you'} /></div>
                    <input type="file" id="fileInput" accept="image/*" onChange={handleInputChange} ></input>
                    <div className={'team__function'}>
                        <label>
                            <input name="inputName" defaultValue="Please write your name" />
                        </label>
                        <label>
                            <input name="inputFunction" defaultValue="Please write your function" />
                        </label>
                    </div>
                </div>
                <button
                    className={'button'}
                    onClick={handleFileUpload}
                >
                    Submit
                </button>
            </form>
        </>
    );
}


