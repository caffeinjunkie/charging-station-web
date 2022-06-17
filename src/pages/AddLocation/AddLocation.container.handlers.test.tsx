import handlers from './AddLocation.container.handlers';
import { netherlands, switzerland } from '../../fixtures/countryData.fixture'
import {
  hpc, t52,
  chargersPayload,
  saveChargerPayload,
  editChargerPayload,
  charger1, charger2
} from '../../fixtures/chargerData.fixture'
import { useSubmissionLoading } from '../../hooks/useSubmissionLoading';
import { post } from '../../hooks/useAxios';

jest.mock('../../hooks/useSubmissionLoading');
jest.mock('../../hooks/useAxios');

const {
  mapCountries,
  mapChargerTypes,
  handleSaveLocation,
  handleSaveCharger,
  handleUpdateCharger
} = handlers;

describe('addLocationHandlers', () => {
  const fetchedData = {
    countries: {
      data: [netherlands, switzerland]
    },
    chargerTypes: {
      data: [hpc, t52]
    }
  }
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const useSubmissionCallback = async () => {
    const { mock: { calls: [[, callback]] } }: any = useSubmissionLoading;
    await callback();
  };
  
  const setError = jest.fn();
  const props = {
    fetchedData,
    navigate: jest.fn(),
    mapCountries: jest.fn(),
    handleUpdateCharger: jest.fn(),
    mapChargerTypes: jest.fn(),
    handleSaveLocation: jest.fn(),
    handleBackButtonClick: jest.fn(),
    handleSaveCharger: jest.fn()
  }
  
  describe('#handleSaveCharger', () => {
    it('should call setAddedChargers with data from response',async () => {
      const setAddedChargers = jest.fn();
      const addedChargers = [
        {
          id: "2",
          type: "T52",
          serialNumber: "808BB231",
          status: "REMOVED",
          updatedAt: "2020-08-08"
        }
      ];
      const postPayload = {
        body: saveChargerPayload,
        path: '/chargers'
      }
      const responseData = {
        ...saveChargerPayload,
        id:"3",
        updatedAt: "2021-08-04"
      };
      (post as jest.Mock).mockReturnValue(responseData)
      
      await handleSaveCharger(props)(saveChargerPayload, addedChargers, setAddedChargers);
      await useSubmissionCallback();
      
      expect(setAddedChargers).toHaveBeenCalledWith([...addedChargers, responseData]);
      expect(post).toHaveBeenCalledWith(postPayload);
    });
  });
  
  describe('#handleUpdateCharger', () => {
    it('should map updated data and call setAddedChargers',async () => {
      const setAddedChargers = jest.fn();
      const addedChargers = [charger1, charger2];
      const responseData = {
        ...saveChargerPayload,
        status: "REMOVED",
        updatedAt: "2021-08-04"
      };
      (post as jest.Mock).mockReturnValue(responseData)
      
      await handleUpdateCharger(props)(editChargerPayload, addedChargers, setAddedChargers);
      await useSubmissionCallback();
      
      expect(setAddedChargers).toHaveBeenCalledWith([responseData, charger2]);
    });
  });
  
  describe('#handleSaveLocation', () => {
    it('should invoke setError with error value when post response is error',async () => {
      const requestBody = {
        name: 'Planet Sport',
        locationNo: '112233',
        city: 'Jakarta',
        postalCode: '15828',
        country: {
          id: "1"
        }
      }
      const submitArgs = {
        chargers: chargersPayload,
        setError
      };
      const postPayload = {
        body: {
          ...requestBody,
          chargers: ["1"],
          country: "1"
        },
        path: '/locations'
      };
      (post as jest.Mock).mockReturnValue({
        error: {
          key: 'error',
          message: 'error key'
        }
      })
      
      await handleSaveLocation(props)(requestBody, submitArgs);
      await useSubmissionCallback();
      
      expect(setError).toHaveBeenCalledWith('error', { message: "error key" });
      expect(post).toHaveBeenCalledWith(postPayload);
    });
  
    it('should navigate to Dashboard when post response error is null',async () => {
      const requestBody = {
        name: 'Planet Sport',
        locationNo: '112233',
        city: 'Jakarta',
        postalCode: '15828',
        country: {
          id: "1"
        }
      }
      const submitArgs = {
        chargers: [],
        setError
      };
      const postPayload = {
        body: {
          ...requestBody,
          chargers: [],
          country: "1"
        },
        path: '/locations'
      };
      (post as jest.Mock).mockReturnValue({
        error: null
      })
    
      await handleSaveLocation(props)(requestBody, submitArgs);
      await useSubmissionCallback();
    
      expect(props.navigate).toHaveBeenCalledWith("/");
      expect(post).toHaveBeenCalledWith(postPayload);
    });
  });
  
  describe('#mapCountries', () => {
    it('should map countries and return expected result', () => {
      const expectedResult = [
        {
          id: "1",
          name: "Netherlands"
        },
        {
          id: "2",
          name: "Switzerland"
        }
      ]
    
      const result = mapCountries(props)();
      
      expect(result).toEqual(expectedResult);
    });
  
    it('should return empty array when fetchedData.countries has no data', () => {
      const emptyProps = {
        ...props,
        fetchedData: {}
      }
    
      const result = mapCountries(emptyProps)();
    
      expect(result).toEqual([]);
    });
  });
  
  describe('#mapChargerTypes', () => {
    it('should map charger types and return expected result', () => {
      const expectedResult = [
        {
          id: "1",
          name: "HPC"
        },
        {
          id: "2",
          name: "T52"
        }
      ]
      
      const result = mapChargerTypes(props)();
      
      expect(result).toEqual(expectedResult);
    });
  
    it('should return empty array when fetchedData.chargerTypes has no data', () => {
      const emptyProps = {
        ...props,
        fetchedData: {}
      }
    
      const result = mapChargerTypes(emptyProps)();
    
      expect(result).toEqual([]);
    });
  });
});
