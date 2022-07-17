import React from 'react';
import ReactDOM from 'react-dom/client';
import {DINOSAURS} from './dinosaurs';
import {ORDER} from './dinosaurs';
import {SORTOPTIONS} from './dinosaurs';
import {FILTEROPTIONS} from './dinosaurs';
import './index.css';
//const _ = require("lodash");
const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
<path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
</svg>

/*
TODOS
1. Once grouped, same groups will have OR filters + different groups will have AND
2. Align the sort options in the sort/filter bar
3. Link new page for customizing the catalogue
4. Turn DINOSAURS const into JSON
*/

function Item(props) {
    const imageName = require(`${props.value.image}`);
    // TODO: add altText prop to dinosaurs.js
    const altText = `Artistic rendering of the ${props.value.name}`;
    return (
        <div class="item">
            <p><b>{props.value.name}</b></p>
            <div class="img-content">
                <img
                    src={imageName}
                    alt={altText}>
                </img>
                <div>
                    <p>{props.value.period}</p>
                    <p>{props.value.location}</p>
                    <p>{props.value.diet}</p>
                    <a href={props.value.source}>Image Source</a>
                </div>
            </div>
        </div>
    )
}

function Sort(props) {
    return (
        <div></div>
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
            <li
                key={item.id}
                class="sort-button"
                onClick={this.handleSortClick.bind(this,item.value)}
                style={{color: this.state.sort === item.value ? "red" : "black"}}>
                <u>{item.label}</u>
            </li>
        );
        const filterOptions = FILTEROPTIONS.slice();
        const filterItems = filterOptions.map((item) => 
            <li key={item.id} class="filter-group">
                <p><b>{item.label}</b></p>
                {item.options.map((subitem) => 
                    <div key={subitem.id} class={item.value} onChange={this.handleFilterClick.bind(this,subitem.value)}>
                        <input value={subitem.value} type="checkbox"></input>
                        <span>{subitem.value}</span>
                    </div>
                )}
            </li>
        );
        const dinos = this.state.dinos.slice();
        return(
            <div>
                <h1 style={{textAlign:"center"}}>User's Catalogue</h1>
                <ul id="nav-bar">
                    <li><b>Sort Options</b></li>
                   {sortItems}
                    <span id="grow">      
                            <li><b>Filters </b></li>
                            <li>{arrow}</li>
                            {/* <div id="filters">{filterItems}</div> */}
                    </span>
                    <div id="filters">{filterItems}</div>
                </ul>
                <div id="catalogue">
                    {this.renderCatalogue(dinos)}
                </div>    
                {/* 
                // Temporary footer
                <div id="stuff">
                    <p>stuff</p>
                </div>   */}
            </div>    
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Catalogue />);