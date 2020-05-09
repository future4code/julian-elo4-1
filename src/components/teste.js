


    

   




                        
                        <ConteinerForm>
                                    
                            <ContainerInputName>
                                <InputName 
                                    value={this.state.valueName} 
                                    Onchange={this.handleChange('valueName')} 
                                    required id="standard-required" 
                                    label="Nome do Produto" 
                                    defaultValue="" />
                            </ContainerInputName>
        
                            <ContainerInputCategoria>
                                <InputCategoria
                                    id="standard-select-currency"
                                    select
                                    label="Categoria do Produto"
                                    className={classes.textField}
                                    value={this.state.valueCategory}
                                    onChange={this.handleChange('valueCategory')}
                                    SelectProps={{
                                      MenuProps: {
                                        className: classes.menu,
                                      },
                                    }}
                                    margin="normal"
                                >
                                    {categorias.map(option => (
                                      <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                      </MenuItem>
                                    ))}
                                </InputCategoria>
                            </ContainerInputCategoria>
        
                            <ContainerInputPagamento>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Forma de Pagamento</FormLabel>
                                    <RadioGroup
                                        aria-label="Forma de Pagamento"
                                        name="gender1"
                                        className={classes.group}
                                        value={this.state.valuePaymentMethod}
                                        onChange={this.handleChange('valuePaymentMethod')}
                                    >
                                        <FormControlLabel value="boleto" control={<Radio />} label="Boleto" />
                                        <FormControlLabel value="card" control={<Radio />} label="Cartão" />
                                    </RadioGroup>
                                </FormControl>
                            </ContainerInputPagamento>
        
                            <ContainerInputParcelas>
                                <InputCategoria
                                    id="standard-select-parcelas"
                                    select
                                    label="Número de Parcelas"
                                    className={classes.textField}
                                    value={this.state.valueInstallments}
                                    onChange={this.handleChange('valueInstallments')}
                                    SelectProps={{
                                      MenuProps: {
                                        className: classes.menu,
                                      },
                                    }}
                                    margin="normal"
                                >
                                    {numParcelas.map(option => (
                                      <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                      </MenuItem>
                                    ))}
                                </InputCategoria>
                            </ContainerInputParcelas>
        
                            <ContainerInputPreco>
                                <TextField
                                    id="standard-number"
                                    label="Number"
                                    value={this.state.valuePrice}
                                    type="number"
                                    className={classes.textField}
                                    Onchange={this.handleChange('valuePrice')}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                    }}
                                />
                            </ContainerInputPreco>
        
                            <ContainerTextArea>
                                <InputTextArea
                                    label="Descrição"
                                    id="filled-size-small"
                                    size="normal"
                                    rows="5"
                                    multiline="100"
                                    Onchange={this.handleChange('valueDescription')}
                                    value={this.state.valueDescription}
                                />
                            </ContainerTextArea>
        
                            <Button OnClick={this.sendData} color="primary">Cadastrar Produto</Button>
        
                        </ConteinerForm>
                        <Rodape />

