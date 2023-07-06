import { useState, ChangeEvent, FormEvent } from "react";
import { Form, FormControl, Button, Col, Row } from "react-bootstrap";

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
    <Row className="justify-content-center mt-4">
      <Col xs={12} sm={8} md={6} lg={4}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="d-flex align-items-center">
            <FormControl
              className="searchInput"
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Sök recept"
              style={{ fontSize: "0.9rem" }}
            />
            <Button
              variant="secondary"
              type="submit"
              disabled={isQueryEmpty}
              onClick={handleSearch}
            >
              Sök!
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
