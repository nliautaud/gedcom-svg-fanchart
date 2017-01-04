# gedcom-svg-fanchart

Create a SVG genealogical fan chart from a GEDCOM file.

[1]: https://rawgit.com/nliautaud/gedcom-svg-fanchart/master/index.html

[Demo][1]|
----------
[<img src="capture.png" alt="Capture" width="607px"/>][1]|

## Usage

Drop a GEDCOM file onto the page.

Tested with GEDCOM exported from Gramps (https://gramps-project.org).

## Settings

The chart is automaticaly redrawn when editing the following parameters.

- **title** : dynamic text template for the chart title. Ex: ``Ascendants fan chart of SURN LAST on GENS generations``.
- **content** : dynamic text template for the chart labels. Ex: ``SURN.1 LAST2, born in BYEAR``.
- **generations** : number of ancestors generations to show in the chart.
- **origin ID** : number of the GEDCOM individual to use as center of the chart.
- **rotation** : each label is drawn in the most readable orientation according to the slice size and chart rotation.
- **font size** : slices sizes and labels are adjusted accoding to the content size.
- **padding** : space surrounding labels.
- **generation spacing** : space between generation circles.
- **color palette** : colorize the chart according to a specific data (need ``palette.js`` companion file).

## Dynamic text templates

The chart title and slices labels use text templates, where keywords in uppercase are dynamicaly replaced by corresponding values.

- Any GEDCOM tag, ex. ``OCCU`` : corresponding data field
- ``LAST`` / ``SURN`` : lastnames and surnames
- ``BYEAR`` / ``DYEAR`` : years of birth and death
- ``BPLAC`` (and ``BCOUNTR, BSTATE, BDISTR, BTOWN``) : place of birth (and country, state, district, town)
- ``DPLAC`` (and ``DCOUNTR, DSTATE, DDISTR, DTOWN``) : place of death (and country, state, district, town)
- ``GENS`` : number of displayed generations

Values can be truncated by using numbers and dots :
```
SURN          John Alexander
SURN1         John
SURN.1        John A.
SURN..1       John...
SURN...1      J...
```

## Editing & printing

You can print the page (to a real printer, to PDF...) using the *print* option of your modern web browser.

The chart style is extensively editable with CSS, as every slice is populated with useful CSS classes of form ``.TAGNAME_tagvalue`` (genders, names, places...) .

Each line of text is displayed as a separate ``<text>`` element, the different pieces of information being surrounded by ``<tspan>``.

## External libraries

- GEDCOM parser : https://github.com/tmcw/parse-gedcom
- SVG drawing : https://github.com/adobe-webplatform/Snap.svg
- SVG pan and zoom : https://github.com/ariutta/svg-pan-zoom
- Textarea resizing : https://github.com/jackmoore/autosize
- Colors palettes generation : https://github.com/medialab/iwanthue
