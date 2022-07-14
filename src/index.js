import React from 'react';
import ReactDOM from 'react-dom/client';
import Select from "react-dropdown-select";
import {DINOSAURS} from './dinosaurs';
import {ORDER} from './dinosaurs';
import {SORTOPTIONS} from './dinosaurs';
import {FILTEROPTIONS} from './dinosaurs';
import './index.css';
const _ = require("lodash");



// <div style = {{backgroundImage: `url(${imageName})`}}></div>

/*
TODOS
1. Styling -> Filter checkboxes need label groupings
*/

function Item(props) {
    const imageName = require(`${props.value.image}`);
    // TODO: add altText prop to dinosaurs.js
    const altText = `Artistic rendering of the ${props.value.name}`;
    return (
        <div class="item">
            <p><b>{props.value.name}</b></p>
            <img
                src={imageName}
                alt={altText}>
            </img>
            <a href={props.value.source}>Image Source</a>
            <p>{props.value.period}</p>
            <p>{props.value.location}</p>
            <p>{props.value.diet}</p>
        </div>
    )
}

function Sort(props) {
    return (
        <div></div>
    );
}

function Filter(props) {
    return(
        <div>

        </div>
    );
}

class Catalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dinos: DINOSAURS,
            order: ORDER,
            sort: "none",
            filter: []
        };
    }

    renderItem(item) {
        return(
            <Item
                value={item}
            />
        );
    }

    sortAlphabet(itemList) {
        itemList.sort(function(a,b) {
            let nameA= a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA > nameB) {
                return 1;
            } else if (nameA < nameB) {
                return -1;
            } else {
                return 0;
            }
        });
        return itemList;
    }

    // oldest to youngest
    sortPeriod(itemList) {
        let items = [];
        const order = this.state.order;
        order.forEach(name => {
            itemList.forEach(element => {
                if (name === element.period) {
                    items.push(this.renderItem(element));
                }
            })   
        });
        return items;
    }

    sortLocation(itemList) {
        itemList.sort(function(a,b) {
            let nameA= a.location.toLowerCase(), nameB = b.location.toLowerCase();
            if (nameA > nameB) {
                return 1;
            } else if (nameA < nameB) {
                return -1;
            } else {
                return 0;
            }
        });
        return itemList;
    }

    sortDiet(itemList) {
        itemList.sort(function(a,b) {
            let nameA= a.diet.toLowerCase(), nameB = b.diet.toLowerCase();
            if (nameA > nameB) {
                return 1;
            } else if (nameA < nameB) {
                return -1;
            } else {
                return 0;
            }
        }); 
        return itemList;
    }

    // applies each selected filter to the catalogue
    filterCatalogue(itemList) {
        const filters = this.state.filter;
        filters.forEach(filter => {
            itemList = itemList.filter(dino => {
                return filter === dino.period || filter === dino.diet || filter === dino.location;
            });
        });
        return itemList;
    }

    // filters, sorts, then renders the catalogue
    renderCatalogue(itemList) {
        let items = [];
        const sort = this.state.sort;

        itemList = this.filterCatalogue(itemList);

        switch (sort) {
            case "none":
                break;
            case "alpha":
                itemList = this.sortAlphabet(itemList);
                break;
            case "period":
                return this.sortPeriod(itemList);
            case "location":
                itemList = this.sortLocation(itemList);
                break;
            case "diet":
                itemList = this.sortDiet(itemList);
                break;
            default:
                break;
        }

        const len = itemList.length;
        for (let i=0;i<len;i++) {
            items.push(this.renderItem(itemList[i]));
        }
        return items;
    }

    handleSortClick(val) {
        this.setState({
            sort: val,
        });
    }

    handleFilterClick(val) {
        // if val is already in filters, remove it
        // if val is not in filters add it
        let filters = this.state.filter;

        if (filters.includes(val)) {
            const index = filters.indexOf(val);
            filters.splice(index, 1);
        } else {
            filters.push(val);
        }
        this.setState({
            filter: filters,
        });
    }

    render() {
        const sortOptions = SORTOPTIONS.slice();
        const sortItems = sortOptions.map((item, id) =>
            <button key={item.id} onClick={this.handleSortClick.bind(this,item.value)}>
                {item.label}
            </button>
        );
        const filterOptions = FILTEROPTIONS.slice();
        const filterItems = filterOptions.map((item) => 
            item.options.map((subitem, id) => 
                <div key={subitem.id} class={item.value} onChange={this.handleFilterClick.bind(this,subitem.value)}>
                    <input value={subitem.value} type="checkbox"></input>
                    <span>{subitem.value}</span>
                </div>
        ));
        const dinos = this.state.dinos.slice();
        return(
            <div>
                <h1 style={{textAlign:"center"}}>User's Catalogue</h1>
                <ul>
                    <li>{sortItems}</li>
                    <li>{filterItems}</li>
                </ul>
                <div id="catalogue">
                    {this.renderCatalogue(dinos)}
                </div>      
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Catalogue />);