import React from "react";
import Card from '../components/Card';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state={

            // array to hold contents of carousel
            items: props.items? props.items : {}
            }

        }

        //handling helper function which takes in the items declared in the constructor
        handleCardClick= (id, card) => {
        
            let items = [...this.state.items];

           
            items[id].selected=true;
           

            items.forEach(item =>{
                if(item.id !== id){
                    item.selected = false;
                }
            });

            //hold the state
            this.setState({
                items
            });
        }
        //creates card component with the items
        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
            })
        }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;