import Button from '../button/button';
import Heading from '../heading/heading';
import _ from 'lodash';

class HelloWorldPage {
    render() {
        const heading = new Heading();
        heading.render(_.upperFirst("hello world"));

        const btn = new Button();
        btn.render();
    }
}
export default HelloWorldPage;