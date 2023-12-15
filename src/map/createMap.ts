import OlMap from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";

const createMap = (): OlMap => {
  const tileLayer = new TileLayer({ source: new OSM() });

  return new OlMap({
    view: new View({ zoom: 2, center: [0, 0] }),
    layers: [tileLayer],
    controls: [],
    overlays: [],
  });
};

export default createMap;
