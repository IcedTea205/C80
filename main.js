name_of_stuff_array = [];

    function submit()
    {

        var display_name_of_stuff_array = [];

        for (var j = 1; j <= 4; j++)
        {
            var name_of_stuff = document.getElementById("name_of_stuff_"+j).value;
            console.log(name_of_stuff);
            name_of_stuff_array.push(name_of_stuff);
        }

        console.log(name_of_stuff_array);

        var length_of_name_of_stuff_array = name_of_stuff_array.length;
        console.log(length_of_name_of_stuff_array);

        for (var k = 0; k < length_of_name_of_stuff_array; k++)
        {
            display_name_of_stuff_array.push("<h4>NAME - "+ name_of_stuff_array[k] + "</h4>");
            console.log(display_name_of_stuff_array);
        }

        console.log(display_name_of_stuff_array);
        document.getElementById("display_name_with_commas").innerHTML = display_name_of_stuff_array

        var remove_commas = display_name_of_stuff_array.join(" ")
        console.log(remove_commas);
        document.getElementById("display_name_without_commas").innerHTML = remove_commas;

        document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";

        


        
        //var name_1 = document.getElementById("name_of_stuff_1").value;
        //var name_2 = document.getElementById("name_of_stuff_2").value;
        //var name_3 = document.getElementById("name_of_stuff_3").value;
        //var name_4 = document.getElementById("name_of_stuff_4").value;

        //name_of_stuff_array.push(name_1);
        //name_of_stuff_array.push(name_2);
        //name_of_stuff_array.push(name_3);
       //name_of_stuff_array.push(name_4);

        //console.log(name_of_stuff_array);

        //document.getElementById("display_name").innerHTML = name_of_stuff_array;
        //document.getElementById("submit_button").style.display =  "none";
        //document.getElementById("sort_button").style.display = "inline-block"; 

    }

    function sorting()
    {

        name_of_stuff_array.sort();
        console.log(name_of_stuff_array);
        
        var display_name_of_stuff_array_sorting = [];

        var length_of_name_of_stuff_array = name_of_stuff_array.length;
        console.log(length_of_name_of_stuff_array);

        for (var k = 0; k < length_of_name_of_stuff_array; k++)
        {
            display_name_of_stuff_array_sorting.push("<h4>NAME - " + name_of_stuff_array[k] + "</h4>");
            console.log(display_name_of_stuff_array_sorting);
        }

        var remove_commas = display_name_of_stuff_array_sorting.join(" ");
        console.log(remove_commas);

        document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    }

    function new_update()
    {
        document.getElementById("display_name_without_commas").innerHTML = "<h1> " + name_of_stuff_array +" </h1>";
    }