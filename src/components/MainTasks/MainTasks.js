export const MainTasks = () => {
  return (
    <section className="container">
      <h2 className="section__title">Основные задачи</h2>
      <ul className="mainTasks__list">
        <li className="mainTasks__item">
          <p className="mainTasks__number">1</p>
          <p className="mainTasks__text ">
            Создание комфортных условий и повышение качества обслуживания
            клиентов
          </p>
        </li>
        <li className="mainTasks__item">
          <p className="mainTasks__number">2</p>
          <p className="mainTasks__text ">
            Постоянно совершенствовать качество предоставляемых услуг путем
            обучения персонала, закупки нового оборудования и усиленной рекламы
            на рынке
          </p>
        </li>
      </ul>
    </section>
  );
};
