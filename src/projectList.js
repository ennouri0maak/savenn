import React from "react";
import MoviesCard from "./projectCard";
import StarsRating from "./filterimporatance";

const movies = [
  {
    name: "Animal shelter",
    image:
      "https://i.imgur.com/ueyalRC.png",
    year: "450.50$",
    rating: 4
  },
  {
    name: "Give water, save life",
    image:
      "https://i.pinimg.com/236x/39/42/45/3942452db7dac5660cc606a5bcf49c4b.jpg",
    year: "48.882 $",
    rating: 5
  },
  {
    name: "CANCER: Help Nare to fight!",
    image:
      "https://i.imgur.com/j9KfkxR.png",
    year: "132 000 $",
    rating: 5
  },
  {
    name: "There's No Zoo Without You!    ",
    image:
      "https://i.imgur.com/NZ9UVXY.png",
    year: "25 000 $",
    rating: 2
  }
];

const filterMovies = (movies, searchMovie, searchRating) => {
  return movies.filter(
    el =>
      el.name.toUpperCase().indexOf(searchMovie.toUpperCase().trim()) !== -1 &&
      el.rating >= searchRating
  );
};

const filmIsValid = (movies, event) => {
  let err = [];
  let field = event.target;

  if (field.name.value.trim() === "")
    err.push("Please provide the project's name");

  if (field.image.value.trim() === "")
    err.push("Please provide a valid URI image");

  if (field.year.value.trim() < 25) err.push("Please provide a valid money");

  if (field.rating.value.trim() < 0 || field.rating.value.trim() > 5)
    err.push("Please provide a valid rating");

  if (
    movies.some(
      el => el.name.toUpperCase() === field.name.value.toUpperCase().trim()
    )
  )
    err.push("Movie exist");

  return err;
};

export default class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      searchMovie: "",
      searchRating: 0,
      error: []
    };
  }

  search = e => {
    this.setState({
      searchMovie: e.target.value
    });
  };

  addMovies = e => {
    e.preventDefault();
    if (filmIsValid(this.state.movies, e).length > 0) {
      this.setState({
        error: filmIsValid(this.state.movies, e)
      });
      return false;
    }

    this.setState({
      movies: [
        ...this.state.movies,
        {
          name: e.target.name.value,
          image: e.target.image.value,
          year: e.target.year.value,
          rating: e.target.rating.value
        }
      ],
      error: []
    });

    e.target.name.value = "";
    e.target.image.value = "";
    e.target.year.value = "";
    e.target.rating.value = "";
  };

  render() {
    return (
      <div className="movies-content container">
        <div className="search-content">
          <input
            className="input-search"
            type="text"
            placeholder="Type project name to search"
            onChange={this.search}
          />

          <div className="search-rating">
            <small>filter by importance</small>
            <div className="stars-rating">
              <StarsRating
                getRating={rating => {
                  this.setState({
                    searchRating: rating
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-12 d-flex justify-content-start movie-btn btn">
            <div data-toggle="modal" data-target="#exampleModal">
              <i className="fas fa-plus" /> <span>Add New project</span>
            </div>
          </div>
        </div>

        <div className="movies-list row">
          <MoviesCard
            movies={filterMovies(
              this.state.movies,
              this.state.searchMovie,
              this.state.searchRating
            )}
          />
        </div>
        <div className="modal fade" id="exampleModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add new project
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.state.error.length > 0 && (
                  <ul className="error-form">
                    {this.state.error.map(el => {
                      return <li>{el}</li>;
                    })}
                  </ul>
                )}
                <form onSubmit={this.addMovies}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter project name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                      type="url"
                      className="form-control"
                      id="image"
                      placeholder="Enter Image URI"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="year">cost $</label>
                    <input
                      type="text"
                      className="form-control"
                      id="year"
                      min="25"
                      placeholder="Enter how much do you need for this project"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rating">importance by stars</label>
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      max="5"
                      id="rating"
                      placeholder="0"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
