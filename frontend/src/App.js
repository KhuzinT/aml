import React, {useState} from 'react';

import './App.css';
import Sidebar from "./ui/sidebar/Sidebar";
import Surface from "./ui/utils/Surface";
import Home from "./ui/home/Home";
import Favorite from "./ui/favorite/Favorite";

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    const onSidebarOpen = () => {
        setSidebarOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const onSidebarClose = () => {
        setSidebarOpen(false);
        document.body.style.overflow = 'auto';
    }

    let content;
    switch (currentPage) {
        case 'home':
            content = <Home isSidebarOpen={isSidebarOpen} onSidebarOpen={onSidebarOpen}></Home>;
            break;
        case 'favorite':
            content = <Favorite isSidebarOpen={isSidebarOpen} onSidebarOpen={onSidebarOpen}></Favorite>;
            break;
        case 'account':
            content = <></>;
            break;
        default:
            content = <></>;
            break;
    }

    return (
        <div className='App'>
            {isSidebarOpen &&
                <Sidebar
                    isOpen={isSidebarOpen}
                    onCloseClick={onSidebarClose}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></Sidebar>
            }

            {/*Surface нужен чтобы когда Sidebar открыт,
               остальная страница правильно реагировала на нажатия*/}
            <Surface
                isOpen={isSidebarOpen}
                onClick={onSidebarClose}
            ></Surface>

            {content}
        </div>
    );
}

export default App;