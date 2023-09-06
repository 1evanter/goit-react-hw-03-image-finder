export const Searchbar = ({onSubmit}) => {
    return (
        <header>
            <form onSubmit={evt => {
          evt.preventDefault();
          onSubmit(evt.target.elements.query.value);
          evt.target.reset();
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