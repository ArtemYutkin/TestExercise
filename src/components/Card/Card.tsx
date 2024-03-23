import { FC } from 'react';
import './Card.scss'

interface CardProps{
    title: string;
    picName: string;
}

export const Card:FC<CardProps> = ({
    title,
    picName,
}) => {
    return (
        <div className='Card'>
            <div className='Card__pic' style={{backgroundImage: `url(src/assets/${picName})`}}></div>
            <span className='Card__title'>{title}</span>
        </div>
    )
}