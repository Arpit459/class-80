array=[];
function submit()

{
    var display=[];
    for(var w=1;w<=4;w++)

    {
        var name=document.getElementById("name_of_the_student_"+w).value; 
        array.push(name);
    }
    var length=array.length;
    for(var d=0;d<=length;d++)
    {
        display.push("<h4>name-"+array[d]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = display;

    var remove=display.join("");
    document.getElementById("display_name_without_commas").innerHTML = remove


    
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}    

function sort(){
    array.sort();
    var display_sort=[];
    var length=array.length;
    for(var d=0;d<=length;d++)
    {
        display_sort.push("<h4>name-"+array[d]+"</h4>");
    }

    var remove=display_sort.join("");
    document.getElementById("display_name_without_commas").innerHTML = remove
    document.getElementById("display").innerHTML=array;
}
