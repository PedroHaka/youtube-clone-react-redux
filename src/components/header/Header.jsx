import React from 'react'
import './_header.scss';
import '../../App.jsx';
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = ({ handleToggleSidebar/*props*/ }) => {
    return (
        <div className='header'>
            <FaBars className='header__menu' size={26}
                onClick={handleToggleSidebar}
                //onclick event to access props.
                //since props in this case is a function,
                //but passed as a const, we let the onClick
                //event be the called method, while it
                //access the function iside props, and call it.
                //We get an error calling handleToggleSidebar here.
                //Like this: onClick={handleToggleSidebar()}.
            />
            <img
                src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png"
                alt=""
                className="header__logo"
            />

            <form >
                <input type="text" placeholder='Search' />
                <button type='submit'>
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                    alt='avatar'
                />
            </div>

        </div>
    )
}

export default Header
