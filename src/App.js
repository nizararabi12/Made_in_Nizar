import React from 'react';
import Quiz from './Quiz';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [
        {
          vraag: "what is the name of this device?",
          antwoorden: [
            {
              text: "Keyboard",
              correct: true
            },
            {
              text: "Typewriter",
              correct: false
            },
            {
              text: "Letter writer",
              correct: false
            },
            {
              text: "Letter board",
              correct: false
            }
          ]
        },
        {
          vraag: "which technology company uses this logo?",
          antwoorden: [
            {
              text: "Samsung",
              correct: false
            },
            {
              text: "Windows",
              correct: false
            },
            {
              text: "Apple",
              correct: true
            },
            {
              text: "HP",
              correct: false
            }
          ]
        },
        {
          vraag: "what does ICT mean?",
          antwoorden: [
            {
              text: "Internet and Computer Technology",
              correct: false
            },
            {
              text: "Informative and Calculator Telephone",
              correct: false
            },
            {
              text: "Information and Communication Technology",
              correct: true
            },
            {
              text: "Information and Calculator Technology",
              correct: false
            }
          ]
        },
        {
          vraag: "the data protection act does",
          antwoorden: [
            {
              text: "Protects against the misuse of personal information",
              correct: true
            },
            {
              text: "Makes it a criminal offence to copy/steal media/work/ideas",
              correct: false
            },
            {
              text: "Covers the misuse of computer equipment",
              correct: false
            }
          ]
        },
        {
          vraag: "the computer misuse act",
          antwoorden: [
            {
              text: "Protects against the misuse of personal information",
              correct: false
            },
            {
              text: "Makes it a criminal offence to copy/steal media/work/ideas",
              correct: false
            },
            {
              text: "Covers the misuse of computer equipment/access to files",
              correct: true
            },
            {
              text: "Stops people from illegally downloading media",
              correct: false
            }
          ]
        },
        {
          vraag: "the copyright and patents act",
          antwoorden: [
            {
              text: "Protects against the misuse of personal information",
              correct: false
            },
            {
              text: "Makes it a criminal offence to copy/steal media/work/ideas",
              correct: true
            },
            {
              text: "Covers the misuse of computer equipment",
              correct: false
            },
            {
              text: "Stops people from illegally downloading media",
              correct: false
            }
          ]
        },
        {
          vraag: "the digital economy act",
          antwoorden: [
            {
              text: "Protects against the misuse of personalinformation",
              correct: false
            },
            {
              text: "Makes it a criminal offence to copy/stealmedia/work/ideas",
              correct: false
            },
            {
              text: "Covers the misuse of computerequipment",
              correct: false
            },
            {
              text: "Stops people from illegally downloading media",
              correct: true
            }
          ]
        },
        {
          vraag: "if you was to sell a piece of software that does not belong to you, which law are you breaking?",
          antwoorden: [
            {
              text: "Cooling off period",
              correct: false
            },
            {
              text: "Computer misuse act",
              correct: false
            },
            {
              text: "Digital economy ac",
              correct: true
            },
            {
              text: "Copyright act",
              correct: true
            }
          ]
        },
        {
          vraag: "if you download music from website and don’t pay for it, which law might you be breaking?",
          antwoorden: [
            {
              text: "Copyright law",
              correct: true
            },
            {
              text: "Digital economy act",
              correct: true
            },
            {
              text: "Computer misuse act",
              correct: false
            },
            {
              text: "Cooling off period",
              correct: false
            }
          ]
        },
        {
          vraag: "what is e-waste?",
          antwoorden: [
            {
              text: "Old computers that end up on landfills",
              correct: true
            },
            {
              text: "Toxic chemicals",
              correct: false
            },
            {
              text: "Not disposing of computers in the recommended way",
              correct: true
            },
            {
              text: "Deleting data",
              correct: false
            }
          ]
        },
        {
          vraag: "how could we avoid producing e-waste?",
          antwoorden: [
            {
              text: "Recycle old computer parts",
              correct: true
            },
            {
              text: "Throw away",
              correct: false
            },
            {
              text: "Placing old computers in landfill",
              correct: false
            },
            {
              text: "Sell computer so specialist shops/organisations",
              correct: true
            }
          ]
        },
        {
          vraag: "gaining access to someones data without their permission is illegal. Which law applies to this?",
          antwoorden: [
            {
              text: "Copyright law",
              correct: false
            },
            {
              text: "Data protection act",
              correct: false
            },
            {
              text: "Computer misuse act",
              correct: true
            },
            {
              text: "Sales of good act",
              correct: false
            }
          ]
        },
        {
          vraag: "hacking is a security issue. Which of these can prevent hacking?",
          antwoorden: [
            {
              text: "Logging of computers properly when finished using",
              correct: true
            },
            {
              text: "Setting strong passwords",
              correct: true
            },
            {
              text: "Use a firewall on your computer",
              correct: true
            },
            {
              text: "Writing down passwords",
              correct: false
            }
          ]
        },
        {
          vraag: "when a company is obliged not to share your data, this is covered under which act?",
          antwoorden: [
            {
              text: "Data protection act",
              correct: true
            },
            {
              text: "Computer misuse act",
              correct: false
            },
            {
              text: "Copyright law",
              correct: false
            },
            {
              text: "Cooling off period",
              correct: false
            }
          ]
        },
        {
          vraag: "what is this device?",
          antwoorden: [
            {
              text: "Printer",
              correct: false
            },
            {
              text: "Scanner",
              correct: false
            },
            {
              text: "Projector",
              correct: true
            },
            {
              text: "monitor",
              correct: false
            }
          ]
        },
        {
          vraag: "what does www mean?",
          antwoorden: [
            {
              text: "world wresling winner",
              correct: false
            },
            {
              text: "World wide web",
              correct: true
            },
          ]
        }
      ],
      currentIndex: 0,
      showResult: false,
      showModal: false,
      selectedAnswer: 0,
      score: 0,
      countDown: 30
    }
    this.intervalId = null;
  }

  componentDidMount() {
    const counter = setInterval(this.startTimer,  1000);
    this.intervalId = counter;
  }

  componentDidUpdate() {
    if(this.state.countDown === 0) {
      this.setState({...this.state, currentIndex: this.state.currentIndex + 1, countDown: 30});
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  selectAnswer = (index) => {
    console.log(index)
    this.setState({...this.state, selectedAnswer: index});
  }

  startTimer  = () => {
    this.setState({...this.state, countDown: this.state.countDown -1 })
  }

  showAnswer = () => {
    let {score} = this.state;
    const {quizes, currentIndex, selectedAnswer} = this.state;
    console.log(quizes[currentIndex].antwoorden[selectedAnswer].correct);
    if(quizes[currentIndex].antwoorden[selectedAnswer].correct) {
      const result = this.state.countDown * 10;
      score += result;
    }
    clearInterval(this.intervalId);
    this.setState({...this.state, score, showResult: true});
  }

  changeQuestion = () => {
    this.intervalId = setInterval(this.startTimer, 1000);
    const { quizes, currentIndex} = this.state;
    if(currentIndex < quizes.length  - 1) {
      this.setState({ ...this.state, currentIndex: currentIndex + 1, showResult: false, countDown: 30});
    } else {
      this.setState({...this.state, showModal: true});
    }
  }

  resetQuiz = () => {
    this.setState({...this.state, showModal: false, currentIndex: 0, score: 0, selectedAnswer: 0, showResult: false });
  }

  render() { 
    const {quizes, currentIndex, showResult, showModal, score, selectedAnswer, countDown} = this.state;
    const imageUrl = `${process.env.PUBLIC_URL}/assets/${currentIndex + 1}.png`;
    return (
      <div className="App">
        <Quiz 
        image={imageUrl} 
        quiz={quizes[currentIndex]} 
        show={showResult} 
        selected={selectedAnswer}
        answer={this.selectAnswer}
        />
        <button onClick={this.showAnswer} disabled={showResult}>show result</button>
        {showResult ? <button onClick={this.changeQuestion}>next</button> : null}
        {showModal ? 
          (<div className="modal">
              <div className="popup">
                <p>Congratiolations your score is {score}</p>
              </div>
              <button onClick={this.resetQuiz}>play again!</button>
            </div>)
        : null}
        <div className="results">
        <p>Score: {score}</p>
        <p>Timer: {countDown}</p>
        </div>
      </div>
    );
  }
}

export default App;
