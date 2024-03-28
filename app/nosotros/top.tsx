import style from "./top.module.css";

type Props = {
  children?: React.ReactNode;
};

const Top = ({ children }: Props) => {
  return (
    <div className={style.top}>
      {children}
      <div className={style.mtxt}>
        <h1 className={style.title}>NOSOTROS</h1>
        <p className={style.btxt}>
          Desde su inicio en 1969, Grupo Rentemas ha marcado un camino de
          evolución constante. Lo que comenzó como la renta de maquinaria ligera
          para la construcción en la ciudad de Chihuahua se ha transformado en
          más de 50 años de historia. A lo largo de este tiempo, hemos expandido
          nuestra oferta de servicios para incluir la venta de maquinaria
          ligera, herramientas para concreto, sanitarios portátiles y la
          reparación de pisos de concreto con epóxicos especializados. Esta
          diversificación refleja nuestro compromiso continuo con la calidad y
          la innovación, y nos impulsa a seguir adelante con determinación y
          pasión.
        </p>
      </div>
    </div>
  );
};

export default Top;
