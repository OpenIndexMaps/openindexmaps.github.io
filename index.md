---
layout: home
---

<div class="jumbotron">
  <h1 class="display-4">OpenIndexMaps</h1>
  <p class="lead">A community and format for sharing <a href="https://en.wikipedia.org/wiki/Index_map">index maps</a>.</p>
  <hr class="my-4">
  <p>A new GeoJSON-based file specification for standardizing spatial index map creation has been released. For more information see the latest specification documentation.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="/specification/1.0.0" role="button">Latest Specification</a>
  </p>
</div>

<img src="index_map.jpg" width="240" class="rounded mx-auto d-block">

OpenIndexMaps use the [GeoJSON Format](https://tools.ietf.org/html/rfc7946) to deliver information about an index map that references maps or other index maps. The concept of web-based index maps is not novel, however with many differing implementations, a common community-based standard was needed.

## Introduction

OpenIndexMap is geospatial data format based on the [GeoJSON Format](https://tools.ietf.org/html/rfc7946). It consists of a GeoJSON `FeatureCollection` object that contains `Features` representing a geographic area from which additional map data exists. `Features` may have members which contain additional properties. These properties enable a consuming application to provide a useful finding aid for maps. OpenIndexMap defines a common set of properties that are useful as a finding aid.

OpenIndexMaps should be valid GeoJSON.

<!-- ## Example

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "mb886mv5963",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [100.0001220703126, 20.00012207031252],
              [100.0001220703126, 22.50012207031252],
              [105.0001220703126, 22.50012207031252],
              [105.0001220703126, 20.00012207031252],
              [100.0001220703126, 20.00012207031252]
            ]
          ]
        ]
      },
      "geometry_name": "geom",
      "properties": {
        "label": "L-16",
        "recordIdentifier": "yr314gw9982",
        "websiteUrl": "http://purl.stanford.edu/yr314gw9982",
        "iiifUrl": "https://purl.stanford.edu/yr314gw9982/iiif/manifest",
        "thumbnailUrl": "https://stacks.stanford.edu/image/iiif/yr314gw9982%2Fyr314gw9982_00_0001/full/!400,400/0/default.jpg",
        "title": "Tōa yochizu -- 東亞輿地圖 -- L-16",
        "note": "This item is really interesting."
      }
    }
  ]
}
``` -->

## Helpful Resources

### Converter

A [converter](https://openindexmaps.org/converter) is available for converting shapefile index maps to OpenIndexMaps GeoJSON.

### Tutorial

A [Creating GeoJSON for OpenIndexMaps](https://kgjenkins.github.io/openindexmaps-workshop/) tutorial was created for a workshop at Geo4LibCamp 2020.
The tutorial works through several examples of using QGIS to create OpenIndexMaps GeoJSON files.
An [updated tutorial for version 1.0.0](https://uwm-libraries.github.io/waml-openindexmaps-workshop/) was presented at WAML 2023 and at Geo4LibCamp 2024.

## Legacy Versions

[OpenIndexMap Version 0](/specification/0.0.0)
