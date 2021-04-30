// referencing elements from our document
const crtbtn = document.querySelector(".add_btn") as HTMLButtonElement;
const mssgeArr = document.querySelector(".message") as HTMLDivElement;


const picData = () =>{
    const txtArr = document.querySelector("#add-post") as HTMLInputElement;

    const myDiv = document.createElement("div");
    const newPara = document.createElement("p");


    newPara.classList.add('paragraph');

    const updatebtn = document.createElement("button");
    const deletebtn = document.createElement("button");

    updatebtn.innerHTML = '<i class="fas fa-pen-square"></i>';
    deletebtn.innerHTML = '<i class="fas fa-trash"></i>';

    myDiv.classList.add('innerDiv');

    
    myDiv.appendChild(newPara);
    myDiv.appendChild(updatebtn);
    myDiv.appendChild(deletebtn);



    if(txtArr.value===""){
        alert("type something");
    }else{
        newPara.innerHTML = txtArr.value;
        mssgeArr.appendChild(myDiv);
        
        txtArr.value=""; 
    }


    deletebtn.addEventListener('click', function(){
        const parent = this.parentElement;
        parent?.remove();
    });



    updatebtn.addEventListener('click', function(){
        const parent = this.parentElement;
        
        const newTxt = document.createElement("input");
        const saveBtn = document.createElement("button");


        const newDiv = document.createElement("div");
        newDiv.classList.add("divTwo");
        newDiv.appendChild(newTxt);
        newDiv.appendChild(saveBtn);
        parent?.appendChild(newDiv);

        saveBtn.innerHTML = '<i class="fas fa-save"></i>';

        newTxt.value = newPara.innerHTML;

        if(newTxt.value==newPara.innerHTML){

            saveBtn.addEventListener('click', function(){
                
                newPara.innerHTML = newTxt.value;
                // hide fields
                newTxt.style.display='none';
                saveBtn.style.display='none';

            })

        }
        
    });
    
};
crtbtn.addEventListener('click', picData, false);
