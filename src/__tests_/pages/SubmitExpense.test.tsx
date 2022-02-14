import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "../../App";
import renderer from 'react-test-renderer';

// set up enzyme
configure({ adapter: new Adapter() });


// assert that the component has rendered'
describe('<SubmitExpense/>', function () {

    it('Should render correctly', function () {
        const component = renderer.create(<App />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should have single <button>', function () {
        const component = shallow(<button />);
        expect(component.find('button').length).toBe(1);
    });

});


describe("App", () => {
    it("renders correctly", () => {
        shallow(<App />);
    });
});

// run more test
