export default {
  title: "Test Document",
  name: "testDocument",
  type: "document",
  fields: [
    {
      title: 'Title',
      name: 'Title',
      type: 'string'
    },
    {
      title: "Aprimo CDN Image",
      name: "aprimoCDNImage",
      type: "aprimo.cdnasset",
      description: "Test Aprimo CDN asset",
    },
    {
      title: "Asset Array",
      name: "assetArray",
      description: "Test adding Aprimo assets to nested structures within Sanity",
      type: "array",
      of: [
        {type: "aprimo.cdnasset"}
      ]
    },
    // {
    //   title: "Cloudinary Asset Array",
    //   name: "cloudinaryAssetArray",
    //   description: "Test adding Cloudinary assets to nested structures within Sanity",
    //   type: "array",
    //   of: [
    //     {type: "cloudinary.asset"}
    //   ]
    // },
    
  ]
}
