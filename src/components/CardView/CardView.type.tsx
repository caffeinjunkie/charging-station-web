export interface Props {
  screenName: string,
  renderIcon: () => any,
  isInformationText?: boolean,
  renderContent: () => any,
  renderInformationIcon?: () => any,
  title: string,
  name: string,
  titleBadge?: string
};
