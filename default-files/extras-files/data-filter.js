exports.filter = [
  // for Node.js / Express
  {
    match: { variableName: ['req', 'res'] },
    mask: {
      keep: [
        'body',
        'cookies',
        'query',
        'params',
        'locals',
        'route',
        'url',
        'method',
        'baseUrl',
        'originalUrl',
      ],
    },
  },
  // DOM Click Event
  {
    match: { className: 'PointerEvent' },
    mask: {
      keep: [
        'clientX',
        'clientY',
        'layerX',
        'layerY',
        'offsetX',
        'offsetY',
        'pageX',
        'pageY',
        'pointerType',
        'screenX',
        'screenY',
        'width',
        'height',
        'x',
        'y',
        'target',
      ],
    },
  },
  // DOM Node
  {
    match: { subtype: 'node' },
    mask: {
      keep: [
        'innerHtml',
        'outerHtml',
        'classList',
        'id',
        'clientHeight',
        'clientLeft',
        'clientTop',
        'clientWidth',
      ],
    },
  },
  // Angular
  {
    match: { className: 'ActivatedRoute' },
    mask: {
      keep: ['snapshot'],
    },
  },
  {
    match: { className: 'ActivatedRouteSnapshot' },
    mask: {
      keep: ['params', 'queryParams', 'routeConfig', 'url'],
    },
  },
  // React
  {
    match: { className: 'FiberNode' },
    mask: {
      keep: ['index'],
    },
  },
];

/* TS interface */
// interface DataDumpFilter {
//   match: { variableName: string[] | string };
//   mask: { keep: string[] | object[] };
// }
