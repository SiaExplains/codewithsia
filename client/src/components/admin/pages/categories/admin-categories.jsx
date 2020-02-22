import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    FormGroup,
    Label,
    Button,
    Input,
    Col,
    Row,
    Table,
    Container
} from 'reactstrap';
import './admin-categories.css';
import JoditEditor from 'jodit-react';
import {
    getAllCategories,
    deleteCategory,
    addCategory,
    updateCategory,
    getCategory
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
            isEditMode: false
        };
    }

    componentDidMount() {
        this.fetchCategories();
    }
    handleEdit(category) {
        this.setState({
            id: category.Id,
            isEditMode: true,
            name: category.Name
        });
    }

    handleDelete(id) {
        let confirmation = window.confirm('Are sure to delete this category?');
        if (confirmation) {
            deleteCategory(id)
                .then(result => {
                    toast.success('Category has been deleted.');
                    this.fetchCategories();
                })
                .catch(err => {
                    console.log(`Error while fetching: ${err}`);
                });
        }
    }

    fetchCategories = () => {
        getAllCategories()
            .then(result => {
                this.setState({
                    categories: result.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleCancel = () => {
        this.setState({
            isEditMode: false,
            name: '',
            id: null
        });
    };

    handleSave = () => {
        const { id, name, isEditMode } = this.state;

        if (isEditMode) {
            updateCategory({
                Id: id,
                Name: name
            })
                .then(result => {
                    this.setState({
                        id: null,
                        name: ''
                    });
                    this.fetchCategories();
                    toast.success('Category has been updated.');
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            addCategory({
                Name: name
            })
                .then(result => {
                    this.setState({
                        name: ''
                    });
                    this.fetchCategories();
                    toast.success('New Category has been saved.');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    render() {
        let { categories, name } = this.state;
        return (
            <Container className='p-3'>
                <Row>
                    <Col>
                        Category Management &nbsp;&nbsp;&nbsp;
                        <Link to='/admin' className='btn-warning btn btn-sm'>
                            &lt; Return
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <FormGroup style={{ width: '100%' }}>
                        <Label>Name: </Label>
                        <Input
                            value={name}
                            onChange={this.handleInput}
                            name='name'
                        ></Input>
                    </FormGroup>
                </Row>
                <Row>
                    <Col>
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
                    </Col>
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(cat => {
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
                    </Table>
                </Row>
            </Container>
        );
    }
}

export default AdminCategories;
