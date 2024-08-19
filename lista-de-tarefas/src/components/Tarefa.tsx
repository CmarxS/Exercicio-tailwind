import './comp.css';
import { useState } from 'react';

interface MinhaTarefa {
    tarefa: string;
    status: string;
}	

const Formulario = () => {
    const [data, setTarefa] = useState<MinhaTarefa>({
        tarefa: '',
        status: 'Pendente'
    });
    const [tarefas, setTarefas] = useState<MinhaTarefa[]>([]);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTarefa({
            ...data,
            [name]: value
        })
    }
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data.tarefa && data.status) {
            setTarefas([...tarefas, data]);
            setTarefa({ tarefa: '', status: 'Pendente' }); 
        }
    };
    const changeStatus = (index: number, newStatus: string) => {
        const newTarefas = [...tarefas];
        newTarefas[index].status = newStatus;
        setTarefas(newTarefas);
    };
    const deleteTask = (index: number) => {
        const newTarefas = tarefas.filter((_, i) => i !== index);
        setTarefas(newTarefas);
    };
    return (
    <form onSubmit={submitForm}>
        <div className="form-design">
        <h2>Lista de tarefa</h2>
        <label htmlFor='tarefa'>Tarefa</label>
        <input type='text' id='tarefa' name='tarefa' value={data.tarefa} onChange={inputChange} /><br />
        <label htmlFor="status">Status</label><br />
            <select id="status" name="status" value={data.status} onChange={inputChange}>
                <option value="Pendente">Pendente</option>
                <option value="Concluído">Concluído</option>
            </select>
        <br /><button type='submit'>Adicionar</button>
        </div>
        <div>
                {tarefas.map((t, index) => (
                    <div key={index} className='card'>
                        <h3>{t.tarefa}</h3>
                        <h4>{t.status}</h4>
                        <select name="status" id="status" value={t.status} onChange={(e) => changeStatus(index, e.target.value)}>Status
                            <option value="Pendente">Pendente</option>
                            <option value="Concluído">Concluído</option>
                        </select>
                        <button className='del' onClick={() => deleteTask(index)}>Deletar</button>
                    </div>
                ))}
            </div>
    </form>
    )
}

export default Formulario