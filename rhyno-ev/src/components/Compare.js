import React from 'react';
import styled from 'styled-components';

const Compare = () => {
  return (
    <CompareContainer>
      <h1>Compare All Models</h1>
      <ComparisonTable>
        <thead>
          <tr>
            <th>Feature</th>
            <th>SE03 Lite</th>
            <th>SE03</th>
            <th>SE03 Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Battery</td>
            <td>1.8Kwh</td>
            <td>2.7Kwh</td>
            <td>2.7Kwh</td>
          </tr>
          <tr>
            <td>Max Speed</td>
            <td>55 km/h</td>
            <td>55 km/h</td>
            <td>65 km/h</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </ComparisonTable>
      <BuyNowButton>Buy Now</BuyNowButton>
    </CompareContainer>
  );
};

const CompareContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ComparisonTable = styled.table`
  width: 100%;
  margin: 2rem 0;
  border-collapse: collapse;
  thead {
    background-color: #3c3c3c;
    color: white;
    th {
      padding: 1rem;
    }
  }
  tbody {
    td {
      padding: 1rem;
      border: 1px solid #ddd;
    }
  }
`;

const BuyNowButton = styled.button`
  padding: 1rem 2rem;
  background-color: #f9ed32;
  color: black;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #fff225;
  }
`;

export default Compare;
