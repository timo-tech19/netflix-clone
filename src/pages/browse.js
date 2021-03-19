import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionSort from '../utils/selection-map';

function Browse() {
    // films and series
    const { series } = useContent('series');
    const { films } = useContent('films');
    // slides
    const slides = selectionSort({ series, films });
    // pass data to browse container
    return <BrowseContainer slides={slides} />;
}

export default Browse;
