import { FC, useState } from 'react'
import './SearchBar.scss'
import { tabs } from '../data'
import { DATA } from '../../DATA'



export const SearchBar:FC = () => {
    const [searchJob, setSearchJob] = useState('')
    const [content,setContent] = useState('vac')

    function HandleClick(name:string) {
        setContent(name)
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar__NavBtn">
                <button className={(content === 'vac') ? 'SearchBar__NavBtn-Btn_active' : 'SearchBar__NavBtn-Btn'}
                onClick={() => HandleClick('vac')}
                >Вакансии</button>
                <button className={(content === 'res') ? 'SearchBar__NavBtn-Btn_active' : 'SearchBar__NavBtn-Btn'}
                onClick={() => HandleClick('res')}
                >Резюме</button>
            </div>
            <div className="SearchBar__Search">
                <input 
                className="SearchBar__Search-Input"
                type="text" 
                placeholder="Услуга или специалист"
                onChange={(e) => setSearchJob(e.target.value)}
                />
                <button className="SearchBar__Search-Btn">Найти</button>
                <div className='SearchBar__Search-list'>
                    {DATA.filter((DATA) => {return searchJob.toLowerCase() === '' ? '' : DATA.job_name.toLowerCase().includes(searchJob)}).map(DAT => <span className='SearchBar__Search-item' key={DAT.job_name} {...DAT}>{DAT.job_name}</span>)}
                </div>
            </div>
            {(content === tabs.id1.name) ? (
                <div className='SearchBar__vacancy'>
                    <span className='SearchBar__vacancy-text'>{tabs.id1.vacancy}</span>
                    <span className='SearchBar__vacancy-text'>{tabs.id1.vacancy1}</span>
                    <span className='SearchBar__vacancy-text'>{tabs.id1.vacancy2}</span>
                </div>
            ) : (
                <div className='SearchBar__vacancy'>
                    <span className='SearchBar__vacancy-text'>{tabs.id2.vacancy}</span>
                    <span className='SearchBar__vacancy-text'>{tabs.id2.vacancy1}</span>
                    <span className='SearchBar__vacancy-text'>{tabs.id2.vacancy2}</span>
                </div>
            )
            }
        </div>
    )
}