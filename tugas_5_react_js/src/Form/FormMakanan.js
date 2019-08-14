import React, {Component} from 'react';

class FormMakanan extends Component {
    constructor(props){
        super(props);
        this.state = {
            pesanan : "",
            jumlah : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeJumlah = this.handleChangeJumlah.bind(this);
        this.pesanan = React.createRef();
    }
    handleChange(e){
        this.setState(
            {
                pesanan : e.target.value
            }
        );
    }
    handleChangeJumlah(e) {
        this.setState(
            {
                jumlah : e.target.value
            }
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(
            "Pesanan Anda Adalah  : "+
            this.state.pesanan + 
            " | Jumlah Pesanan : " +
            this.state.jumlah
        );
        this.setState(
            {
                pesanan : "", jumlah:""
            }
        );
        this.pesanan.current.focus();
    }

    render(){
        return(
            <div>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Masukan Pesanan Anda" ref={this.pesanan} onChange={this.handleChange} type="text" value={this.state.pesanan} />
                        <input type="number" value={this.state.jumlah} onChange={this.handleChangeJumlah} ref={this.pesanan} placeholder="Masukan Jumlah Pesanan" />
                        <br />
                        <br />
                        <input type="submit" value="Pesan" />
                    </form>
                </center>
            </div>
        );
    }

}

export default FormMakanan;