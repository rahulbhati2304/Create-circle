import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  greyColor: {
    height: "50px",
    width: "50px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
  },
  yellowColor: {
    height: "50px",
    width: "50px",
    backgroundColor: "yellow",
    borderRadius: "50%",
    display: "inline-block",
  },
}));
export default function CircleComponent() {
  const [list, setList] = useState([]);
  const [color, setColor] = useState(false);
  const classes = useStyles();
  const changeColor = () => {
    setColor(true);
  };

  const addCircle = () => {
    const array = [];
    array.push("1");
    setList([...list, ...array]);
  };

  return (
    <div>
      <button onClick={addCircle}>Add circle</button>
      <div>Color Count: </div>
      <div>
        {list.map((item) => (
          <div>
            <li
              onClick={changeColor}
              className={clsx({
                [classes.greyColor]: !color,
                [classes.yellowColor]: color,
              })}
            ></li>
          </div>
        ))}
      </div>
    </div>
  );
}
