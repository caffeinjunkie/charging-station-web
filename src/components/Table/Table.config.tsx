const defaultProps = {
  data: [],
  withTableNavigation: false,
  withSorting: false,
  sortProps: {
    sortBy: '',
    isAsc: true
  },
  onClickHeaderText: () => {},
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
