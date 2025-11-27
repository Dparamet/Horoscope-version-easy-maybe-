
    //InputYour Value Here!
const YourMonth = "a";

const Month = ["January", "February", "March", "April", "May", "June", "July", "August"
                , "September", "October", "November", "December"];

const Zodiac =["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer",
                "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
                
const Symbol = ["♑", "♒", "♓", "♈", "♉", "♊", "♋",
             "♌", "♍", "♎", "♏", "♐"];

let check = false;
for(let i = 0;i<Month.length;i++)
{
    if(YourMonth === Month[i])
    {
        console.log("Zodiac Is "+ Zodiac[i] + " " +Symbol[i]);
        check = true;
        break;
    }
}
if(check == false)
{
            console.log("You Type Name Wrong Please RE-Check and Try again")    
}