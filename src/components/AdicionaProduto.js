import React from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styled from "styled-components"
 

const ConteudoPrincipal = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;

    `
const CabecalhoPerfil = styled.div`
    width:100vw;
    background-color:orange;
    height:15vh;
    display:flex;
    align-items:center;


`

const CardProfile = styled.div`
    display:flex;
    align-items:center;
    padding:10px 0 10px 15vw;

`

const CardImageProfile = styled.div`    
    
`

const ImageProfile = styled.img`
    border-radius:50%;

`

const TextProfile = styled.div`
    display:flex;
    flex-direction: column;    
    margin-left: 10px;
`
const TextProfileh2 = styled.h2`
    margin: 0;
    padding: 0;
    color: white;
`
const TextProfileP = styled.p`
    color: wheat;
    margin: 0;
    padding: 0;

`

/* Estilo Formulario */
const ConteinerForm = styled.div`
    height: 85vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    
`

const formularioInputs = styled.div`
    width:600px;
`

const ContainerInputName = styled.div`
    width: 400px;
`

 
const InputName = styled(TextField)`
    width: 400px;
`


const ContainerInputCategoria = styled.div`
    width: 400px;

`
const InputCategoria = styled(TextField)`
    width: 400px;
`

const ContainerInputPagamento = styled.div`
    width: 400px;

`
const InputPagamento = styled(TextField)`
    width: 400px;
`

const ContainerInputParcelas = styled.div`
    width: 400px;
`
const InputParcelas = styled(TextField)`
    width: 400px;
`



const ContainerInputPreco = styled.div`
    width: 400px;
`

const InputPreco = styled(TextField)`
    width: 400px;
`


const ContainerTextArea = styled.div`
    width: 400px;

`

const InputTextArea = styled(TextField)`
    width: 400px;

`

export class AdicionaProduto extends React.Component {
    state = {
    };






    render() {
        return (
            <ConteudoPrincipal>

                <CabecalhoPerfil>
                    <CardProfile>
                        <CardImageProfile>
                            <ImageProfile src="https://picsum.photos/70/70" alt="Minha Figura"/>	
                        </CardImageProfile>
                        <TextProfile>
                            <TextProfileh2>Vendedor SlackBot</TextProfileh2>
                            <TextProfileP>10 produtos cadastrados.</TextProfileP>
                        </TextProfile>
                    </CardProfile>
                </CabecalhoPerfil>

                <ConteinerForm>
                            <formularioInputs>
                                <ContainerInputName>
                                <InputName required id="standard-required" label="Nome do Produto" defaultValue="" />
                                </ContainerInputName>
                                <ContainerInputCategoria>
                                <InputCategoria required id="standard-required" label="Categoria" defaultValue="" />
                                </ContainerInputCategoria>

                                 <ContainerInputPagamento>
                                <InputPagamento required id="standard-required" label="Forma de Pagamento" defaultValue="" />
                                </ContainerInputPagamento>

                                <ContainerInputParcelas>
                                <InputParcelas required id="standard-required" label="Parcelas" defaultValue="" />
                                </ContainerInputParcelas>

                                <ContainerInputPreco>
                                <InputPreco required id="standard-required" label="Preço" defaultValue="" />
                                </ContainerInputPreco>
                                 <ContainerTextArea>
                                 <InputTextArea
                                    label="Descrição"
                                    id="filled-size-small"
                                        size="normal"
                                    rows="5"
                                    multiline="100"
                                    />
                                  </ContainerTextArea>
                                <Button color="primary">Primary</Button>
                            </formularioInputs>
                </ConteinerForm>
            </ConteudoPrincipal>
        );
    }
}

export default AdicionaProduto;
