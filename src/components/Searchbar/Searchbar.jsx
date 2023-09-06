export const Searchbar = ({onSubmit}) => {
    return (
        <header>
            <form onSubmit={event => {
          event.preventDefault();
          onSubmit(event.target.elements.query.value);
          event.target.reset();
        }}>
                <button type="submit">
                    Search
                </button>
  <input
       type="text"
          name="query"
          placeholder="Search images and photos"
          required
    />
            </form>
     </header>
)
}