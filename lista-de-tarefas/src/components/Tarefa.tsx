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

    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
        <div className="w-full h-full">
            <form onSubmit={submitForm}>
                <div className="bg-slate-400 w-64 p-4 flex items-center flex-col m-auto rounded-lg font-sans text-zinc-950 border-4">
                    <h2 className=' font-bold'>Lista de tarefa</h2>
                    <label htmlFor='tarefa' className='mr-auto ml-6 p-3 pb-0'>Tarefa</label>
                    <input type='text' id='tarefa' name='tarefa' value={data.tarefa} onChange={inputChange} 
                    className='rounded-lg mt-2 p-1 pl-2 font text-base text-pink-700' /><br />
                    <label htmlFor="status" className='mr-auto ml-6 p-3 pb-0'>Status</label>
                    <select className='rounded-lg mt-2 p-1 pl-2 font text-base w-48' id="status" name="status" value={data.status} onChange={selectChange}>
                        <option className='text-red-600' value="Pendente">Pendente</option>
                        <option className= 'text-emerald-500'value="Concluído">Concluído</option>
                    </select>
                    <br /><button type='submit'>Adicionar</button>
                </div>
                <div>
                    {tarefas.map((t, index) => (
                        <div key={index} className='w-64 h-auto bg-emerald-900 flex items-center rounded-lg font-sans text-white flex-col mt-4 gap-3 p-3 border-4 border-yellow-500'>
                            <h3 className='font-bold text-yellow-500'>{t.tarefa}</h3>
                            <h4>{t.status}</h4>
                            <select name="status" id="status" value={t.status} onChange={(e) => changeStatus(index, e.target.value)}  className='rounded-lg mt-2 p-1 pl-2 font text-base w-48 text-zinc-950'>Status
                                <option value="Pendente" >Pendente</option>
                                <option value="Concluído">Concluído</option>
                            </select>
                            <button className='bg-red-500 text-white' onClick={() => deleteTask(index)}>Deletar</button>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default Formulario