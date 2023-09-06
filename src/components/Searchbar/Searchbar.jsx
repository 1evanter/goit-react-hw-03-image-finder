import { Header, SearchButton, Form, Input, ButtonLabel } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
    return (
        <Header>
            <Form onSubmit={evt => {
          evt.preventDefault();
          onSubmit(evt.target.elements.query.value);
          evt.target.reset();
        }}>
                <SearchButton type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                </SearchButton>
  <Input
       type="text"
          name="query"
          placeholder="Search images and photos"
          required
    />
            </Form>
     </Header>
)
}