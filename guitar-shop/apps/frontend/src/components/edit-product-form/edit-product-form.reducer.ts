import { EditProductAction, EditProductActionType } from '../../types/edit-product-form';
import { Product } from '../../types/product';

function editProductFormReducer(state: Product, action: EditProductAction): Product {
  const { type, payload } = action;

  switch (type) {
    case EditProductActionType.setTitle:
      return { ...state, title: payload };
    case EditProductActionType.setDescription:
      return { ...state, description: payload };
    case EditProductActionType.setArticle:
      return { ...state, article: payload };
    case EditProductActionType.setPreviewImage:
      return { ...state, previewPath: payload };
    case EditProductActionType.setPrice:
      return { ...state, price: Number(payload) };
    case EditProductActionType.setType:
      return { ...state, type: payload };
    case EditProductActionType.setStrings:
      return { ...state, stringCount: Number(payload) };
    default:
      return state;
  }
}

export {
  editProductFormReducer
}
