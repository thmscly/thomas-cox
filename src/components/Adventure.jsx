import React from "react";
import { useReducer } from "react";
import { useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "fuel_clicked": {
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
        },
      ];
    }
    case "report": {
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
        },
      ];
    }
    case "checked_position": {
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
        },
      ];
    }
    case "checked_hull": {
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
        },
      ];
    }
    case "checked_crew": {
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
        },
      ];
    }
    case "had_beer": {
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
        },
      ];
    }
  }
}

export default function Adventure() {
  const [state, dispatch] = useReducer(reducer, initialList);
  const [isVisibleTwo, setIsVisibleTwo] = useState(true);

  const clickHandle = () => {
    setIsVisibleTwo(false);
  };
  return (
    <div>
      <h2 className="animate-titleAnimation">
        You've just awakened in your ship.
      </h2>
      <p>The clock says it's 3:10am on Earth. At least where you're from.</p>
      <p>
        "Hello," you hear a comforting yet robotic voice greet over the
        intercom.
      </p>
      <p>
        "Your working memory will fail you," the intercom says. "In order to
        pass the test, the chip programmed in your brain will take over."
      </p>
      <p>
        "You will complete 3 rounds of choosing the correct tasks. If the order
        is wrong, we have to assume your brain was infiltrated by a space slug
        in your sleep."
      </p>
      <h3>What would you like to do first, captain?</h3>
      <div className="grid grid-rows-2 gap-10 m-3">
        <div id="buttonDivOne" className="grid grid-cols-2">
          <button
            disabled={onclick}
            onClick={() => {
              dispatch({ type: "fuel_clicked", name: "fuel", id: "1" });
              clickHandle();
            }}
          >
            Check the Fuel
          </button>
          <button
            onClick={() => {
              dispatch({ type: "reported", name: "report", id: "2" });
              clickHandle;
            }}
          >
            Report to MotherShip
          </button>
        </div>
        <div
          hidden={!isVisibleTwo}
          id="buttonDivTwo"
          className="grid grid-cols-2"
        >
          <button
            onClick={() => {
              dispatch({ type: "checked_position", name: "position", id: "3" });
            }}
          >
            Check position in starfield
          </button>
          <button
            onClick={() => {
              dispatch({ type: "checked_hull", name: "hull", id: "4" });
            }}
          >
            Scan hull for damage
          </button>
        </div>
        <div
          hidden={!isVisible}
          id="buttonDivThree"
          className="grid grid-cols-2"
        >
          <button
            onClick={() => {
              dispatch({ type: "checked_crew", name: "crew", id: "5" });
            }}
          >
            Check crew life support
          </button>
          <button
            onClick={() => {
              dispatch({ type: "had_beer", name: "beer", id: "6" });
            }}
          >
            Have a beer
          </button>
        </div>
        State {state}
      </div>
    </div>
  );
}

const initialList = [];
