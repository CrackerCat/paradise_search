import React from 'react';

export default class AgendaProcterGamble extends React.Component {

    constructor() {
        super();

        this.state = {
        events: [],
        currentPage: 1,
        };

        this.fetchEventsOne = this.fetchEventsOne.bind(this);
        this.fetchEventsTwo = this.fetchEventsTwo.bind(this);
        this.fetchEventsThree = this.fetchEventsThree.bind(this);
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
                <button className="agendabutton" onClick={() => this.fetchEventsThree(3)}>3</button>
                <button className="agendabutton" onClick={() => this.fetchEventsTwo(2)}>2</button>
                <button className="agendabutton" onClick={() => this.fetchEventsOne(1)}>1</button>
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
        fetch(`http://localhost:8000/proctergamble/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.ProcterGamble_subs_one,
        })
        });
    }

  //fetch second set of 10 subsidiaries
    fetchEventsTwo() {
        fetch(`http://localhost:8000/proctergamble/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.ProcterGamble_subs_two,
            })
        });
    }
  //fetch third set of subsidiaries
    fetchEventsThree() {
        fetch(`http://localhost:8000/proctergamble/subs`).then(response => response.json()).then(response => {
            this.setState({
            events: response.ProcterGamble_subs_three,
            })
        });
    }
}
