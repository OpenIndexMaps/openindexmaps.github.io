---
layout: home
---

This is a basic Shapefile index map to OpenIndexMaps GeoJSON converter. Index maps are often created in desktop GIS software that may not have full support of GeoJSON features. This converter is useful to convert to GeoJSON. Conversion steps happening:

  - Shapefile -> GeoJSON
  - Feature property "available" converted to `Boolean` type.

<div class="form-group">
  <label for="shapefile-file"> Upload index map shapefile</label>
  <input type="file" id="shapefile-file" class="form-control">
</div>


<div id="converted" class="bg-light"></div>
