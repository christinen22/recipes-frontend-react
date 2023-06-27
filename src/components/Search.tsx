import { useState, ChangeEvent, FormEvent } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const isQueryEmpty = query.trim() === "";

  return (
    <Form className="d-flex align-items-center m-4" onSubmit={handleSubmit}>
      <FormControl
        className="searchInput"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Sök recept"
        style={{ fontSize: "0.6rem" }}
      />
      <Button
        variant="secondary"
        type="submit"
        disabled={isQueryEmpty}
        onClick={handleSearch}
      >
        Sök
      </Button>
    </Form>
  );
};

export default Search;
