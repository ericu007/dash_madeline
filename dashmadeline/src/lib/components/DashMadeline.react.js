import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { draw } from 'madeline';
var Madeline = require('madeline');
var style = require('!css-loader!../../../assets/layout.css');
const dataForge = require('data-forge');
// require('data-forge-fs');

var individuals = [
    {
      IndividualId: 'm100',
      Familyid: 'test',
      Gender: 'f',
      Affected: 'a'
    }, {
      IndividualId: 'm101',
      Familyid: 'test',
      Gender: 'm',
      Affected: 'b'
    }, {
      IndividualId: 'm102',
      Familyid: 'test',
      Gender: 'f',
      Affected: 'c'
    }, {
      IndividualId: 'm103',
      Familyid: 'test',
      Mother: 'm100',
      Father: 'm101',
      MZTwin: 'test',
      Affected: 'a'
    }, {
      IndividualId: 'm104',
      Familyid: 'test',
      Gender: 'f',
      Mother: 'm102',
      Father: 'm101',
      Affected: 'b'
    }, {
      IndividualId: 'm105',
      Familyid: 'test',
      Mother: 'm100',
      Father: 'm101',
      MZTwin: 'test',
      Affected: 'c'
    }, {
      IndividualId: 'm106',
      Familyid: 'test',
      Gender: 'm',
    }, {
      IndividualId: 'm107',
      Familyid: 'test',
      Mother: 'm104',
      Father: 'm106',
      DZTwin: 'rest',
      Affected: 'a'
    }, {
      IndividualId: 'm108',
      Familyid: 'test',
      Mother: 'm104',
      Father: 'm106',
      DZTwin: 'rest',
      Affected: 'a'
    }
];

let df = new dataForge.DataFrame(individuals);
df = df.renameSeries({ Affected: "Child"})
    .setIndex("Name");

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

export default class DashMadeline extends Component {
    render() {
        const {id, label, setProps, value} = this.props;

        var svg;

        svg = Madeline.draw(individuals,  ['IndividualId', 'DOB']);

        console.log(df);

        return (
            <div id={id}
                dangerouslySetInnerHTML={{__html: svg}}>
            </div>
            );
        }
    }

DashMadeline.defaultProps = {};

DashMadeline.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
