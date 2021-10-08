import React from "react"
import PropTypes from "prop-types"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import DeleteIcon from "@mui/icons-material/Delete"

function Post({ title, id, deletePost }) {
    return (
        <Container maxWidth="sm" className="Post">
            <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                className="Post_delete"
                onClick={() => deletePost(id)}
            >
                Delete
            </Button>
            <div className="Post__title">{title}</div>
            <img
                className="Post__image"
                src={`https://source.unsplash.com/random?sig=${id}`}
                alt="this is my photos"
            />
        </Container>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    deletePost: PropTypes.func.isRequired,
}

export default Post
