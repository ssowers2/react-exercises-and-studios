import classes from './ChoresList.module.css';

export default function ChoresList() {
  const chores = ["Empty Dishwasher", "Mop Floors", "Organize Pantry"];
  return (
    <div>
      <h2 className= {classes.choresHeading}>Today's Chores</h2>
      <ul>
        <li className= {classes.choresText}>{chores[0]}</li>
        <li className= {classes.choresText}>{chores[1]}</li>
        <li className= {classes.choresText}>{chores[2]}</li>
      </ul>
    </div>
  );
}