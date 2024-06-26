// // import React, { useState } from 'react';

// const { useState } = React;

// const DynamicForm = () => {
//     const [inputs, setInputs] = useState([]);

//     const handleAddInput = () => {
//         setInputs([...inputs, '']);
//     };

//     const handleRemoveInput = () => {
//         if (inputs.length > 0) {
//             setInputs(inputs.slice(0, -1));
//         }
//     };

//     return (
//         <div>
//             <div id="subcon">
//                 <button className="btn btn-sm btn-primary" id="add" onClick={handleAddInput}>
//                     +
//                 </button>
//                 {inputs.length > 0 && (
//                     <button className="btn btn-sm btn-danger" id="del2" onClick={handleRemoveInput}>
//                         -
//                     </button>
//                 )}
//             </div>
//             <form>
//                 {inputs.map((input, index) => (
//                     <div key={index}>
//                         <input className="form-control" type="text" value={input} readOnly />
//                     </div>
//                 ))}
//             </form>
//         </div>
//     );
// };

// // export default DynamicForm;

// // ReactDOM.render(<DynamicForm />, document.getElementById('root')); // not supported anymore

// ReactDOM.createRoot(<DynamicForm />, document.getElementById('root'));










// const { useState } = React;

// const DynamicForm = () => {
//     const [inputs, setInputs] = useState([]);

//     const handleAddInput = () => {
//         setInputs([...inputs, '']);
//     };

//     const handleRemoveInput = () => {
//         if (inputs.length > 0) {
//             setInputs(inputs.slice(0, -1));
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <div id="subcon">
//                     <button className="btn btn-sm btn-primary" id="add" onClick={handleAddInput}>
//                         +
//                     </button>
//                     {inputs.length > 0 && (
//                         <button className="btn btn-sm btn-danger" id="del2" onClick={handleRemoveInput}>
//                             -
//                         </button>
//                     )}
//                 </div>
//             </div>
//             <form>
//                 {inputs.map((input, index) => (
//                     <div key={index}>
//                         <input className="form-control" type="text" value={input} readOnly />
//                     </div>
//                 ))}
//             </form>
//         </div>
//     );
// };

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<DynamicForm />);

// // ReactDOM.createRoot(<DynamicForm />, document.getElementById('root'));

const Form = () => {
    return(
        <div id="root" class="border rounded p-2 shadow">
        <div id="controller" class="d-flex flex-column py-1 row-gap-2">                   
            <div id="subcon" class="d-flex column-gap-3 align-items-center">
                <div class="fw-bold">Add or remove input field: </div>
                <button class="btn btn-sm btn-primary" id="add">+</button>
            </div>
        </div>
        <div>
            <div class="small pt-2">* Atleast one input field is required</div>
        </div>
        <form action="" class="d-flex flex-column row-gap-3">
            <div>
                <input class="form-control" type="text" />
            </div>
        </form>
    </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Form />);