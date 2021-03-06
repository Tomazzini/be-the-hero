import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import { FiArrowDownLeft } from 'react-icons/fi';

import api from '../services/api';
import LogoImg from '../../assets/logo.svg'; 
import './style.css';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        } catch (error) {
            alert('erro ao cadastrar caso, tente novamente');
        }
    }

    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva detalhadamente o caso para um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <Link size={16} color="#E02041" />    
                        Voltar para home
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}