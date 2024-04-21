import React from "react";

import "./Sidebar.css"
import Divider from "./Divider";
import Button from "../utils/Button";
import {FiSidebar} from "react-icons/fi";
import Row from "../utils/Row";

const Sidebar = ({isOpen, onCloseClick, currentPage, setCurrentPage}) => {
    const onAccountClick = () => {
        alert('Эта функция пока в разработке')
    };

    const onCreateWatchListClick = () => {
        alert('Эта функция пока в разработке');
    }

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <Row content={(
                <React.Fragment>
                    <Button
                        onClick={() => setCurrentPage('home')}
                        background={'#1f3059'}
                        padding={'15px'}
                        margin={'10px 10px 10px 0'}
                        content={
                            <text className='aml-text'>Home</text>
                        }
                        contentColor={'rgba(247,247,248,0.91)'}
                        borderColor={'black'}
                        width={'100%'}
                    ></Button>

                    <Button
                        onClick={onCloseClick}
                        background={'#1f3059'}
                        padding={'7px'}
                        margin={'10px 0 10px 10px'}
                        content={
                            <FiSidebar size={42}/>
                        }
                        contentColor={'rgba(247,247,248,0.91)'}
                        borderColor={'black'}
                    ></Button>
                </React.Fragment>
            )}></Row>

            <Divider/>

            <Row content={
                <Button
                    onClick={onAccountClick}
                    background={'#1f3059'}
                    padding={'20px'}
                    margin={'10px 0 0 0'}
                    content={
                        <text className='account-text'>Log in</text>
                    }
                    contentColor={'rgba(247,247,248,0.91)'}
                    borderColor={'black'}
                    width={'100%'}
                ></Button>
            }></Row>

            <Row content={
                <Button
                    onClick={onCreateWatchListClick}
                    background={'#478ac9'}
                    padding={'20px'}
                    margin={'0 0 10px 0'}
                    content={
                        <text className='create-watchlist-text'>Create watchlist</text>
                    }
                    contentColor={'rgba(247,247,248,0.91)'}
                    borderColor={'black'}
                    width={'100%'}
                ></Button>
            }></Row>

            <Divider/>

            <Row content={
                <text className='my-lists-text'>My lists</text>
            }></Row>

            <Row content={
                <Button
                    onClick={() => setCurrentPage('favorite')}
                    background={'#1f3059'}
                    padding={'20px'}
                    margin={'0'}
                    content={
                        <text className='favorite-text'>Favorite</text>
                    }
                    contentColor={'rgba(247,247,248,0.91)'}
                    borderColor={'black'}
                    width={'100%'}
                ></Button>
            }></Row>
        </div>
    );
};

export default Sidebar;