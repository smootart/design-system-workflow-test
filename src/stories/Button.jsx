import React from 'react';

import PropTypes from 'prop-types';

import { ReactComponent as LoadingThinIcon } from '../assets/icons/icon-loading-thin.svg';
import { ReactComponent as LoadingRegularIcon } from '../assets/icons/icon-loading-regular.svg';
import { ReactComponent as LoadingFillIcon } from '../assets/icons/icon-loading-fill.svg';

import { ReactComponent as PlusThinIcon } from '../assets/icons/icon-plus-thin.svg';
import { ReactComponent as PlusRegularIcon } from '../assets/icons/icon-plus-regular.svg';
import { ReactComponent as PlusFillIcon } from '../assets/icons/icon-plus-fill.svg';

import './button.css';


/** Primary UI component for user interaction */
export const Button = ({ buttonType, backgroundColor, size, label, shape, isDisabled, isLoading, iconType, iconLeft, iconRight, outline, ...props }) => {
  const mode = `storybook-button--${buttonType}` + (outline ? '-outline' : '');

  const disabled = isDisabled ? `storybook-${buttonType}-button-bg-disabled${outline ? '-outline' : ''}` : '';
  const loading = isLoading ? `storybook-${buttonType}-button-bg-loading${outline ? '-outline' : ''}` : '';  

  const plusIconEl = () => {
    switch (iconType) {
      case 'thin':
        return <PlusThinIcon className='storybook-icon icon-plus' alt="아이콘" />;
      case 'regular':
        return <PlusRegularIcon className='storybook-icon icon-plus' alt="아이콘" />;
      case 'fill':
        return <PlusFillIcon className='storybook-icon icon-plus' alt="아이콘" />;
      default:
        return <></>;
    }
  }

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, , `storybook-button--${shape}`, mode, disabled, loading].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {iconLeft && plusIconEl()}
      <span>{label}</span>
      {loading && iconType === 'thin' && <LoadingThinIcon className='storybook-icon center' alt="새로고침 아이콘" />}
      {loading && iconType === 'regular' && <LoadingRegularIcon className='storybook-icon center' alt="새로고침 아이콘" />}
      {loading && iconType === 'fill' && <LoadingFillIcon className='storybook-icon center' alt="새로고침 아이콘" />}
      {iconRight && plusIconEl()}
    </button>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'secondary-low']),
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['medium', 'large']),
  shape: PropTypes.oneOf(['round', 'square']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  iconType: PropTypes.oneOf(['thin', 'regular', 'fill']),
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  buttonType: 'primary',
  backgroundColor: null,
  size: 'medium',
  shape: 'round',
  onClick: undefined,
  isDisabled: false,
  isLoading: false,
  iconType: 'regular',
  iconLeft: false,
  iconRight: false,
};
