interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div>
      {currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>
          Föregående
        </button>
      )}

      {currentPage < totalPages && (
        <button onClick={() => handlePageChange(currentPage + 1)}>Nästa</button>
      )}
    </div>
  );
};

export default Pagination;
