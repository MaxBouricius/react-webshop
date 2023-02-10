import { useEffect, useState } from "react";
import "./FilterBar.css"

const FilterBar = ({ onFilter }) => {


    const [labels, setLabels] = useState([]);

    useEffect(() => {
        let toBeRenderedLabels = [
            {
                name: "whiskey",
                checked: "unchecked",
            },
            {
                name: "wine",
                checked: "unchecked",
            },
            {
                name: "chicken",
                checked: "unchecked",
            },
        ]
        setLabels(toBeRenderedLabels);
    }, [])

    const toBeRenderedLabels = labels.map(label => {
        let input = <input onChange={() => filterItem(label.name)} type="checkbox" id={label.name} className="filterbar__checkBox" />

        if (label.checked === "checked") {
            input = <input checked onChange={() => filterItem(label.name)} type="checkbox" id={label.name} className="filterbar__checkBox" />
        }
        return (
            <div key={label.name} className="filterBarInputWrapper">
                {input}
                <label htmlFor={label.name}>{label.name}</label>

            </div>
        )
    })
    const filterItem = (filter) => {
        const copy = [...labels];
        const newState = copy.map(label => {
            if (label.name !== filter) {
                label.checked = "unchecked";
            }
            if (label.name === filter) {
                label.checked = "checked";
            }
            return label;
        })
        setLabels(newState);
        onFilter(filter);
    }
    return (
        <section className="filterBar">
            <div className="filterBarWrapper">
                {toBeRenderedLabels}
            </div>
        </section>
    )
}

export default FilterBar;