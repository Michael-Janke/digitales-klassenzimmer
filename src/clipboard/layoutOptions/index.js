import { ReactComponent as layout1x1 } from './1x1.svg';
import { ReactComponent as layout1x2 } from './1x2.svg';
import { ReactComponent as layout2x1 } from './2x1.svg';
import { ReactComponent as layout2x2 } from './2x2.svg';
import { ReactComponent as layout4x1 } from './4x1.svg';
export default {
    "1x1": {
        x: 1,
        y: 1,
        svg: layout1x1,
        maxElements: 1,
        text: "Nur ein Medium"
    }, 
    "1x2": {
        x: 1,
        y: 2,
        svg: layout1x2,
        maxElements: 2,
        text: "2er Vergleich"
    },
    "2x1": {
        x: 2,
        y: 1,
        svg: layout2x1,
        maxElements: 2,
        text: "2er Vergleich"
    },
    "2x2": {
        x: 2,
        y: 2,
        svg: layout2x2,
        maxElements: 4,
        text: "4er Vergleich"
    },
    "4x1": {
        x: 4,
        y: 1,
        svg: layout4x1,
        maxElements: 4,
        text: "4er Vergleich"
    },
};