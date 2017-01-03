# gedcom-svg-fanchart

Create a SVG genealogical fan chart from a GEDCOM file.

https://rawgit.com/nliautaud/gedcom-svg-fanchart/master/index.html

## Usage

Drop a GEDCOM file onto the page.

Tested with GEDCOM exported from Gramps (https://gramps-project.org).

## Chart texts

The chart title and labels are editable using text templates, where keywords in uppercase are replaced by their values.

- Any GEDCOM tag, ex. ``OCCU`` : corresponding data field
- ``LAST`` / ``SURN`` : lastnames and surnames
- ``BYEAR`` / ``DYEAR`` : years of birth and death
- ``BPLAC`` / ``DPLAC`` : place of birth and death
- ``GENS`` : number of displayed generations

Values can be truncated by using numbers and dots :
```
SURN          John Alexander
SURN1         John
SURN.1        John A.
SURN..1       John...
SURN...1      J...
```

Each line is displayed as a separate ``<text>`` element with its different informations surrounded by ``<tspan>``.

Labels are drawn in the best direction according to the slices sizes, orientations and to the chart rotation, and the slices sizes ar adapted to the labels content length.

## Editing & printing

You can print the page (to a real printer, to PDF...) using the *print* option of your modern web browser.

The chart style is extensively editable with CSS, as every slice is populated with useful CSS classes of form ``.TAGNAME_tagvalue`` (genders, names, places...) .

## External libraries

- GEDCOM parser : https://github.com/tmcw/parse-gedcom
- SVG drawing : https://github.com/adobe-webplatform/Snap.svg/
- Textarea resizing : https://github.com/jackmoore/autosize
