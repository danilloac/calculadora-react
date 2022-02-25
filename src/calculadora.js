import React from 'react';
import './calculadora.css';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import CalculadoraService from './calculadora.service';

function Calculadora() {

  const [calcular, concatenaNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

  const [txtNumeros, setTxtNumeros] = React.useState('0');
  const [numero1, setNumero1] = React.useState('0');
  const [numero2, setNumero2] = React.useState(null);
  const [operacao, setOperacao] = React.useState(null);

  function addNumero(numero){
    let resultado;
    if (operacao === null) {
      resultado = concatenaNumero(numero1, numero);
      setNumero1(resultado);
    } else {
      resultado = concatenaNumero (numero2, numero);
      setNumero2(resultado);
    }
    setTxtNumeros(resultado);
  }

  function defineOpe(op){
    if (operacao === null) {
      setOperacao(op);
      return;
    }
    if (numero2 !== null) {
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }

  function acaoCalcular () {
    if(numero2 === null){
      return;
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
    setTxtNumeros(resultado);
  }

  function limpar(){
    setTxtNumeros('0');
    setNumero1('0');
    setNumero2(null);
    setOperacao(null);
  }
  return (
    <Card style={{
      background: 'transparent !mportant',
      backgroundColor: '#696969',
      padding: '5px',
      margin:'5px',
      width:'400px'
      }}>
        <Container>
          <Row>
            <Col xs="3">
              <Button variant="danger" onClick={limpar}>C</Button>
            </Col>
            <Col xs="9">
              <Form.Control type="text" name="txtNumeros" className="text-right" readOnly="readonly" value={txtNumeros} />
            </Col>
          </Row>
          <Row>
            <Col>
            <Button variant="light" onClick={()=> addNumero('7')}>7</Button>
            </Col>
            <Col>
            <Button variant="light" onClick={()=> addNumero('8')}>8</Button>
            </Col>
            <Col>
            <Button variant="light" onClick={()=> addNumero('9')}>9</Button>
            </Col>
            <Col>
            <Button variant="warning" onClick={()=> defineOpe(DIVISAO)}>/</Button>
            </Col>
          </Row>
          <Row>
            <Col>
            <Button variant="light" onClick={()=> addNumero('4')}>4</Button>
            </Col>
            <Col>
            <Button variant="light" onClick={()=> addNumero('5')}>5</Button>
            </Col>
            <Col>
            <Button variant="light" onClick={()=> addNumero('6')}>6</Button>
            </Col>
            <Col>
            <Button variant="warning" onClick={()=> defineOpe(MULTIPLICACAO)}>*</Button>
            </Col>
          </Row>

          <Row>
            <Col>
            <Button variant="light" onClick={()=> addNumero('1')}>1</Button>
            </Col>
            <Col>
            <Button variant="light" onClick={()=> addNumero('2')}>2</Button>
            </Col>
            <Col>
            <Button variant="light" onClick={()=> addNumero('3')}>3</Button>
            </Col>
            <Col>
            <Button variant="warning" onClick={()=> defineOpe(SUBTRACAO)}>-</Button>
            </Col>
          </Row>
          <Row>
            <Col>
            <Button variant="light"onClick={()=> addNumero('0')}>0</Button>
            </Col>
            <Col>
            <Button variant="light" onClick={()=> addNumero('.')}>.</Button>
            </Col>
            <Col>
            <Button variant="success" onClick={acaoCalcular}>=</Button>
            </Col>
            <Col>
            <Button variant="warning" onClick={()=> defineOpe(SOMA)}>+</Button>
            </Col>
          </Row>
        </Container>

    </Card>
  )
}

export default Calculadora;
