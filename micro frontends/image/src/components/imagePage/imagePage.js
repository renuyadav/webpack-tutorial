import Heading from '../heading/heading';
import addImage from '../add-image/add-image';
import _ from 'lodash';

class ImagePage {
    render() {
        const heading = new Heading();
        heading.render(_.upperFirst("image component"));

        addImage();
    }
}
export default ImagePage;