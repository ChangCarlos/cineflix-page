import styled from "styled-components";

export const FilterWrapper = styled.div`
  padding: 10px 20px;
  overflow-x: auto;
`;

export const GenreScrollArea = styled.div`
  display: flex;
  gap: 10px;
  max-width: 1480px;
  margin: 0 auto;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 5px;

  /* Scroll horizontal com mouse */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8ec649;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #2f2f2f;
  }

  /* Scroll com roda do mouse horizontal */
  &:hover {
    scroll-snap-type: x mandatory;
  }
`;

export const GenreButton = styled.button`
  padding: 6px 14px;
  background-color: ${({ active }) => (active ? "#8ec649" : "#444")};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: ${({ active }) => (active ? "#7ab236" : "#5a5a5a")};
  }
`;
