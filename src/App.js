import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React,{useEffect} from 'react'
import Comments from './data/Comments';
import Datatype from './data/Datatype';
import Flow from './data/Flow';
import Hello from './data/Hello';
import Installation from './data/Installation';
import Operator from './data/Operator';
import Overview from './data/Overview';
import Token from './data/Token';
import Variables from './data/Variables';
import Priority from './data/Priority';
import Home from './pages/Home';
import DecisionMaking from './data/DecisionMaking';
import Looping from './data/Looping';
import NestedLoops from './data/NestedLoops';
import Jumping from './data/Jumping';

import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/components/prism-c.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  useEffect(() => {
    Prism.highlightAll();
}, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/learn/overview' element={<Overview />} />
        <Route exact path='/learn/flow' element={<Flow />} />
        <Route exact path='/learn/installation' element={<Installation />} />
        <Route exact path='/learn/hello' element={<Hello />} />
        <Route exact path='/learn/variables' element={<Variables />} />
        <Route exact path='/learn/comments' element={<Comments />} />
        <Route exact path='/learn/datatype' element={<Datatype />} />
        <Route exact path='/learn/token' element={<Token />} />
        <Route exact path='/learn/operator' element={<Operator />} />
        <Route exact path='/learn/priority' element={<Priority />} />
        <Route exact path='/learn/decisionmaking' element={<DecisionMaking />} />
        <Route exact path='/learn/looping' element={<Looping />} />
        <Route exact path='/learn/nestedloops' element={<NestedLoops />} />
        <Route exact path='/learn/jumping' element={<Jumping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
