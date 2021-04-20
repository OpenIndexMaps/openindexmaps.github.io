# GIS Index Map Creation
## Requirements and Recommendations

DRAFT April 2021

### Table of Contents

- [Overview](#overview)
- [OpenIndexMaps and GeoBlacklight](#openindexmaps-and-geoblacklight)
- [Requirements and Recommendations](#requirements-and-recommendations)
  * [1. File coverage](#1-file-coverage)
  * [2. File naming convention](#2-file-naming-convention)
  * [3. File formats](#3-file-formats)
  * [4. Projections and coordinate systems](#4-projections-and-coordinate-systems)
  * [5. Element name character length](#5-element-name-character-length)
  * [6. Element name format](#6-element-name-format)
  * [7. Element name](#7-element-name)
  * [8. Map extent geometry - vector creation](#8-map-extent-geometry---vector-creation)
  * [9. Bounding box - data entry](#9-bounding-box---data-entry)
  * [10. Holdings information - general](#10-holdings-information---general)
  * [11. Physical holdings information](#11-physical-holdings-information)
  * [12. Digital holdings information](#12-digital-holdings-information)
  * [13. Sheet or frame number](#13-sheet-or-frame-number)
  * [14. Dates](#14-dates)
  * [15. Websites](#15-websites)
- [Element Names](#element-names)
- [Set- and Flight-level Metadata](#set--and-flight-level-metadata)
- [Converting geospatial data to OpenIndexMap GeoJSON format](#converting-geospatial-data-to-openindexmap-geojson-format)
  * [Boolean conventions for conversion](#boolean-conventions-for-conversion)
  * [Array conventions for conversion](#array-conventions-for-conversion)
- [Uploading to OpenIndexMaps](#uploading-to-openindexmaps)
- [Participants](#participants)

## Overview

Institutions have been creating GIS index maps for many years to inventory and provide a finding aid for map sets and air photo flights. Institutions use various conventions for vector creation, attribute table element names (column headers; fields), attribute data and file names. As a result, one institution’s index maps can look very different from another’s and it may be difficult to interpret local conventions.

During the 2017, 2018, 2019 and 2020 Geo4Lib Camps at Stanford University, attendees discussed various aspects of GIS index maps. In 2019 a desire was expressed to standardize vector and attribute table characteristics among multiple institutions so that the files can be easily shared and reused. At the 2019 Geo4Lib Camp and over the subsequent months, several individuals developed requirements and recommendations for GIS index map creation (this document). A draft of this document was reviewed at the 2020 Geo4Lib Camp.

## OpenIndexMaps and GeoBlacklight

Also desired by the Geo4Lib Camp attendees is a central place to share GIS index map files, especially those that conform to the proposed standards and best practices. The [Open Index Maps](https://openindexmaps.org/) GitHub repository ([OpenIndexMaps](https://github.com/OpenIndexMaps)) was set up for this purpose. Each contributing institution can set up a folder within which they can upload their GIS Index Maps. This is also a location to store and share index map documentation.

For further consideration, functionality within the GeoBlacklight discovery platform allows users to click on a polygon within a GIS index map which then forwards users to metadata and links to access the specific item indicated by that polygon. If institutions use common practices to create GIS index maps, and if GeoBlacklight could then be programmed to recognize a file with these standards, then these GIS index maps can easily be added to any institution’s GeoBlacklight-based repository, thus providing direct access to other institutions’ scanned maps or air photos without the need for extensive file, code or workflow changes.

The goal is for institutions to use the recommendations in this document to create GIS index maps (or adjust current GIS index maps to match these standards) and then upload the files to the OpenIndexMaps repository. Additionally, institutions could ingest the GIS index maps into their GeoBlacklight instances, which could then use its functionality to provide information and improve access to map sets and air photo collections. Institutions could also ingest other institutions’ GIS index maps, expanding access to collections.

## Requirements and Recommendations

The following requirements and recommendations for creating GIS index maps and entering information are designed to enforce conformity where necessary for sharing and reuse while allowing for flexibility at each institution to implement local practices.

### 1. File coverage

**_Recommendation:_** _one file per institution; one file per map set or air photo flight_

Each file should represent a single map set or air photo flight held at a specific institution so that discovery tools such as GeoBlacklight can display each institution's holdings of that work as a single record.

### 2. File naming convention

No recommendation is made at this time regarding file names. At this time, GeoBlacklight has no requirements or recommendations for file names.

### 3. File formats

**_Requirement:_** _GeoJSON_

While it is recognized that GIS index maps may be created using a variety of file formats (shapefiles, geodatabase feature classes, etc.), the file format **_SHOULD_** be valid GeoJSON. The preference here is for open standards based, self-contained and human-readable text files; GeoJSON satisfies these preferences. See [RFC 7946](https://tools.ietf.org/html/rfc7946) for more on GeoJSON.

### 4. Projections and coordinate systems

**_Requirement:_** _WGS84 (EPSG: 4326)_

Valid GeoJSON requires the coordinate reference system to be WGS84. See “[Coordinate Reference System](https://tools.ietf.org/html/rfc7946#section-4)”. However, OpenIndexMaps will adhere to the exception “However, where all involved parties have a prior arrangement, alternative coordinate reference systems can be used without risk of data being misinterpreted” in special cases.

### 5. Element name character length

**_Recommendation:_** _10 or less for recommended and required elements (see ‘Element name’); use latin alphanumeric characters only; do not start with a number. No limit in length or character type for all other element names_

Many GIS index maps are in shapefile format, or at some point have been or will be a shapefile, which has a 10-character element name (attribute name; column header) limit. To reduce error or the need for maintenance due to element name truncation when creating or converting to shapefiles, element names should be 10 or less characters. However, as this is not always an issue, only those elements covered by these requirements and recommendations should conform to this rule.

### 6. Element name format

**_Recommendation (Requirement for GeoBlacklight):_** _camelCase; Latin alphanumeric characters only_

As GeoBlacklight and other software can be programmed to recognize element names, adherence to a standard is imperative. Also, with a limitation of 10 characters for element names (see ‘Element name character length’), camelCase maximizes character use while retaining legibility.

It is recommended to only use Latin alphanumeric characters in those elements specified by this document (required for GeoBlacklight). This recommendation (requirement) does not apply to other elements devised by an institution.

### 7. Element name

**_Recommendation (Requirement for GeoBlacklight):_** _the term as specified in the tables in the next section_

Interoperability is possible when the element name is recorded identically in both the attribute table and programming code. For those GIS index maps destined for GeoBlacklight, the element names in the attribute table shall be consistent with the element names listed below.

Element names beyond those listed in the tables below are at the discretion of each institution.

### 8. Map extent geometry - vector creation

**_Recommendation:_** _one polygon for each map extent within the map set (or one polygon for each air photo extent within the flight). When there are multiple versions or editions of a map sheet that have the same map extent, create one polygon per version or edition._

Inventory and discovery of map sets and air photo flights are clearer when each polygon represents only a single edition or version of a map sheet or air photo. Interfaces such as GeoBlacklight should be programmed to allow for overlapping polygons such that selection of a point or area within the overlapping polygons results in a display of metadata for all overlapping polygons.

For inset maps or complex map extents, no recommendation is made regarding vector creation. The extent could be a single polygon or multi-part polygon covering the main map and inset map extents. The selection of overlapping and multi-part polygons is already supported by Leaflet; however, GeoBlacklight would need to be updated to support this.

No recommendation is made regarding the creation of polygons in locations where no item should exist (such as a topo map over open water) or might not exist (such as where the extent of a map set is unknown). As no information will be linked to these polygons, inventory and discovery are not compromised by their presence. (See ‘Holdings information - general’)

### 9. Bounding box - data entry

**_Recommendation:_** _use decimal degrees to enter extents._

If recording a rectangular bounding box for a sheet map, the westernmost and easternmost longitude and the northernmost and southernmost latitude forming the extent of a map sheet or air photo frame should be recorded in separate elements using decimal degrees. (See the list of element names in the next section.for the four elements) These units are recognized by map interfaces using WGS84 (see ‘Projections and coordinate systems’). Record longitude using the Greenwich Meridian.

Any bounding box that crosses the antimeridian SHOULD be represented by cutting it in two such that neither part's representation crosses the antimeridian. See [RFC 7946 Section 3.1.9](https://tools.ietf.org/html/rfc7946#section-3.1.9).

### 10. Holdings information - general

**_Recommendation (Requirement for GeoBlacklight):_** _“true” (lower case, without quotes, native Boolean value) entered in the attribute table under the element called ‘available’ to indicate that the institution holds at least one copy of the map sheet or air photo frame in any format (paper, digital, negative, etc.)_

**_Recommendation (Requirement for GeoBlacklight):_** _“false” (lower case, without quotes, native Boolean value) entered in the attribute table under the element called ‘available’ to indicate that the institution does not hold any copy of the map sheet or air photo frame in any format (paper, digital, negative, etc.)_

Interfaces such as GeoBlacklight can read the values of this element and color code GIS index map polygons accordingly to indicate an institution’s holdings. Further distinction of holdings can be expressed in the physHold and digHold elements (see ‘Physical holdings information’ and ‘Digital holdings information’).

### 11. Physical holdings information

**_Recommendation:_** _enter a string in the attribute table under the ‘physHold’ element to indicate that the institution holds a physical version of that item_

**_Requirement for GeoBlacklight:_** _enter a URL or a text string under the ‘physHold’ element that provides direct access or access information for the sheet map or air photo frame_

Each institution can choose how they wish to use this element. If using GeoBlacklight, a URL or text string entered in the field will appear as a link or text on the popup when the polygon is selected by a user.

### 12. Digital holdings information

**_Recommendation:_** _enter a string in the attribute table under the ‘digHold’ element to indicate that the institution holds a digital version of that item_

**_Requirement for GeoBlacklight:_** _enter a URL or a text string under the ‘digHold’ element that provides direct access or access information for the sheet map or air photo frame_

Each institution can choose how they wish to use this element. If using GeoBlacklight, a URL or text string entered in the field will appear as a link or text on the popup when the polygon is selected by a user.

### 13. Sheet or frame number

**_Recommendation:_** _whenever possible, enter the sheet or frame number exactly as it is displayed on the item_

Whenever possible, the sheet number (or code) or frame number should be recorded in the same way as it is displayed on the item. For example, if a map sheet has a code “M-16”, the M should be capitalized and the dash should be included. This is recommended primarily to facilitate joining tables on this element and for other institutions to confirm that they have the same item.

### 14. Dates

**_Recommendation:_** _enter dates using the [Extended Date/Time Format (EDTF) ](https://www.loc.gov/standards/datetime/)Specification_

**_Recommendation:_** _For date-specific elements, the element field type should be ‘string’_

Dates should be entered using the EDTF format (_e.g._ YYYY, YYYY-MM-DD) so that discovery interfaces may recognize it as such. The EDTF format provides for qualification of dates (approximations, date ranges, etc.). Follow EDTF recommendations for these cases.

Elements should not use the ‘date’ field type, as there is inconsistency in the way different systems export their internal date formats to JSON values.

### 15. Websites

**_Recommendation:_** _use HTTPS and serve with CORS enabled_

Whenever possible, URLs should use HTTPS and websites should serve with CORS (Cross-origin resource sharing) enabled.

## Element Names

The following element names are recommended for use in GIS index map attribute tables. All elements are optional. Element names beyond those listed in the tables below are at the discretion of each institution. Empty elements should be omitted.

**TABLE 1: Elements pertaining to both map sheets and air photo frames**

<table>
  <tr>
   <th>ELEMENT
   </th>
   <th>USED FOR
   </th>
   <th>TYPE
   </th>
   <th>DESCRIPTION
   </th>
   <th>EXAMPLE
   </th>
  </tr>
  <tr>
   <td>label
   </td>
   <td>Sheet/frame no.
   </td>
   <td>string
   </td>
   <td>Alphanumeric code identifying the sheet or frame. The value of this field is used as a tool tip in GeoBlacklight.
   </td>
   <td>L-16
   </td>
  </tr>
  <tr>
   <td>labelAlt
   </td>
   <td>Alternate sheet/frame no.
   </td>
   <td>string
   </td>
   <td>Alphanumeric code for the sheet or frame that was used for previous or subsequent editions, or for when there are multiple labels
   </td>
   <td>NW8
   </td>
  </tr>
  <tr>
   <td>labelAlt2
   </td>
   <td>Second alternate sheet/frame no.
   </td>
   <td>string
   </td>
   <td>Alphanumeric code for the sheet or frame when there are multiple labels
   </td>
   <td>C17
   </td>
  </tr>
  <tr>
   <td>datePub
   </td>
   <td>Publication date
   </td>
   <td>string
   </td>
   <td>The date that the sheet or frame was published or made available
   </td>
   <td>1978-08
   </td>
  </tr>
  <tr>
   <td>date
   </td>
   <td>Date
   </td>
   <td>string
   </td>
   <td>Used when no other date field is relevant
   </td>
   <td>1978
   </td>
  </tr>
  <tr>
   <td>west
   </td>
   <td>Westernmost longitude
   </td>
   <td>number
   </td>
   <td>Farthest west extent of the sheet/frame bounding box (using the Greenwich Meridian)
   </td>
   <td>-112.32645
   </td>
  </tr>
  <tr>
   <td>east
   </td>
   <td>Easternmost longitude
   </td>
   <td>number
   </td>
   <td>Farthest east extent of the sheet/frame bounding box (using the Greenwich Meridian)
   </td>
   <td>-108.32555
   </td>
  </tr>
  <tr>
   <td>north
   </td>
   <td>Northernmost latitude
   </td>
   <td>number
   </td>
   <td>Farthest north extent of the sheet/frame bounding box
   </td>
   <td>38.7221
   </td>
  </tr>
  <tr>
   <td>south
   </td>
   <td>Southernmost latitude
   </td>
   <td>number
   </td>
   <td>Farthest south extent of the sheet/frame bounding box
   </td>
   <td>30.4656
   </td>
  </tr>
  <tr>
   <td>location
   </td>
   <td>Location
   </td>
   <td>array[String]*
   </td>
   <td>Geographic place name identifying the area covered by the map sheet or air photo frame
   </td>
   <td>[“Fresno”, “Clovis”]
   </td>
  </tr>
  <tr>
   <td>scale
   </td>
   <td>Scale
   </td>
   <td>string
   </td>
   <td>Scale statement (representative fraction plus qualifiers) of the individual sheet/frame
   </td>
   <td>approximately 1:250,000
   </td>
  </tr>
  <tr>
   <td>color
   </td>
   <td>Color, b&w, infrared
   </td>
   <td>string
   </td>
   <td>Indicates whether the sheet/frame is color, black and white, color infrared or another color type
   </td>
   <td>Color, Black and white
   </td>
  </tr>
</table>

\* See “Converting geospatial data to OpenIndexMap GeoJSON format” section below.

**TABLE 2: Elements pertaining to map sheets only**

<table>
  <tr>
  <th>ELEMENT
  </th>
  <th>USED FOR
  </th>
  <th>TYPE
  </th>
  <th>DESCRIPTION
  </th>
  <th>EXAMPLE
  </th>
  </tr>
  <tr>
   <td>title
   </td>
   <td>Sheet name
   </td>
   <td>string
   </td>
   <td>Title of map, usually a geographic location on that sheet
   </td>
   <td>Santiago
   </td>
  </tr>
  <tr>
   <td>titleAlt
   </td>
   <td>Alternate sheet name
   </td>
   <td>string
   </td>
   <td>Alternate title for the sheet that was used for previous or subsequent editions, or for when there are multiple titles
   </td>
   <td>Rio Branco
   </td>
  </tr>
  <tr>
   <td>dateSurvey
   </td>
   <td>Survey date
   </td>
   <td>string
   </td>
   <td>Date that the map sheet was surveyed
   </td>
   <td>1957
   </td>
  </tr>
  <tr>
   <td>datePhoto
   </td>
   <td>Photocorrected date
   </td>
   <td>string
   </td>
   <td>Date that the map sheet was photocorrected
   </td>
   <td>1966
   </td>
  </tr>
  <tr>
   <td>dateReprnt
   </td>
   <td>Reprint date
   </td>
   <td>string
   </td>
   <td>Date that the map sheet was reprinted
   </td>
   <td>1972
   </td>
  </tr>
  <tr>
   <td>overprint
   </td>
   <td>Overprint
   </td>
   <td>string
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>edition
   </td>
   <td>Edition
   </td>
   <td>string
   </td>
   <td>Statement indicating the edition of the map sheet
   </td>
   <td>3rd edition
   </td>
  </tr>
  <tr>
   <td>publisher
   </td>
   <td>Publisher
   </td>
   <td>string
   </td>
   <td>Publisher of the individual sheet (can be used if publishers vary within a map set)
   </td>
   <td>Conselho Nacional de Geografia
   </td>
  </tr>
  <tr>
   <td>overlays
   </td>
   <td>Overlays
   </td>
   <td>string
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>projection
   </td>
   <td>Projection
   </td>
   <td>string
   </td>
   <td>The map’s or photo’s projection, coordinate system and datum
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>lcCallNo
   </td>
   <td>LC Call Number
   </td>
   <td>string
   </td>
   <td>Library of Congress call number
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>contLines
   </td>
   <td>Contour lines
   </td>
   <td>boolean
   </td>
   <td>Indication of whether or not there are contour lines on the map
   </td>
   <td>true / false
   </td>
  </tr>
  <tr>
   <td>contInterv
   </td>
   <td>Contour interval
   </td>
   <td>string
   </td>
   <td>Distance between contour lines.  Include unit (or abbreviation).
   </td>
   <td>200 m
   </td>
  </tr>
  <tr>
   <td>bathLines
   </td>
   <td>Bathymetric lines
   </td>
   <td>boolean
   </td>
   <td>Indication of whether or not there are bathymetric contour lines on the map
   </td>
   <td>true / false
   </td>
  </tr>
  <tr>
   <td>bathInterv
   </td>
   <td>Bathymetric interval
   </td>
   <td>string
   </td>
   <td>Distance between bathymetric contour lines.  Include unit (or abbreviation)
   </td>
   <td>200 m
   </td>
  </tr>
  <tr>
   <td>primeMer
   </td>
   <td>Prime Meridian
   </td>
   <td>string
   </td>
   <td>Indicates a prime meridian other than Greenwich
   </td>
   <td>Ferro
   </td>
  </tr>
</table>

**TABLE 3: Elements pertaining to air photo frames only**

<table>
  <tr>
   <td>ELEMENT
   </td>
   <td>USED FOR
   </td>
   <td>TYPE
   </td>
   <td>DESCRIPTION
   </td>
   <td>EXAMPLE
   </td>
  </tr>
  <tr>
   <td>photomos
   </td>
   <td>Photomosaic
   </td>
   <td>Boolean
   </td>
   <td>Indication that the image is a mosaic of several air photos
   </td>
   <td>true / false
   </td>
  </tr>
  <tr>
   <td>bands
   </td>
   <td>Bands
   </td>
   <td>string
   </td>
   <td>Spectral bands present (near infrared, red, green, blue, etc.)
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>rectificn
   </td>
   <td>Rectification
   </td>
   <td>string
   </td>
   <td>Any corrections done to adjust the air photo image
   </td>
   <td>orthorectified
   </td>
  </tr>
  <tr>
   <td>rollNo
   </td>
   <td>Roll number
   </td>
   <td>string
   </td>
   <td>Identifier for the film reel from which the air photo comes
   </td>
   <td>
   </td>
  </tr>
</table>

**TABLE 4: Elements for entering metadata pertaining to a specific institution only**

<table>
  <tr>
   <td>ELEMENT
   </td>
   <td>USED FOR
   </td>
   <td>TYPE
   </td>
   <td>DESCRIPTION
   </td>
   <td>EXAMPLE
   </td>
  </tr>
  <tr>
   <td>inst
   </td>
   <td>Institution
   </td>
   <td>string
   </td>
   <td>Local institution holding material
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>sheetId
   </td>
   <td>Sheet ID
   </td>
   <td>string
   </td>
   <td>Local institutions’s unique identifier for the sheet/frame
   </td>
   <td>G103 U51 1970 S-34
   </td>
  </tr>
  <tr>
   <td>available
   </td>
   <td>Available
   </td>
   <td>boolean
   </td>
   <td>Indication if the institution holds the item at this location in any format
   </td>
   <td>true,
<p>
false
   </td>
  </tr>
  <tr>
   <td>physHold
   </td>
   <td>Physical holdings
   </td>
   <td>string
   </td>
   <td>Indication if the institution holds the item in a physical format, or a link to information about the physical object
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>digHold
   </td>
   <td>Digital holdings
   </td>
   <td>string
   </td>
   <td>Indication if the institution holds the item in a digital format, or a link to information about the digital object, or a link to the digital object itself
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>instCallNo
   </td>
   <td>Local call number
   </td>
   <td>string
   </td>
   <td>Call number used locally (other than Library of Congress call number)
   </td>
   <td>3200s 250 u5
   </td>
  </tr>
  <tr>
   <td>recId
   </td>
   <td>Record identifier
   </td>
   <td>string
   </td>
   <td>Local institution’s unique identifier for the digital object
   </td>
   <td>yr314gw9982
   </td>
  </tr>
  <tr>
   <td>download
   </td>
   <td>Download URL
   </td>
   <td>string
   </td>
   <td>Link used to directly download the digital object
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>websiteUrl
   </td>
   <td>Website URL
   </td>
   <td>string
   </td>
   <td>Link used to direct users to a website with metadata or a download link for the digital object
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>thumbUrl
   </td>
   <td>Thumbnail URL
   </td>
   <td>string
   </td>
   <td>Link used to access the thumbnail for the digital object
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>iiifUrl
   </td>
   <td>IIIF URL
   </td>
   <td>string
   </td>
   <td>Link used to access the digital image using IIIF
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>fileName
   </td>
   <td>File name
   </td>
   <td>string
   </td>
   <td>Digital file associated with sheet/frame
   </td>
   <td>6840s_100_r8_e-49-63.tif
   </td>
  </tr>
  <tr>
   <td>note
   </td>
   <td>Notes
   </td>
   <td>string
   </td>
   <td>Free text for local comments as well as general notes applying to everyone’s copy
   </td>
   <td>
   </td>
  </tr>
</table>

## Set- and Flight-level Metadata

While metadata pertaining to individual map sheets or air photo frames are recorded in GIS index map attribute tables, metadata pertaining to the map set or flight as a whole are not documented in a consistent location. Esri shapefiles and geodatabase feature classes can have Esri-formatted metadata attached to the files. However, this information is lost when the files are converted to GeoJSON.

## Converting geospatial data to OpenIndexMap GeoJSON format

### Boolean conventions for conversion

“true” “false” should be converted in a converter

### Array conventions for conversion

“|” should be used as a delimiter for creation of data string data that should be converted to an array.

## Uploading to OpenIndexMaps

Institutions can contribute to OpenIndexMaps by uploading their own index maps here: [https://github.com/OpenIndexMaps](https://github.com/OpenIndexMaps)

To upload your index maps to OpenIndexMaps, contact <mark>[contact info]</mark> to have a repository created for your institution. Please provide the GitHub user account which will be the primary user of your repository. Once created you can add your files using Git, GitHub Desktop, or by dragging and dropping files from your computer to your repository using your web browser.

## Participants

The following individuals contributed to the development of these requirements and recommendations:

Stephen Appel (University of Wisconsin Milwaukee) [srappel@uwm.edu](mailto:srappel@uwm.edu)

Tom Brittnacher (University of California Santa Barbara) [tombritt@ucsb.edu](mailto:tombritt@ucsb.edu)

Kim Durante (Stanford University) [kdurante@stanford.edu](mailto:kdurante@stanford.edu)

Dave Hendlin (University of California Santa Barbara) [dhendlin@ucsb.edu](mailto:dhendlin@ucsb.edu)

Taylor Hixson (New York University) [twh2@nyu.edu](mailto:twh2@nyu.edu)

Keith Jenkins (Cornell University) [kgj2@cornell.edu](mailto:kgj2@cornell.edu)

Stace Maples (Stanford University) [stacemaples@stanford.edu](mailto:stacemaples@stanford.edu)

David Medeiros (Stanford University) [davidmed@stanford.edu](mailto:davidmed@stanford.edu)

Susan Powell (University of California Berkeley) [smpowell@berkeley.edu](mailto:smpowell@berkeley.edu)

Jack Reed (Stanford University) [pjreed@stanford.edu](mailto:pjreed@stanford.edu)

Evan Thornberry (University of British Columbia) [evan.thornberry@ubc.ca](mailto:evan.thornberry@ubc.ca)

Phil White (University of Colorado Boulder) [philip.white@colorado.edu](mailto:philip.white@colorado.edu)

Amy Work (University of California San Diego) [awork@ucsd.edu](mailto:awork@ucsd.edu)
