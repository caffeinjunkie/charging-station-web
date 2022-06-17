import { i18n } from '../../utils';
import { useTranslation } from './useTranslation';

describe('#useTranslation', () => {
  it('should return Locations when useTranslation called with key', () => {
    i18n.changeLanguage('en');
    const key = 'Dashboard-locationList-title';
    const expectedValue = 'Locations';
    
    const actualResult = useTranslation(key);
    
    expect(actualResult).toEqual(expectedValue);
  });
  
  it('should return Plaatsen when useTranslation called with key', () => {
    i18n.changeLanguage('nl');
    const key = 'Dashboard-locationList-title';
    const expectedValue = 'Plaatsen';
    
    const actualResult = useTranslation(key);
    
    expect(actualResult).toEqual(expectedValue);
  });
});
