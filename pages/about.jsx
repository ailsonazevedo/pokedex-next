import Image from "next/image";
import Styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={Styles.about}>
      <h1>About</h1>
      <p>
        Ea ex do nostrud irure ullamco ad reprehenderit consequat pariatur
        tempor aliqua occaecat eiusmod ad. Commodo sunt ullamco labore
        adipisicing ad proident adipisicing officia deserunt. Nulla pariatur
        aliqua elit ullamco ad qui velit sit dolor nostrud aute culpa. Nisi eu
        velit duis fugiat. Commodo excepteur et laborum pariatur duis nostrud
        aliqua eu. Ut fugiat pariatur eu nulla officia cupidatat do. Id sunt
        esse ex sunt veniam ut.
      </p>
      <Image
        src="/images/pycharm-original.svg"
        width="300"
        height="300"
        alt="PokePython"
      />
    </div>
  );
}
