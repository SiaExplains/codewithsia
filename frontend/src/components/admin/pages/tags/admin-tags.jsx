import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Snackbar, TextField, Button } from '@material-ui/core';
import './admin-tags.css';
import JoditEditor from 'jodit-react';
import {
    getAllTags,
    deleteTag,
    addTag,
    updateTag,
    getTag,
} from '../../../../services/tags';

import { toast } from 'react-toastify';

require('../../../../tools/string-tools');

class AdminTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            id: null,
            name: '',
            isEditMode: false,
        };
    }

    componentDidMount() {
        this.fetchTags();
    }
    handleEdit(tag) {
        this.setState({
            id: tag.Id,
            isEditMode: true,
            name: tag.Name,
        });
    }

    handleDelete(id) {
        let confirmation = window.confirm('Are sure to delete this tag?');
        if (confirmation) {
            deleteTag(id)
                .then((result) => {
                    toast.success('Tag has been deleted.');
                    this.fetchTags();
                })
                .catch((err) => {
                    console.log(`Error while fetching: ${err}`);
                });
        }
    }

    fetchTags = () => {
        getAllTags()
            .then((result) => {
                this.setState({
                    tags: result.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleCancel = () => {
        this.setState({
            isEditMode: false,
            name: '',
            id: null,
        });
    };

    handleSave = () => {
        const { id, name, isEditMode } = this.state;

        if (isEditMode) {
            updateTag({
                Id: id,
                Name: name,
            })
                .then((result) => {
                    this.setState({
                        id: null,
                        name: '',
                    });
                    this.fetchTags();
                    toast.success('Tag has been updated.');
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            addTag({
                Name: name,
            })
                .then((result) => {
                    this.setState({
                        name: '',
                    });
                    this.fetchTags();
                    toast.success('New Tag has been saved.');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    render() {
        let { tags, name } = this.state;
        return (
            <div className='p-3'>
                <div>
                    <div>
                        Tag Management &nbsp;&nbsp;&nbsp;
                        <Link to='/admin' className='btn-warning btn btn-sm'>
                            &lt; Return
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <hr />
                    </div>
                </div>
                <div>
                    <div style={{ width: '100%' }}>
                        <div>Name: </div>
                        <TextField
                            value={name}
                            onChange={this.handleInput}
                            name='name'
                        ></TextField>
                    </div>
                </div>
                <div>
                    <div>
                        <Button color='success' onClick={this.handleSave}>
                            {this.state.isEditMode ? 'Update Tag' : 'Add New'}
                        </Button>
                        &nbsp;&nbsp;
                        {this.state.isEditMode && (
                            <Button color='info' onClick={this.handleCancel}>
                                Cancel update
                            </Button>
                        )}
                    </div>
                </div>
                <div>
                    <hr />
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tags.map((t) => {
                                return (
                                    <tr key={t.Id}>
                                        <th scope='row'>{t.Id}</th>
                                        <td>{t.Name}</td>
                                        <td>
                                            <Button
                                                color='warning'
                                                onClick={() =>
                                                    this.handleEdit(t)
                                                }
                                            >
                                                Edit
                                            </Button>
                                            &nbsp;
                                            <Button
                                                color='danger'
                                                onClick={() =>
                                                    this.handleDelete(t.Id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminTag;
