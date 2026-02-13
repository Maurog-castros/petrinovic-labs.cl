const collectionFragment = `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      description
      title
    }
    updatedAt
  }
`;

export default collectionFragment;
