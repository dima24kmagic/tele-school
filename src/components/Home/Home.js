import React, { Component, Fragment } from "react";
import { Element, Link } from "react-scroll";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import "./home.scss";
import { AnimateHomeIntro } from "./animations";

const test = {
  p: "HIIII"
};

class Home extends Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_GOOGLE_API);
    const { isFirstLoad, firstLoad } = this.props;
    console.log(isFirstLoad);
    console.log(isFirstLoad);
    if (isFirstLoad) {
      firstLoad();
      setTimeout(() => {
        AnimateHomeIntro();
      }, 0);
    }
  }

  handleCMClick = (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  render() {
    const windowWidth = window.innerWidth;
    const scrollOffsetBasedOnNavHeight = windowWidth <= 768 ? -20 : -70;
    console.log(windowWidth, scrollOffsetBasedOnNavHeight);
    return (
      <Fragment>
        <div className="home">
          <div className="bg">
            <div className="bg__overlay" />
          </div>
          <div className="shutter">
            <div className="shutter--1" />
            <div className="shutter--2" />
          </div>
          <div className="container intro">
            <p className="display-1 text-light intro__words shadowed">
              Школьный телецентр
            </p>
            <Link
              to="content"
              smooth={true}
              duration={500}
              offset={scrollOffsetBasedOnNavHeight}
            >
              <button className="intro__btn text-light shadowed">
                Узнать больше
              </button>
            </Link>
          </div>
        </div>
        <Element name="content">
          <div className="container info-content" id="home-anchor">
            <ContextMenuTrigger id="about_us">
              <h1>Немного о нас:</h1>
            </ContextMenuTrigger>
            <ContextMenu id="about_us">
              <MenuItem
                data={{ test: "SUCK", 1: 2 }}
                onClick={this.handleCMClick}
              >
                <div
                  style={{
                    width: "auto",
                    height: "auto",
                    background: "#000",
                    color: "white",
                    padding: "2rem 6rem"
                  }}
                  onClick={this.handleCMClick}
                >
                  WOOOOOW
                </div>
              </MenuItem>
            </ContextMenu>
            <p>
              В нашей школе с 1981 года успешно работает школьное телевидение.
              За годы существования нашего телецентра накоплен большой аудио и
              видеоматериал по всем учебным предметам. Снято много своих
              документальных фильмов и телепередач. Телецентр позволяет
              транслировать телепередачи в любой кабинет школы по трем каналам.
              Широко используется и школьное радио: транслируются объявления,
              радиопередачи, музыкальные переменки.
            </p>
            <p>
              Основным видом деятельности и основным назначением школьной
              телевизионной системы является трансляция учебных программ. Для
              связи с телецентром имеется переговорное устройство. Учитель
              заказывает передачу или ее фрагменты. Возможен предварительный
              монтаж материала. В телецентре и на сайте школы имеется каталог
              учебных фильмов и передач по различным предметам и для внеклассной
              работы.
            </p>
            <p>Школьная телестудия имеет свой видео-канал на сайте youtube.</p>
            <p>
              Не менее важным в работе школьного телевидения является создание
              своих телепередач и телефильмов, съемка хроники школьной жизни,
              запись уроков. Кинолетопись школы ведется уже с 1980 года. Фильмы,
              снятые на 16 миллиметровую кинопленку, переведены на видео.
              Просматривая такие архивные материалы, мы можем вернуться в те
              далекие годы и узнать, чем жила тогда школа. После реконструкции в
              2001 году телевидение нашей школы стало работать на новом
              оборудовании. Появилась возможность компьютерного монтажа. Все это
              позволило создавать передачи на более высоком уровне.
            </p>
            <p>
              В нашей школе уже давно стало традицией начинать новый учебный год
              с телепередачи ко Дню Знаний. Школьные телепередачи создаются с
              участием учителей и учащихся. Преподаватели и ученики выступают в
              роли авторов сценария, телеведущих, дикторов.
            </p>
            <p>
              Уже с 1980 года, когда в школе еще не было телецентра, а работал
              только кинокружок, наши фильмы принимали участие в областных и
              республиканских конкурсах любительского кино и были награждены
              дипломами и призами. Участники школьного кинокружка, а позже -
              киностудии “Журавлик”, неоднократно принимали участие в передаче
              Белорусского телевидения “Мы и наша кинокамера”.
            </p>
            <p>
              Вот только несколько названий кинолент, которые были отмечены в
              80-е годы компетентным жюри: “Последнее лето детства”, “Родная
              сторонка”, “Новая ступенька”, зарисовка “Октябрь”; игровые –
              “Идеальная переменка”, “Бумеранг”, “Виновата ли кошка?”
            </p>
            <p>
              А вот телефильмы, которые принимали участие в Национальных
              фестивалях любительских и студенческих фильмов и были награждены
              дипломами:
            </p>
            <p>
              <a href="https://goo.gl/QdXtYN">“Пад шатамі старога сквера”</a> –
              диплом за кинематографическое исследование исторического сюжета;
            </p>
            <p>
              <a href="https://goo.gl/rLPXSo">“Школьная страничка”</a> – – за
              лучший телерепортаж;
            </p>
            <p>
              <a href="https://goo.gl/6u1RYR">“Вкусная страничка”</a> – за
              видеофильм в номинации “Неигровое кино”.
            </p>
            <p>
              Игровой фильм “Экспромт” был признан лучшим фильмом VII
              Национального фестиваля любительских и студенческих фильмов в 2002
              году. А в 2007 году на I открытом городском молодежном фестивале
              видеороликов "Киногрань" в номинации "Мой Минск" победу одержала
              работа ученицы нашей школы Маши Курачёвой "Горад майго спакою".
            </p>
          </div>
        </Element>
      </Fragment>
    );
  }
}

export default Home;
