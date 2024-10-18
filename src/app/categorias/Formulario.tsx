import AlertaMessage from '@/componentes/Alerta';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '@/componentes/CampoEntrada';
import Dialogo from '@/componentes/Dialogo';
import CampoSelect from '@/componentes/CampoSelect';
import { useCategoriaContext } from './useCategoriaContext';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useCategoriaContext();

    return (
        <Dialogo id="modalEdicao" titulo="Produto"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <AlertaMessage alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.codigo}
                    id="txtCodido" name="codigo" label="Código"
                    tipo="number" onchange={handleChange}
                    readonly={true}
                    maxCaracteres={5} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nome"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>           
        </Dialogo>
    )
}

export default Formulario;