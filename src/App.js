import './App.css';
import fileIcon from "./Assets/file.png"
import removeFile from "./Assets/dustbin.png"
import {useState} from "react"

function App() {
    const [data,setData] = useState()
    const clickFile = () => {
        const file = document.querySelector("#fileInput")
        file.click();
    }
    const seeFile = (e) => {
        // console.log(e.target.files[0]);
        setData(e.target.files[0])
    }
    const dragEnter = (e) => {
        e.preventDefault();
    }
    const dragLeave = (e) => {
        e.preventDefault();
    }
    const dragOver = (e) => {
        e.preventDefault();
    }
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if(files[0].type!=="text/csv")
        {   
            alert("not a csv file")
        }else{
            console.log(files[0]);
            setData(files[0])
        }
    }
    console.log(data);
    return (
        <>
            <div className="file-box">
                <div className="file-upload-container"
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                >
                    <h2>Upload Your File</h2>
                    <p>File should be a csv</p>
                    {
                        data?
                        <div className="file-upload-box" style={{cursor: "default"}}>
                            <img src={fileIcon}/>
                            <div className="uploaded-file-name">
                            <h3>{data.name}</h3>
                            <img src={removeFile} onClick={()=>setData()}/>
                            </div>
                            </div>
                        :
                        <div className="file-upload-box"
                        onClick={
                            () => {
                                clickFile()
                            }
                    }>
                        <input type="file" id="fileInput" className="file-input" accept='.csv'
                            onChange={
                                (e) => {
                                    seeFile(e)
                                }
                            }/>
                        <img src={fileIcon}/>
                        <p>Drag a file or click here</p>
                    </div>
                    }
                   
                </div>
            </div>
        </>
    );
}

export default App;
