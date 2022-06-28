import React from 'react';

import { TestUtils } from '../../utils';
import {
  StyledHeaderContainer,
  StyledLanguageSelectorContainer,
  StyledLanguageItemContainer,
  StyledLanguageItemIcon
} from './Header.styles';
import FastnedLogo from '../../assets/images/FastnedLogo';
import config from './Header.config';

const { testProps } = TestUtils;
const { languageOptions } = config;

interface LanguageOption {
  name: string
  locale: string
}

interface Props {
  selectedLanguage: LanguageOption
  onSelectLanguage: (option: LanguageOption) => void
}

const Header = (props: Props): JSX.Element => {
  const { onSelectLanguage, selectedLanguage } = props;
  
  const handleClickLanguageItem = (option: LanguageOption) => {
    onSelectLanguage(option)
  }
  
  const renderLanguageSelector = (option: LanguageOption) => {
    const className = selectedLanguage.locale === option.locale ? 'selected' : '';
    const imgUrl = `https://countryflagsapi.com/png/${option.name.toLowerCase()}`
    return (
      <StyledLanguageItemContainer
        key={option.name}
        onClick={() => handleClickLanguageItem(option)}
      >
        <StyledLanguageItemIcon
          src={imgUrl}
          alt=""
          className={className}
        />
      </StyledLanguageItemContainer>
    )
  }
  
  return (
    <StyledHeaderContainer
      {...testProps('Header_Container')}
    >
      <FastnedLogo />
      <StyledLanguageSelectorContainer>
        {languageOptions.map(renderLanguageSelector)}
      </StyledLanguageSelectorContainer>
    </StyledHeaderContainer>
  )
}

export default Header;
