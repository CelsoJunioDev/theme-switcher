import React, {useContext} from 'react';
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'

import {Container} from './styles'

interface Props{
    toggleTheme(): void
}

const Header: React.FC <Props> = ({toggleTheme}) =>{
    const { colors, title } = useContext(ThemeContext)
    return (

        <Container>
            Hello World
            <Switch
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            width={40}
            height={10}
            handleDiameter={20}
            offColor={colors.primary}
            onColor={colors.secundary}
            />
        </Container>
    )
}

export default Header;