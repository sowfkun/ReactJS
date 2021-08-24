import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from 'reactstrap';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get('https://oe9fk.sse.codesandbox.io/products').then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map((product) => {
            return (
              <Col sm='6' md='4' lg='3' key={product.id}>
                <Card>
                  <CardImg top width='100%' src={product.imgUrl} />
                  <CardBody>
                    <CardTitle tag='h5'>{product.productName}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <Button>Add to cart</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Product;
