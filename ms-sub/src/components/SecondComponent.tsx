import * as React from "react";

export default class SecondComponent extends React.Component <{}> {
        
        public render() {
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h2>About API</h2>
                                <body><p>Jikan is an Unofficial MyAnimeList REST-ful API.<br/>
                                 It's built on the Lumen microframework, uses Redis for caching and is powered by the Jikan Parser</p></body>

                                <footer><p>Created for the Microsoft Student Accelrator Programme 2018 Phase 1.</p></footer>
                        </div>
                );
        }

        
}