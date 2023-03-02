export enum EditProductActionType {
  setTitle,
  setDescription,
  setArticle,
  setPreviewImage,
  setPrice,
  setType,
  setStrings
}

export type EditProductAction = {
  type: EditProductActionType;
  payload: string;
};
