import React, { Fragment } from 'react';

const posts = [
    { id: 1, title: 'An update', body: "It's been a while since I posted..." },
    { id: 2, title: 'My new blog', body: 'I am starting a new blog!' }
];

class Blog extends React.Component {
    render() {
        return (
            posts.map(post => {
                return <Fragment    >
                    <PostTitle title={post.title} />
                    <PostBody body={post.body} />
                </Fragment>
            })
        )
    }
}
class PostTitle extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}
class PostBody extends React.Component {
    render() {
        return (
            <article>
                <p>{this.props.body}</p>
            </article>
        )
    }
}
export default Blog;