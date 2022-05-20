import ReactDOM from 'react-dom';

function Func(props) {
    return <div className="modal">
        <div className="div">
            <h3>Вы точно хотите удалить этого пользователья?</h3>
            <button id={props.id} onClick={props.yes}>Да</button>
            <button onClick={() => props.net(false)}>Нет</button>
        </div>
    </div>
}
export const Modal = (props) => {
    return <>
        {ReactDOM.createPortal(
            <Func yes={props.yes}  id={props.id} net={props.net}/>,
            document.getElementById('Modal')
        )}
    </>
}