import React, {useState} from 'react';
import {FiSidebar} from "react-icons/fi";

import Button from "../utils/Button";
import Row from "../utils/Row";
import "./Header.css"

const Header = ({isSidebarOpen, onSidebarOpenClick}) => {
    const [searchInput, setSearchInput] = useState('');

    const onSearchClick = () => {
        setSearchInput('');
        alert("Эта функция пока в разработке")
    };

    const content = (
        <React.Fragment>
            {!isSidebarOpen && (
                <Button
                    onClick={onSidebarOpenClick}
                    background={'transparent'}
                    padding={'7px'}
                    content={<FiSidebar size={42}/>}
                    contentColor={'rgba(247,247,248,0.91)'}
                    borderColor={'black'}
                ></Button>
            )}

            <input
                className="search-input"
                type="text"
                placeholder="Movie search"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
            />

            <Button
                onClick={onSearchClick}
                background={'#4789c8'}
                padding={'20px'}
                content={
                    <div style={{color: 'white', fontSize: '20px', fontWeight: '500'}}>
                        SEARCH
                    </div>
                }
            ></Button>
        </React.Fragment>
    );

    return (
        <Row content={content}></Row>
    );
};

export default Header;