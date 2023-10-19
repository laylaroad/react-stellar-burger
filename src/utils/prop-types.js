import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
});
