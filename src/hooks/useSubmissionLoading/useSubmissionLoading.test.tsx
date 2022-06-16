import useSubmissionLoading from './useSubmissionLoading';

describe('useSubmissionLoading', () => {
  const onSubmit = jest.fn();
  const props = {
    setShowLoadingOverlay: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#useSubmissionLoading', () => {
    it('should call onSubmit and setShowLoadingOverlay with false when useSubmissionLoading is invoked', async () => {
      await useSubmissionLoading(props, onSubmit);

      expect(onSubmit).toHaveBeenCalled();
      expect(props.setShowLoadingOverlay).toHaveBeenCalledWith(false);
    });
  });
});
