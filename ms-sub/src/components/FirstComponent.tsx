import * as React from "react";

export default class FirstComponent extends React.Component<{}> {

        public render() {
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h2>Find Anime</h2>
                                <body><p>A Demonstration of React-Typescript web app using a third-party REST API.<br/>
                                Designed using Google's Material-UI. <br/>
                                Bundled using Docker, deployed using Azure Web App for Containers</p></body>

                                <footer><p>Created for the Microsoft Student Accelrator Programme 2018 Phase 1.</p></footer>

                        </div>
                );
        }
}