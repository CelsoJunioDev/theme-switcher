import React, {useContext} from 'react';
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'

import {Container} from './styles'

const Header: React.FC = () =>{
    const { colors } = useContext(ThemeContext)
    return (

        <Container>
            Hello World
            <Switch
            onChange={() => {}}
            checked={false}
            checkedIcon={false}
            uncheckedIcon={false}
            width={40}
            height={10}
            handleDiameter={20}
            offColor=""
            onColor={colors.secundary}
            />
        </Container>
    )
}

export default Header;