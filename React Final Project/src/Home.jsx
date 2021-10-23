import react from "react";
import Card from "./Card";

function Home(){
   
    return(
        <>

        <Card
            imgsrc="https://wallpapercave.com/wp/wp1839617.jpg"
            sname="A Netflix Series"
            title="Stranger Things"
            link="https://help.netflix.com/en/contactus"
        />

        <Card
            imgsrc="https://wallpapercave.com/wp/wp8751913.jpg"
            sname="A Netflix Series"
            title="Money Heist"
            link="https://help.netflix.com/en/contactus" 
        />

        <Card
            imgsrc="https://wallpapercave.com/wp/wp4995602.jpg"
            sname="A Netflix Series"
            title="DARK"
            link="https://help.netflix.com/en/contactus"
        />



        </>

    )


}

export default Home;