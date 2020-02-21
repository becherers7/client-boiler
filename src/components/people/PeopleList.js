import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loadPeopleData } from ".././../redux/actions/dataActions/personActions";

const PeopleList = props => {
  const { people } = props;

  useEffect(() => {
    if (people.length === 0) {
      props.loadPeopleData();
    }
  }, [people]);
  return (
    <Fragment>
      {people.length > 0 ? (
        <>
          {people.map(p => {
            return <li key={p.lastName}>{p.lastName}</li>;
          })}
        </>
      ) : (
        <h3>No results</h3>
      )}
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    people: state.personReducer
  };
}

const mapDispatchToProps = {
  loadPeopleData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList);
