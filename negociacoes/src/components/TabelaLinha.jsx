import PropTypes from "prop-types";

function emReais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const TabelaLinha = ({ negociacao }) => {
  const { data, valor, quantidade } = negociacao;
  return (
    <tr>
      <td>{data}</td>
      <td>{quantidade}</td>
      <td>{emReais(valor)}</td>
      <td>{emReais(Number(valor) * Number(quantidade))}</td>
    </tr>
  );
};

TabelaLinha.propTypes = {
  negociacao: PropTypes.shape({
    data: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
    quantidade: PropTypes.number.isRequired,
  }).isRequired,
};