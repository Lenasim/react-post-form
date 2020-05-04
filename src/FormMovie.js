import React from 'react'
import './App.css'


class FormMovie extends React.Component {
    state = {
        title: '',
        poster: '',
        comment: '',
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        const url = "https://post-a-form.herokuapp.com/api/movies";
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        fetch(url, config)
            .then(res => res.json())
            .then(res => {

                if (res.error) {
                    alert(res.error);
                } else {
                    alert(` #${res} has been successfully added!`);
                }
            }).catch(e => {
                console.error(e);
                alert('error: ', e);
            });
    }

    render() {
        return (
            <div className="FormEmployee">
                <h1>New Employee</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">
                            <label htmlFor="title">Movie Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Movie poster</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">My comment</label>
                            <input
                                type="textarea"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FormMovie
