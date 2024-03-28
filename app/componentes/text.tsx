import style from "./modulos/text.module.css";

type Props = {
  children?: React.ReactNode;
};

const Text = ({ children }: Props) => {
  return <div className={style.text}>{children}</div>;
};

export default Text;
