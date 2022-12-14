import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
  // capturando dados da URL
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  // Carregamento de dado Individual
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>ID DO PRODUTO {id}</p>
      {error && <p>Ocorreu um Erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          {/* Nested ROUTES */}
          <Link to={`/products/${product.id}/info/`}>Mais Informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
