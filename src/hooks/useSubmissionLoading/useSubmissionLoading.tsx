const useSubmissionLoading = async (props: any, onSubmit: Function) => {
  const { setShowLoadingOverlay } = props;
  setShowLoadingOverlay(true);

  try {
    return await onSubmit();
  } finally {
    setShowLoadingOverlay(false);
  }
};

export default useSubmissionLoading;
