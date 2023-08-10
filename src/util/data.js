export const getDataFromLocalStorage=() =>{
    // return JSON.parse(localStorage.getItem("notes") ?? 'null');
    const initialValue = JSON.parse(localStorage.getItem("notes"));
    return initialValue || "";

}