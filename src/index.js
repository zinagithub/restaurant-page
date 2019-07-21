import './assets/style/style.css';
import Image from './assets/images/main.jpg';

import addTopBar from './top-bar.js';
import addMenu   from './bar-menu.js'; 

addTopBar('top-bar',Image);
addMenu('top-menu',["Home","Menu","About","Contact"])

