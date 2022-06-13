interface TableNavigationButtonProps {
  disabled?: boolean
  onClick?: Function
}

interface TableNavigationProps {
  next?: TableNavigationButtonProps
  previous?: TableNavigationButtonProps
}

export interface Props {
  screenName: string
  tableNavigationProps?: TableNavigationProps
}

const defaultProps = {
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
