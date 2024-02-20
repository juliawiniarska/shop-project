import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Form, FormControl, FormGroup } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/ordersApiSlice';

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  const [searchId, setSearchId] = useState('');
  const [filterPaid, setFilterPaid] = useState('');
  const [filterDelivered, setFilterDelivered] = useState('');

  const filteredOrders = orders?.filter((order) => {
    const matchesId = order._id.toLowerCase().includes(searchId.toLowerCase());
    const matchesPaid = filterPaid === '' ? true : filterPaid === 'paid' ? order.isPaid : !order.isPaid;
    const matchesDelivered = filterDelivered === '' ? true : filterDelivered === 'delivered' ? order.isDelivered : !order.isDelivered;

    return matchesId && matchesPaid && matchesDelivered;
  });

  return (
    <>
      <Row className='align-items-center mb-3'>
        <Col md={4}>
          <Form inline>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Search by order ID..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col md={3}>
          <Form.Select onChange={(e) => setFilterPaid(e.target.value)}>
            <option value=''>All Payment Status</option>
            <option value='paid'>Paid</option>
            <option value='notpaid'>Not Paid</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select onChange={(e) => setFilterDelivered(e.target.value)}>
            <option value=''>All Delivery Status</option>
            <option value='delivered'>Delivered</option>
            <option value='notdelivered'>Not Delivered</option>
          </Form.Select>
        </Col>
      </Row>
      <h1>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATA</th>
              <th>COST</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice} zł</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : <FaTimes style={{ color: 'red' }} />}</td>
                <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : <FaTimes style={{ color: 'red' }} />}</td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>MORE</Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
