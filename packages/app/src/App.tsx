import { CreateNote, Notes, Login, Title } from './components';
import './App.css';
import useAuth from './hooks/useAuth';

function App(): JSX.Element {
  const { auth } = useAuth();

  return (
    <main className="app-container">
      <Title />
      {auth.authenticated ? (
        <>
          <CreateNote />
          <Notes />
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}

export default App;
