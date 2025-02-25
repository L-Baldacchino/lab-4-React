import List from './components/List';
import './App.css';

const tasks = [
    {description: 'Learn React!!!', completed: true},
    {description: 'Learn JSX', completed: true},
    {description: 'Build a React App!', completed: true},
];

function App() {
    return (
        <div className='page'>     
            <List heading='My Tasks' tasks={tasks}/>
        </div>
    );
}

export default App;
