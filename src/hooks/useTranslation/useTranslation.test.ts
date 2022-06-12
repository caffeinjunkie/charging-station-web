import { i18n } from '../../util';
import { useTranslation } from './useTranslation';

describe('#useTranslation', () => {
  it('should return Locations when useTranslation called with key', () => {
    i18n.changeLanguage('en');
    const key = 'Dashboard-LocationList-title';
    const expectedValue = 'Locations';
    
    const actualResult = useTranslation(key);
    
    expect(actualResult).toEqual(expectedValue);
  });
  
  it('should return Plaatsen when useTranslation called with key', () => {
    i18n.changeLanguage('nl');
    const key = 'Dashboard-LocationList-title';
    const expectedValue = 'Plaatsen';
    
    const actualResult = useTranslation(key);
    
    expect(actualResult).toEqual(expectedValue);
  });
});
