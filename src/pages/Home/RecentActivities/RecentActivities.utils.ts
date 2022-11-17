import polyline from '@mapbox/polyline';
import SM from '@mapbox/sphericalmercator';

const convertLatLongToPoint = (latLng: [number, number]) => {
  const [lng, lat] = latLng;
  const sm1 = new SM({ size: 256 });
  return sm1.px([lat, lng], 18);
};

const convertPolylineIntoRouteInfo = (route: string) => {
  let points = polyline.decode(route);
  points = points.map((point) => convertLatLongToPoint(point));
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const finalPoints = points.reduce((acc, point) => `${acc} ${point.join(',')}`, '');
  return {
    minX,
    maxX,
    minY,
    maxY,
    points: finalPoints,
  };
};

export default convertPolylineIntoRouteInfo;
