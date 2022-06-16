import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import type { TableNavigationProps } from './TableNavigation.type';

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

const mapButtonProps = (tableNavigationProps: TableNavigationProps) => [
  {
    ...tableNavigationProps.previous,
    name: "Previous",
    className: "action-button",
    renderIcon: FaChevronLeft
  },
  {
    ...tableNavigationProps.next,
    name: "Next",
    className: "action-button",
    renderIcon: FaChevronRight
  }
]

export default { defaultProps, mapButtonProps };
