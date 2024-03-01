import { FiSearch } from 'react-icons/fi'
import toast from 'react-hot-toast'
import css from './SearchBar.module.css'

export default function SearchBar({ onSubmit }) {
    function handleSubmit(evt) {
        evt.preventDefault();
        const value = evt.target.elements.search.value.trim();
        if (!value) {
            toast.error('Please enter a valid search query!');
            return;
        }
        onSubmit(value);
    }

    return (
        <header className={css.container}>
        <form className={css.form} onSubmit={handleSubmit}>
            <input
            className={css.input}
            type="text"
            name='search'        
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
        />
            <button className={css.button} type="submit">
            <FiSearch size='8px' />
        </button>
        </form>
        </header>
)

}