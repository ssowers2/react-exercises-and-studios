import classes from './HobbyLinks.css';

export default function HobbyLinks() {

    let hobbyLinks = [
    "https://frontier-justice.com", 
    "https://chickennpickle.com/reserve-a-court"];
    
    return (
        <div>
        <h2 className= "hobbyHeading">My Hobbies</h2>
        <a href = {hobbyLinks[0]} className = "hobbyText">Range</a>;<br></br>
        <a href = {hobbyLinks[1]} className= "hobbyText">Pickle Ball</a>;
        </div>
    );
}