import '../css/app.css';
import Header from "./Header";
import Search from "./Search";

function App() {
    return (
        <main className="App">
            <header className="App-Header">
                <Header/>
            </header>
            <div className="App-Search">
                <Search/>
            </div>
        </main>
    );
}

export default App;
