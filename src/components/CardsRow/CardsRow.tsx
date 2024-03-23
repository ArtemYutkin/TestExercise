import './CardsRow.scss'
import { props } from '../data'
import { Card } from '../Card/Card'


export const CardsRow = ({}) => {

    return (
        <div className='CardsRow'>
            {props.map(prop => <Card key={prop.id} {...prop}/>)}
        </div>
    )
}