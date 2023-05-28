import { Box, Btn } from "../UI";
import styled from "styled-components"
import { lista } from "../../info";
import ImageFilter from "../../ImageFilter";

//const [type, value, from] = lista.cargos[0];

const MiniBox = styled(Box)`
    flex-direction: row;
    width: 100%;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.15);
    margin: 5px 0;
    font-size: .8rem;
    align-items: center;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    .negrita {
        font-weight: bold;
    }
`;

const Card = () => {
    return <Box>
        {
            lista.cargos.map((cargo, i)=>{
               return ( <MiniBox key={i}>
                        
                    {ImageFilter(cargo.type)}
                    
                    <Info>
                        <span className="negrita">{cargo.type}</span>
                        <span>{cargo.value}</span>
                        <span>{cargo.from}</span>

                    </Info>

                    <span>{cargo.date}</span>

                </MiniBox> )
            })
        }

        
        <Btn>Ver más</Btn>
    </Box>
}

export default Card