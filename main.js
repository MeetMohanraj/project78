var images = ["WhatsApp Image 2021-07-08 at 4.49.15 PM.jpeg","WhatsApp Image 2021-07-08 at 4.46.00 PM.jpeg","WhatsApp Image 2021-07-08 at 4.48.56 PM.jpeg","WhatsApp Image 2021-07-08 at 4.54.50 PM.jpeg"];
var names = ["Me and my mother Reema","My sister Samantha","My father Mohanraj","My famliy"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}