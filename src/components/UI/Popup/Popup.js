import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import './popup.css'


export default ({userInfo, message}) => {
    console.log(userInfo)
    const handleClick = () => {
        if(message == 'Thank you for support! Check your email! P.S. Check spam if there is no message from us.'
            || message == 'Спасибо за поддержку! Проверьте свою почту! P.S. Если от нас сообщение не пришло, проверьте спам!'
        ) {
            console.log('Done')
            window.Email.send({
                SecureToken: '0d90727e-5880-49e0-9e0b-c215e9b2e7ab',
                To: userInfo.email,
                From: 'olzhasaitu362@gmail.com',
                Subject: "Будьте в курсе событий! Присоединяйтесь к нашему Telegram каналу",
                Body: `<b>Спасибо</b>, что зарегистрировались на нашем сайте и оставили свой адрес электронной почты, чтобы быть в курсе нашего запуска. Мы хотели бы поделиться с вами свежими новостями о нашем приложении Innr. <br><br>
                        Мы работаем над созданием приложения, которое поможет вам быстро и эффективно решать свои проблемы с кожей. От сканирования кожи до предоставления рекомендаций по уходу - наше приложение делает все за несколько секунд. Мы хотим, чтобы вы были первыми, кто узнает о запуске нашего приложения.<br><br>
                        Поэтому мы приглашаем вас присоединиться к нашему Telegram каналу, где мы будем делиться с вами последними новостями и уведомлениями о нашем запуске. <br><br>
                        Присоединяйтесь к нам прямо сейчас, чтобы не пропустить ничего важного!<br><br>
                        <b>Ссылка на наш Telegram канал:</b> <a href='https://t.me/innrprelaunh'>https://t.me/innrprelaunh</a><br><br>
                        Спасибо, что поддерживаете нас в нашем путешествии.<br><br>
                        <i>С наилучшими пожеланиями,
                        Команда Innr</i>`
            }).then(message => {
                    console.log(message)

                }
            );
        }
    }

    handleClick()

    return (
    <Popup
        trigger={<button
            onClick={handleClick}
            className="button"
                         style={{position: 'absolute',
                             width: '100%',
                             height: '100%',
                             opacity: 0
                             }}>
            Open Modal </button>}
        modal
        nested
    >
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="content">
                    {message}
                </div>
                <div className="actions">
                    <button
                        className="button"
                        onClick={() => {
                            console.log('modal closed ');
                            close();
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
    </Popup>
)};