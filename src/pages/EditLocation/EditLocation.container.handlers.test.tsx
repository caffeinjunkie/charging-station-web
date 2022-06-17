import handlers from './EditLocation.container.handlers';
import { netherlands, switzerland } from '../../fixtures/countryData.fixture'
import {
  hpc, t52,
  chargersPayload,
  saveChargerPayload,
  editChargerPayload,
  charger1, charger2
} from '../../fixtures/chargerData.fixture';
import { useSubmissionLoading } from '../../hooks/useSubmissionLoading';
import { post, remove } from '../../hooks/useAxios';
import { locationData } from '../../fixtures/locationData.fixture';

jest.mock('../../hooks/useSubmissionLoading');
jest.mock('../../hooks/useAxios');

const {
  mapCountries,
  mapChargerTypes,
  handleSaveLocation,
  handleSaveCharger,
  handleUpdateCharger,
  handleBackButtonClick,
  handleRemoveLocation,
  mapHookFormDefaultValues
} = handlers;

describe('editLocationHandlers', () => {
  const fetchedData = {
    countries: {
      data: [netherlands, switzerland]
    },
    chargerTypes: {
      data: [hpc, t52]
    },
    location: {
      data: locationData
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
    handleBackButtonClick: jest.fn(),
    mapChargerTypes: jest.fn(),
    handleSaveLocation: jest.fn(),
    handleSaveCharger: jest.fn(),
    handleRemoveLocation: jest.fn(),
    mapHookFormDefaultValues: jest.fn(),
    mapPayload: jest.fn()
  }
  
  describe('#handleBackButtonClick', () => {
    it('should navigate to dashboard and call axios post /delete-chargers',async () => {
      const removedChargers = [charger1];
      (post as jest.Mock).mockReturnValue({})
      const postPayload = {
        body: {
          chargers: removedChargers
        },
        path: '/delete-chargers'
      };
      
      await handleBackButtonClick(props)(removedChargers);
      await useSubmissionCallback();
      
      expect(post).toHaveBeenCalledWith(postPayload);
      expect(props.navigate).toHaveBeenCalledWith('/');
    });
  });
  
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
  
  describe('#mapHookFormDefaultValues', () => {
    it('should return mapped default values', () => {
      const exptectedResult = {
        defaultValues: {
          name: "Blvd 2",
          city: "City",
          country: {
            id: "1",
            name: "Country Name"
          },
          locationNo: "122314",
          postalCode: "144BB"
        }
      }
      
      const result = mapHookFormDefaultValues(props)();
      
      expect(result).toEqual(exptectedResult)
    });
  });
  
  describe('#handleRemovelocation', () => {
    it('should navigate to dashboard and invoke axios delete /locations/1',async () => {
      (remove as jest.Mock).mockReturnValue({})
      const payload = {
        path: `/locations/1`
      }
      
      await handleRemoveLocation(props)();
      await useSubmissionCallback();
      
      expect(remove).toHaveBeenCalledWith(payload);
      expect(props.navigate).toHaveBeenCalledWith('/');
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
        id: "1",
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
        path: '/locations/1'
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
        id: "1",
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
        path: '/locations/1'
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
