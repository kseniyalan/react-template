import React, { Component } from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";

import "./PaginationBlock.scss";

class PaginationBlock extends Component {
  static propTypes = {
    activePage: PropTypes.number.isRequired,
    pagesCount: PropTypes.number.isRequired,
    pagesVisible: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    displayOptions: PropTypes.array.isRequired,
    selectedDisplayOption: PropTypes.number.isRequired,
    selectDisplayOption: PropTypes.func.isRequired,
    bordered: PropTypes.bool,
  };

  static defaultProps = {
    bordered: false,
  };

  constructor() {
    super();
    this.state = {
      PrevActivePage: localStorage.getItem('lastPage')
    }
  }

  componentDidMount() {
    const { activePage, onChangePage } = this.props;
    if (this.returnPrevPage() !== activePage) onChangePage(this.returnPrevPage());
  }

  onClickPaginationItem = (item, event) => {
    const { onChangePage } = this.props;
    event.preventDefault();
    localStorage.setItem('lastPage', '0')
    onChangePage(item);
  }

  returnPrevPage() {
    const { activePage } = this.props;
    let activePrevPage = this.state.PrevActivePage !== '0' ? Math.ceil(this.state.PrevActivePage/10) : 0;
    return activePrevPage !== 0 ? activePrevPage : activePage;
  }

  onClickPrevious = (event) => {
    const { onChangePage } = this.props;
    event.preventDefault();
    localStorage.setItem('lastPage', '0')
    if (this.returnPrevPage() !== 1) onChangePage(this.returnPrevPage() - 1);

  }

  onClickNext = (event) => {
    const { pagesCount, onChangePage } = this.props;
    event.preventDefault();
    localStorage.setItem('lastPage', '0')
    if (this.returnPrevPage() !== pagesCount) onChangePage(this.returnPrevPage() + 1);

  }

  renderPaginationItems = (item, i) => {
    const activePage = this.returnPrevPage();
    const pageClass = classnames({
      'page-item': true,
      'item': true,
      'active': activePage === item,
    });

    if (item < 0) return(<div key={i * Math.random()} className="page-more">...</div>);
    return (
      <button
        type="button"
        className={pageClass}
        key={i * Math.random()}
        onClick={(event) => this.onClickPaginationItem(item, event)}
      >
        {item}
      </button>
    );
  }

  renderDisplayOptions = (item, i) => {
    const { selectedDisplayOption,  selectDisplayOption, bordered } = this.props;
    const itemClass = classnames({
      'display-item': true,
      'page-item': true,
      'bordered': bordered,
      'active': selectedDisplayOption === item,
    });

    return (
      <button
        type="button"
        className={itemClass}
        key={i * Math.random()}
        onClick={() => selectDisplayOption(item)}
      >
        {item}
      </button>
    );
  }

  render() {
    const { pagesCount, bordered, pagesVisible, displayOptions } = this.props;
    let activePage  = this.returnPrevPage();
    let pagesArray = [];
    let finalArray = [];
    for (let i = 1; i <= pagesCount; i++){
      pagesArray.push(i);
    }
    
    //Create the pages list
    if (pagesCount > pagesVisible) {
      if (activePage <= (pagesVisible - 1)){
        let firstPart = pagesArray.splice(0, pagesVisible - 1);
        firstPart.push(-1);
        let lastPart = pagesArray.splice(-1, 1);
        finalArray = firstPart.concat(lastPart);
      }
      else if (activePage > (pagesCount - pagesVisible + 1)) {
        let firstPart = pagesArray.splice(0, 1);
        firstPart.push(-1);
        let lastPart = pagesArray.splice(pagesCount - pagesVisible, pagesVisible - 1);
        finalArray = firstPart.concat(lastPart);
      }
      else {
        let firstPart = pagesArray.splice(0, 1);
        firstPart.push(-1);
        let lastPart = pagesArray.splice(-1, 1);
        lastPart.unshift(-1);
        let middlePart = [activePage - 1, activePage, activePage + 1];
        finalArray = firstPart.concat(middlePart).concat(lastPart);
      }
    }
    else {
      finalArray = pagesArray;
    }

    const prevClass = classnames({
      'page-item': true,
      'prev': true,
      'bordered': bordered,
    });

    const nextClass = classnames({
      'page-item': true,
      'next': true,
      'bordered': bordered,
    });

    return (
      <div className="pagination">
        {/* List of pages will be displayed if there are more than 1 page */}
        <div className="pages-wrap">
          {(pagesCount > 1) ? (
            <React.Fragment>
              <button
                type="button"
                className={prevClass}
                onClick={(event) => this.onClickPrevious(event)}
                disabled={activePage === 1}
              >
                <span className="lnr lnr-chevron-left" />
              </button>
              {finalArray.map(this.renderPaginationItems)}
              <button
                type="button"
                className={nextClass}
                onClick={(event) => this.onClickNext(event)}
                disabled={activePage === pagesCount}
              >
                <span className="lnr lnr-chevron-right" />
              </button>
            </React.Fragment>
          ) : false}
        </div>
        {/* Selecting the number of items per page */}
        <div className="display-wrap">
          <div className="display-text">Display</div>
          {(displayOptions.length !== 0) ? displayOptions.map(this.renderDisplayOptions) : false}
          <div className="display-text">items per page</div>
        </div>
      </div>
    );
  }
}

export default PaginationBlock;
