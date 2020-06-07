import React, { Component } from 'react';
import './file-manager.css';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    Card,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    CardBody
} from 'reactstrap';
import Upload from './upload/upload';
import {
    fetchAllItems,
    createDirectory
} from '../../../../services/file-manager';
import FdItem from './fd-item/fd-item';
import { toast } from 'react-toastify';
class FileManagerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentPath: ''
        };
    }

    componentDidMount() {
        this.fetchItems();
    }

    createDirectory = () => {
        let dirName = window.prompt('Enter the name of directory:');
        if (dirName === '') {
            return;
        }

        createDirectory({
            path: this.state.currentPath,
            dir: dirName
        })
            .then(result => {
                this.fetchItems(this.state.currentPath);
                toast.success('Directory has been created.');
            })
            .catch(err => {
                console.log(err);
            });
    };

    fetchItems = async (path = 'servable') => {
        this.setState({
            currentPath: path
        });
        const { data } = await fetchAllItems(path);
        this.setState({
            items: data.items
        });
    };
    itemClick = item => {
        if (item.type === 'dir') {
            this.fetchItems(this.state.currentPath + '|' + item.name);
        }
    };

    loadBreadCrumber = () => {
        let { currentPath } = this.state;
        let proccessedPath = currentPath.split('|').map((p, index) => {
            let pathToHere = this.extractPath(index);
            return { itemName: p, path: pathToHere };
        });

        return (
            <Breadcrumb>
                {proccessedPath.map((p, index) => {
                    return (
                        <BreadcrumbItem
                            key={index}
                            active={proccessedPath.length !== index}
                        >
                            <a
                                href='/#'
                                onClick={e => {
                                    e.preventDefault();
                                    this.fetchItems(p.path);
                                }}
                            >
                                {p.itemName}
                            </a>
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb>
        );
    };

    extractPath = index => {
        let { currentPath } = this.state;

        let pathItems = currentPath.split('|');
        let path = '';
        for (let i = 0; i < pathItems.length; i++) {
            path += pathItems[i] + '|';
            if (index === i) {
                break;
            }
        }
        path = path.substr(0, path.length - 1);
        return path;
    };

    onItemSelectedChange = (item, status) => {
        let items = [...this.state.items];
        let selectedIndex = items.findIndex(fd => fd.name === item.name);
        items[selectedIndex].select = status;
        items[selectedIndex].isChecked = status;
        this.setState({
            items
        });
    };

    deleteItems = () => {
        let selectedItems = this.state.items.filter(i => i.isChecked === true);
        console.log(selectedItems);
    };

    render() {
        const { items } = this.state;
        return (
            <Container fluid>
                <Row className='mb-2'>
                    <Col>
                        {this.loadBreadCrumber()}
                        <Button
                            color='success'
                            className='btn-sm  btn btn-sm'
                            onClick={this.createDirectory}
                        >
                            Create Directory
                        </Button>
                        &nbsp;
                        <Button
                            color='danger'
                            className='btn-sm  btn btn-sm'
                            onClick={this.deleteItems}
                        >
                            Deleted Selected
                        </Button>
                        &nbsp;&nbsp;
                        <Link to='/admin' className='btn-warning btn btn-sm'>
                            &lt; Return
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-md-7'>
                        <Card>
                            <CardBody>
                                {items != null &&
                                    items.map((item, index) => {
                                        return (
                                            <FdItem
                                                key={index}
                                                onItemClick={this.itemClick}
                                                onItemSelectedChange={
                                                    this.onItemSelectedChange
                                                }
                                                data={item}
                                            />
                                        );
                                    })}
                                <div style={{ clear: 'both' }}></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-md-5'>
                        <Card>
                            <CardBody>
                                <Upload
                                    afterUpload={() =>
                                        this.fetchItems(this.state.currentPath)
                                    }
                                    currentPath={this.state.currentPath}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FileManagerComponent;
