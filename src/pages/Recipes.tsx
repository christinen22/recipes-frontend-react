import { useEffect, useState } from "react";
import { IRecipe } from "../types";
import Search from "../components/Search";
import { getRecipes } from "../services/api";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Header from "../components/Header";

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchResults, setSearchResults] = useState<IRecipe[]>([]);
  const [searchDone, setSearchDone] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchRecipes = async (page: number) => {
    //reset state
    setError(null);
    setIsError(false);
    setLoading(true);
    try {
      const res = await getRecipes(query, page);
      console.log(res.data);
      setRecipes(res.data);
      setTotalPages(Math.ceil(res.total / res.per_page));
    } catch (err: any) {
      setError(err.message);
      setIsError(true);
    }
    setLoading(false);
  };

  const fetchSearchResults = async (page: number) => {
    setError(null);
    setIsError(false);
    setLoading(true);

    try {
      const res = await getRecipes(query, page);
      setSearchResults(res.data);
      setTotalPages(Math.ceil(res.total / res.per_page));
    } catch (err: any) {
      setError(err.message);
      setIsError(true);
    }
    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    navigate(`/recipes?page=${page}`);
    if (searchDone) {
      fetchSearchResults(page);
    } else {
      fetchRecipes(page);
    }
  };

  const handleSearch = async (query: string) => {
    setQuery(query);
    setSearchDone(true);
    setError(null);
    setIsError(false);
    setLoading(true);

    try {
      const res = await getRecipes(query, 1);
      setSearchResults(res.data);
      navigate(`/recipes/?page=1&query=${query}`);
      setTotalPages(Math.ceil(res.total / res.per_page));
    } catch (err: any) {
      setError(err.message);
      setIsError(true);
    }

    setLoading(false);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const pageParam = urlParams.get("page");
    const initialPage = pageParam ? Number(pageParam) : 1;
    setCurrentPage(initialPage);

    if (searchDone) {
      fetchSearchResults(initialPage);
    } else {
      fetchRecipes(initialPage);
    }
  }, [location.search]);

  if (isError) {
    return <Error message={error || ""} />;
  }

  return (
    <>
      <Header />
      <Search onSearch={handleSearch} />
      {loading && !(searchDone && searchResults.length > 0) && <Loading />}

      {searchDone ? (
        searchResults.length > 0 ? (
          <div className="recipes">
            <Button className="back-btn" onClick={() => navigate(-1)}>
              Tillbaka
            </Button>
            <h3>Sökresultat</h3>
            <Container fluid>
              <Row
                xs={1}
                sm={2}
                md={3}
                lg={4}
                xl={5}
                className="justify-content-center"
              >
                {searchResults.map((recipe) => (
                  <Col key={recipe.id} className="mb-4">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={`http://188.166.168.10/${recipe.image}`}
                        alt={recipe.title}
                      />
                      <Card.Body>
                        <Card.Title>{recipe.title}</Card.Title>
                        <NavLink
                          to={`/recipes/${recipe.id}`}
                          className="btn btn-primary"
                        >
                          Se recept!
                        </NavLink>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
            <div className="page-info">
              Page {currentPage} of {totalPages}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        ) : (
          <p>Inga sökresultat</p>
        )
      ) : (
        <div className="recipes">
          <Button className="back-btn" onClick={() => navigate(-1)}>
            Tillbaka
          </Button>
          <Container fluid>
            <Row
              xs={1}
              sm={2}
              md={3}
              lg={4}
              xl={5}
              className="justify-content-center"
            >
              {recipes.map((recipe) => (
                <Col key={recipe.id} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`http://188.166.168.10/${recipe.image}`}
                      alt={recipe.title}
                    />
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <NavLink
                        to={`/recipes/${recipe.id}`}
                        className="btn btn-primary"
                      >
                        Se recept!
                      </NavLink>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <div className="page-info">
            Page {currentPage} of {totalPages}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};

export default Recipes;
