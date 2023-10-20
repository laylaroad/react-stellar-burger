import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  image: PropTypes.string,
  image_large: PropTypes.string,
  _id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
});

