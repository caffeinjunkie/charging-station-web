const defaultProps = {
  data: [],
  withTableNavigation: false,
  tableNavigationProps: {
    next: {
      disabled: false,
      onClick: () => {}
    },
    previous: {
      disabled: false,
      onClick: () => {}
    }
  }
};

export default { defaultProps };
