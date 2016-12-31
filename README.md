# gedcom-svg-fanchart

Create a SVG genealogical fan chart from a GEDCOM file.

## Usage

Drop a GEDCOM file onto the page.

Tested with GEDCOM exported from Gramps (https://gramps-project.org).

## Settings

The number of ascendants generations and the id of the targeted individual can be changed.

Labels are parametrables using text templates, where GEDCOM tags are replaced by their corresponding data (ex. OCCU).
Some tags are added :
- LAST / SURS : lastname / surnames
- BYEAR / DYEAR : birth / death year
- BPLAC / DPLAC : birth / death place

The chart is extensively editable with CSS, as every slice is populated with useful CSS classes (genders, names, places...).

## External libraries

- GEDCOM parser : https://github.com/tmcw/parse-gedcom
- SVG drawing : https://github.com/adobe-webplatform/Snap.svg/
