import React from 'react';

export default class AgendaPepsiCo extends React.Component {

    constructor() {
        super();

        this.state = {
        events: [],
        currentPage: 1,
        };

        this.fetchEventsOne = this.fetchEventsOne.bind(this);
        this.fetchEventsTwo = this.fetchEventsTwo.bind(this);
        this.fetchEventsThree = this.fetchEventsThree.bind(this);
        this.fetchEventsFour = this.fetchEventsFour.bind(this);
        this.fetchEventsFive = this.fetchEventsFive.bind(this);
        this.fetchEventsSix = this.fetchEventsSix.bind(this);
        this.fetchEventsSeven = this.fetchEventsSeven.bind(this);
        this.fetchEventsEight = this.fetchEventsEight.bind(this);
        this.fetchEventsNine = this.fetchEventsNine.bind(this);
        this.fetchEventsTen = this.fetchEventsTen.bind(this);
    }

    /**
   * This componentDidUpdate gets set as soon as a setstate is declared 
   * @param prevProps
   * @param prevState
   */
    componentDidUpdate(prevProps, prevState) {

    // The fetch will be triggered only if the previous page is different from the curent one. 
    if (prevState.currentPage !== this.state.currentPage) {
        this.fetchEvents();
    }
    }

    render() {

        return (
            <>
            
            <section className="card-list mt-3">
                <ul>
                    {this.state.events.map(subs => (<>
                        <li>
                            <p>{subs.subsname} 📍 {subs.subscountry}</p>
                        </li>
                    </>))}
                </ul>
            </section>

            <div>

                <button className="agendabutton" onClick={() => this.fetchEventsEight(8)}>8</button>
                <button className="agendabutton" onClick={() => this.fetchEventsSeven(7)}>7</button>
                <button className="agendabutton" onClick={() => this.fetchEventsSix(6)}>6</button>
                <button className="agendabutton" onClick={() => this.fetchEventsFive(5)}>5</button>
                <button className="agendabutton" onClick={() => this.fetchEventsFour(4)}>4</button>
                <button className="agendabutton" onClick={() => this.fetchEventsThree(3)}>3</button>
                <button className="agendabutton" onClick={() => this.fetchEventsTwo(2)}>2</button>
                <button className="agendabutton" onClick={() => this.fetchEventsOne(1)}>1</button>
                <button className="agendabutton" onClick={() => this.fetchEventsTen(10)}>10</button>
                <button className="agendabutton" onClick={() => this.fetchEventsNine(9)}>9</button>
                
            </div>
            {/*Optional: button to trigger fetch function :*/}
            {/*<button onClick={this.fetchEvents}>Fetch Subs</button>*/}

            {/*///Correct alternative, to be put in place ASAP///*/}
            {/* () => updatePage(1) to send a parameter to the method*/}
            {/*<button onClick={() => this.updatePage(1)}>1</button>
            <button onClick={() => this.updatePage(2)}>2</button>
            <button onClick={() => this.updatePage(3)}>3</button>
            <button onClick={() => this.updatePage(4)}>4</button>*/}
            
            </>
        );
    }

    /**
   * Updating the sate of currentPage with the page number received as parameter
   */
    updatePage(number) {
        this.setState({
            currentPage: number
        });
    }

  //
  //TEMPORARY SOLUTION FOR PAGINATION, WITH fetch INSTEAD OF updatePage 
  //WITH CURRENTPAGE NUMBER SENT TO CONTROLLER VIA GET
  //

  //ComponentDidMount to make sure that first set is already displayed when page loads
    componentDidMount(){
    this.fetchEventsOne();
    }

  //fetch first set of 10 subsidiaries
    fetchEventsOne() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_one,
        })
        });
    }

  //fetch second set of 10 subsidiaries
    fetchEventsTwo() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_two,
            })
        });
    }
    //fetch third set of subsidiaries
    fetchEventsThree() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_three,
            })
        });
    }

    //fetch third set of subsidiaries
    fetchEventsFour() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_four,
            })
        });
    }

    //fetch third set of subsidiaries
    fetchEventsFive() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_five,
            })
        });
    }

    //fetch third set of subsidiaries
    fetchEventsSix() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_six,
            })
        });
    }

    //fetch third set of subsidiaries
    fetchEventsSeven() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_seven,
            })
        });
    }

    //fetch third set of subsidiaries
    fetchEventsEight() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_eight,
            })
        });
    }

    //fetch third set of subsidiaries
    fetchEventsNine() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_nine,
            })
        });
    }

    //fetch third set of subsidiaries
    fetchEventsTen() {
        fetch(`http://localhost:8000/pepsico/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.PepsiCo_subs_ten,
            })
        });
    }
}
