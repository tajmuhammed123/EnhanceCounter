import './App.css';

function txt(props){
    return(
        <div className='text'>
        <h1>{props.name}</h1>
        <h5>Email: {props.email}</h5>
        </div>
    )
}
export default txt