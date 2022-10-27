import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='container'>
            
            <h2 className='text-center mt-5'>Frequently Asked Questions About Python</h2>
            <hr className='break' />

            <Accordion className='mt-5 mb-5' defaultActiveKey="0">
      <Accordion.Item className='accordion' eventKey="0">
        <Accordion.Header>What Is Python?</Accordion.Header>
        <Accordion.Body>
        Python is a programming language that's both compiled and interpreted. Python source files (.py) are run through a compiler and turned into bytecode files (.pyc), which are then executed in real-time by an interpreter.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why Learn Python?</Accordion.Header>
        <Accordion.Body>
        The best reason to learn Python is that its commitment to simplicity makes it one of the easiest programming languages to learn. One of the design principles behind Python is a commitment to making the act of programming as enjoyable as possible.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What Is Python Used For?</Accordion.Header>
        <Accordion.Body>
        So much can be done with Python. Not only is it a fun language, it's an intensely practical one that's useful for creating all kinds of scripts and software.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Is Python Free?</Accordion.Header>
        <Accordion.Body>
        Yes, Python is completely free and open source.

        One of the best aspects of Python is its community-driven development, which is mainly done through GitHub (for checking out the language's source code and submitting patches) and IRC (where users can discuss bugs, features, and other Python-related topics).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How Long Does It Take to Learn Python?</Accordion.Header>
        <Accordion.Body>
        As with any programming language, it depends. The more experience you have and the more serious you are about learning, the faster it'll be. But relatively speaking, it'll take you less time to learn Python than most other languages.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What's the Difference Between Python 2.x and 3.x?</Accordion.Header>
        <Accordion.Body>
        When Python 2.0 first came out in 2000, the language wasn't too popular yet. As more developers started picking it up and using it seriously, flaws in the language became more apparent, but they couldn't be fixed without major changes.

        When Python 3.0 first came out in 2008, those major changes were introduced which led to several new features and improvements, but the language became incompatible with Python 2.x. This meant developers needed to refactor their code to take advantage of Python 3.0, and many of them weren't willing to do that---including the developers of many popular third-party libraries and frameworks.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>What Are the Best Python IDEs?</Accordion.Header>
        <Accordion.Body>
        When working with Python, or any kind of programming in general, a solid code editor can make the difference between an enjoyable coding experience or weeks of hair-pulling frustration. To me, a good Python editor can either be a text editor with extensions or a dedicated Python IDE.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Why is it called Python?</Accordion.Header>
        <Accordion.Body>
        When he began implementing Python, Guido van Rossum was also reading the published scripts from “Monty Python’s Flying Circus”, a BBC comedy series from the 1970s. Van Rossum thought he needed a name that was short, unique, and slightly mysterious, so he decided to call the language Python.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>How stable is Python?</Accordion.Header>
        <Accordion.Body>
        Very stable. New, stable releases have been coming out roughly every 6 to 18 months since 1991, and this seems likely to continue. As of version 3.9, Python will have a major new release every 12 months (PEP 602).

        The developers issue “bugfix” releases of older versions, so the stability of existing releases gradually improves. Bugfix releases, indicated by a third component of the version number (e.g. 3.5.3, 3.6.2), are managed for stability; only fixes for known problems are included in a bugfix release, and it’s guaranteed that interfaces will remain the same throughout a series of bugfix releases.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Faq;