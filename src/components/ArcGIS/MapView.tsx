import React from 'react';

import { loadModules, loadCss } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IWebMap from 'esri/WebMap';

interface Props {
    webmapId: string;
    children?: React.ReactNode;
}

const MapView: React.FC<Props> = ({ webmapId, children }: Props) => {
    const mapDivRef = React.useRef<HTMLDivElement>();

    const [mapView, setMapView] = React.useState<IMapView>(null);

    const initMapView = async () => {
        type Modules = [typeof IMapView, typeof IWebMap];

        try {
            const [MapView, WebMap] = await (((await loadModules([
                'esri/views/MapView',
                'esri/WebMap',
            ])) as unknown) as Promise<Modules>);

            const view = new MapView({
                container: mapDivRef.current,
                map: new WebMap({
                    portalItem: {
                        id: webmapId,
                    },
                }),
            });

            await view.when(() => {
                setMapView(view);
            });
        } catch (err) {
            console.error(err);
        }
    };

    React.useEffect(() => {
        loadCss();
        initMapView().then();
    }, []);

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                ref={mapDivRef}
            />
            {mapView
                ? React.Children.map(children, (child) => {
                      return React.cloneElement(child as React.ReactElement, {
                          mapView,
                      });
                  })
                : null}
        </>
    );
};

export default MapView;
