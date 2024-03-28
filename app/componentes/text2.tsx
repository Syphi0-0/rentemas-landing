import style from "./modulos/text2.module.css";

type Props = {
  children?: React.ReactNode;
};

const TextT = ({ children }: Props) => {
  return <div className={style.text2}>{children}</div>;
};

export default TextT;
