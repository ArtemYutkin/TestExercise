import './Footer.scss'

export const Footer = () => {

    return (
        <div className="Footer">
            <span className="Footer__text">© 2023 Институт запусков</span>
            <div className="Footer__wrapper">
                <a className="Footer__wrapper-link" href="#">Политика конфидециальности</a>
                <a className="Footer__wrapper-link" href="#">Правовая информация</a>
            </div>
        </div>
    )
}