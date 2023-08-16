export const getDataFromLocalStorage=() =>{
    // return JSON.parse(localStorage.getItem("notes") ?? 'null');
    const initialValue = JSON.parse(localStorage.getItem("notes"));
    return initialValue || "";

}

export const getNoteColor=(id) =>{
    console.log("current id: ",id)
   const notesData = getDataFromLocalStorage();
   const filteredData = notesData.filter((data, index) => {
    console.log("current id: ",data)
      return id===data.id
    });
   console.log(filteredData);
   return (filteredData);
}