import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Admin dashboard</h2>
                This is our admin dashbard
                <hr />
                Messages Inbox{' '}
                <Badge badgeContent={4} color='error' fontSize='small'>
                    <MailIcon />
                </Badge>
            </div>
        );
    }
}

export default AdminDashboard;
