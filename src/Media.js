import { ReactMediaRecorder } from "react-media-recorder";
import './Media.css'
import newFile from './BlobUrl'

const RecordView = () => (
  <div>
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className='container'>
          <p>{status}</p>
          <button className='btn btn-info' onClick={startRecording}>Start Recording</button>
          <video src={mediaBlobUrl} controls autoplay loop />
          <button className='btn btn-info' onClick={stopRecording}>Stop Recording</button>
        </div>
      )}
    />
  </div>
);

export default RecordView