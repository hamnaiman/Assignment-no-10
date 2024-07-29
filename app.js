// // function clickable(msg){
// //     alert(msg)
// }
// function showAlert(message){
//     alert(message)
// }
function deleteRow(btn){
    let row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
}

