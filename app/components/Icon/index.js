/**
*
* Icon
*
*/

import React from 'react';

import styles from './styles.css';

import iconBook from './icons/book-bookmarked.svg'
import iconOffline from './icons/cloud-disable.svg'
import iconDownload from './icons/cloud-download.svg'
import iconRam from './icons/computer-ram.svg'
import iconDesignMug from './icons/design-mug.svg'
import iconFlowchart from './icons/flowchart.svg'
import iconGithubLogo from './icons/logo-circle-github-3.svg'
import iconInfiniteLoop from './icons/loop-infinite-2.svg'
import iconTetris from './icons/tetris.svg'
import iconTools from './icons/tools-wrench-screwdriver.svg'

const iconMap = {
  'book': iconBook,
  'offline': iconOffline,
  'download': iconDownload,
  'ram': iconRam,
  'design-mug': iconDesignMug,
  'flowchart': iconFlowchart,
  'github-logo': iconGithubLogo,
  'infinite-loop': iconInfiniteLoop,
  'infinite-loop': iconInfiniteLoop,
  'tetris': iconTetris,
  'tools': iconTools,
}

function Icon({ type, className: userClassName }) {
  let classNames = [ styles.icon ]
  if (userClassName) classNames.push(userClassName)
  return React.createElement(iconMap[type], {
    className: classNames.join(' '),
    preserveAspectRatio: "xMaxYMax meet",
    height: null,
    width: null,
    viewBox: '0 0 25 25'
  })
}

export default Icon;
