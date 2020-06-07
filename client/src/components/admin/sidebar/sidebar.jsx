import React, { Component } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NotesIcon from '@material-ui/icons/Notes';
import CardMembershipSharpIcon from '@material-ui/icons/CardMembershipSharp';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';
import FolderOpenSharpIcon from '@material-ui/icons/FolderOpenSharp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Dns from '@material-ui/icons/Dns';

class SideBarComponent extends Component {
    constructor(props) {
        super(props);
    }
    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.reload(true);
    };

    render() {
        return (
            <Paper color='primary'>
                <MenuList color='primary'>
                    <MenuItem color='primary'>
                        <DashboardIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin'>Dashboard</Link>
                    </MenuItem>
                    <MenuItem>
                        <LibraryBooksIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/articles'>Articles</Link>
                    </MenuItem>
                    <MenuItem>
                        <Dns fontSize='small' />
                        &nbsp;
                        <Link to='/admin/categories'>Categories</Link>
                    </MenuItem>
                    <MenuItem>
                        <LocalOfferIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/tags'>Tags</Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <NotesIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/pages'>Pages</Link>
                    </MenuItem>

                    <MenuItem>
                        <WorkSharpIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/projects'>Projects</Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <DraftsIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/messages'>Messages</Link>
                    </MenuItem>
                    <MenuItem>
                        <FolderOpenSharpIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/file-manager'>File Manager</Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <SupervisorAccountIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/users'>Users</Link>
                    </MenuItem>
                    <MenuItem>
                        <VerifiedUserIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/roles'>Roles</Link>
                    </MenuItem>
                    <MenuItem>
                        <LockOpenIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/permissions'>Permissions</Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <VpnKeyIcon fontSize='small' />
                        &nbsp;
                        <Link to='/admin/change-password'>Change Password</Link>
                    </MenuItem>
                    <MenuItem>
                        <MeetingRoomIcon fontSize='small' />
                        &nbsp;
                        <a href='#' onClick={this.handleLogout}>
                            Logout
                        </a>
                    </MenuItem>
                </MenuList>
            </Paper>
        );
    }
}

export default SideBarComponent;
