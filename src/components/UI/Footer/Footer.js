import React from "react";
import "./footer.scss";

function Footer() {
  const phonesData = [
    {
      holder: "Тел/факс",
      num: "327-57-37"
    },
    {
      holder: "Приемная",
      num: "327-64-64"
    },
    {
      holder: "Завучи",
      num: "327-71-97"
    },
    {
      holder: "Вахта",
      num: "327-80-65"
    }
  ];
  return (
    <div className="footer">
      <div className="data">
        <div className="footer__info footer__info--address">
          <div className="footer__info__title">Адресс:</div>
          <div className="footer__info__row">
            220030 г. Минск, ул. Красноармейская, 11, <br /> ст. метро
            "Октябрьская/Купаловская"
          </div>
        </div>
        <div className="footer__info footer__info--contacts">
          <div className="footer__info__title">Контактные данные:</div>
          {phonesData.map(({ holder, num }) => (
            <div className="footer__info__row">{`${holder}: ${num}`}</div>
          ))}
        </div>
        <div className="footer__info footer__info--social">
          <div className="footer__info__title">Мы в соц сетях:</div>
          <div className="footer__info__row">Контактные данные:</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
