import YAML from "yaml";

import { S3Service } from "../aws";

// ```Title: Blog 1
// Contents:
//   - Images:
//       - 1.png
//       - 2.png
// Metadata:
//   - Date: 2021-16-5
//   - Tags:
//       - Python
//       - OpenCV
//       - NumPy
// ```
function YAMLgenerator(title, tags = [], images = []) {
  let contents = {
    Images: images,
  };
  let metadata = {
    Date: new Date(),
    Tags: tags,
  };
  return YAML.stringify({
    Title: title,
    Contents: contents,
    Metadata: metadata,
  });
}

const EditorService = {
  createBlog: async (title) => {
    return await S3Service.upload(
      "meta/" + new Date().getTime() + ".yaml",
      YAMLgenerator(title)
    );
  },
  publishBlog: async (blogID, code) => {
    const a = await S3Service.upload(blogID + "/data.md", code);
    console.log(a);
  },
  storeImages: async (blogID, images) => {
    const metadataResponse = await S3Service.getObject(
      "meta/" + blogID + ".yaml"
    );
    var metadata = YAML.parse(metadataResponse.Body.toString());

    let _images = await Promise.all(
      images.map(async (image) => {
        const imageKey = new Date().getTime() + "." + image.name.split(".")[1];
        metadata.Contents.Images.push(imageKey);
        return await S3Service.upload(blogID + "/" + imageKey, image, {
          ACL: "public-read",
        });
      })
    );
    const metadataUploaded = await S3Service.upload(
      "meta/" + blogID + ".yaml",
      YAML.stringify(metadata)
    );
    console.log(_images, metadataUploaded);
  },
};

export default EditorService;
