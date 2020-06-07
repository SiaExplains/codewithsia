import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Snackbar, TextField, Button } from '@material-ui/core';
import './admin-categories.css';
import JoditEditor from 'jodit-react';
import {
    getAllCategories,
    deleteCategory,
    addCategory,
    updateCategory,
    getCategory,
} from '../../../../services/categories';

import { toast } from 'react-toastify';

require('../../../../tools/string-tools');

class AdminCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            id: null,
            name: '',
            isEditMode: false,
        };
    }

    componentDidMount() {
        this.fetchCategories();
    }
    handleEdit(category) {
        this.setState({
            id: category.Id,
            isEditMode: true,
            name: category.Name,
        });
    }

    handleDelete(id) {
        let confirmation = window.confirm('Are sure to delete this category?');
        if (confirmation) {
            deleteCategory(id)
                .then((result) => {
                    toast.success('Category has been deleted.');
                    this.fetchCategories();
                })
                .catch((err) => {
                    console.log(`Error while fetching: ${err}`);
                });
        }
    }

    fetchCategories = () => {
        getAllCategories()
            .then((result) => {
                this.setState({
                    categories: result.data,
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
            updateCategory({
                Id: id,
                Name: name,
            })
                .then((result) => {
                    this.setState({
                        id: null,
                        name: '',
                    });
                    this.fetchCategories();
                    toast.success('Category has been updated.');
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            addCategory({
                Name: name,
            })
                .then((result) => {
                    this.setState({
                        name: '',
                    });
                    this.fetchCategories();
                    toast.success('New Category has been saved.');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    render() {
        let { categories, name } = this.state;
        return (
            <div className='p-3'>
                <div>
                    <div>
                        Category Management &nbsp;&nbsp;&nbsp;
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
                            {this.state.isEditMode
                                ? 'Update Category'
                                : 'Add New'}
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
                            {categories.map((cat) => {
                                return (
                                    <tr key={cat.Id}>
                                        <th scope='row'>{cat.Id}</th>
                                        <td>{cat.Name}</td>
                                        <td>
                                            <Button
                                                color='warning'
                                                onClick={() =>
                                                    this.handleEdit(cat)
                                                }
                                            >
                                                Edit
                                            </Button>
                                            &nbsp;
                                            <Button
                                                color='danger'
                                                onClick={() =>
                                                    this.handleDelete(cat.Id)
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

export default AdminCategories;
