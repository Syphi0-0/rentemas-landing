import style from "./hoverone.module.css";
import Right from "./rightMiddle";
import Left from "./leftMiddle";

type Props = {
  children?: React.ReactNode;
};

const Hoverone = ({ children }: Props) => {
  return (
    <div className={style.body}>
      {children}
      <Left></Left>
      <Right></Right>
    </div>
  );
};

export default Hoverone;
