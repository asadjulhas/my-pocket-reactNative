import { Container, Content, Form, Item, Input } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const AddTransaction = () => {
  return (
    <Container>
      <Content>
      <Form>
          <Item>
            <Input
              placeholder="Expense Title"
            />
          </Item>
        </Form>
      </Content>
    </Container>
  )
}



export default AddTransaction;