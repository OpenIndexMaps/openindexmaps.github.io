---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
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
