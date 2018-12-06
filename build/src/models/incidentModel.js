'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Default incident details

var Incident = [{
  id: 1,
  createdOn: new Date().toLocaleString(),
  createdBy: 1,
  type: 'redflag',
  location: '6.4732° N, 3.2947° E',
  status: 'draft',
  images: ['images', 'images'],
  videos: ['videos', 'videos'],
  comment: 'Police officers are exhorting drivers'
}, {
  id: 2,
  createdOn: new Date().toLocaleString(),
  createdBy: 2,
  type: 'intervention',
  location: '6.5946° N, 3.3405° E',
  status: 'draft',
  images: ['images', 'images'],
  videos: ['videos', 'videos'],
  comment: 'The pedestrian bridge is broken'
}];

exports.default = Incident;