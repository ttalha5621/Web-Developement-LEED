
import React from 'react';

export function FooterPage() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <nav>
                    <ul>
                        <li>
                            <a href="#"> CapregSoft </a>
                        </li>
                        <li>
                            <a href="#"> About Us </a>
                        </li>
                        <li>
                            <a href="#"> Blog </a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright" id="copyright">
                    &copy;
                <script>
                        document
                        .getElementById("copyright")
                        .appendChild(
                        document.createTextNode(new Date().getFullYear())
                        );
                </script>
                , Designed by
                <a href="https://www.capregsoft.com/" target="_blank">CapregSoft</a>. Coded by
                <a href="#" target="_blank">CapregSoft</a>.
            </div>
            </div>
        </footer>
    );
}
