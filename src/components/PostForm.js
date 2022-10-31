import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import { TextField, Button, Switch, FormGroup, FormControlLabel } from "@mui/material";
import { createPost } from "../api/index.js";

const createPostForm = ({ token, setPosts }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const history = useHistory()
    
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const post = await createPost(token, title, description, location, price, willDeliver)

        if (post) {
            setPosts((prevPosts) => [...prevPosts, post]);
            setTitle('');
            setDescription('');
            setLocation('');
            setPrice('');
            setWillDeliver(false)
            console.log(willDeliver)
            history.push('/posts')
        } else {
            return;
        }
    }

    return (<>
    <Header />
        <form className="form" onSubmit={onSubmitHandler}>
            <h2 className="account-form-title">Create Post</h2>
            <div className="account-form-field">
                <TextField
                    label="Title"
                    fullWidth
                    variant="outlined"
                    type="text"
                    placeholder="What is the name of the item for sale?"
                    autoComplete="off"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="account-form-field">
                <TextField 
                    label="Description"
                    fullWidth
                    variant="outlined"
                    type="text"
                    placeholder="Describe the item you are posting for sale."
                    autoComplete="off"
                    required
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>
            <div className="account-form-field">
                <TextField 
                    label="Price"
                    fullWidth
                    variant="outlined"
                    type="text"
                    placeholder="What is the price of the item for sale?"
                    autoComplete="off"
                    required
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
            </div>
            <div className="account-form-field">
                <TextField 
                    label="Location"
                    fullWidth
                    variant="outlined"
                    type="text"
                    placeholder="Where is this item located?"
                    autoComplete="off"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
            </div>
            <div className="account-form-field"> 
                <FormGroup>
                    <FormControlLabel 
                        control={
                        <Switch  
                            checked={willDeliver}
                            onChange={(event) => {
                                setWillDeliver(event.target.checked);
                                console.log("willDeliver?", willDeliver)
                            }}
                        />}
                        label="Will Deliver?"
                        labelPlacement="top"
                    />
                </FormGroup>
            </div>
            <Button variant="contained" color="success" type="submit">Create Post</Button>
        </form>
        <Footer />
    </>)
};

export default createPostForm;