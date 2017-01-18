# gedcom-svg-fanchart

Create a SVG genealogical fan chart from a GEDCOM file.

[1]: https://rawgit.com/nliautaud/gedcom-svg-fanchart/master/index.html
[2]: https://github.com/nliautaud/gedcom-svg-fanchart/archive/master.zip

[Live version][1]|
----------
[<img src="capture.png" alt="Capture" width="607px"/>][1]|

## Usage

[Download][2] the repository and open it with your web browser, or go to the [live version][1].

Drop a GEDCOM file onto the page.

## Dynamic text templates

The chart title and individual labels use text templates, where keywords in uppercase are dynamicaly replaced by corresponding values. See [Data keywords](#data-keywords).

The chart is automatically updated when the *individuals* text field is out of focus, and drawn in the best way possible according to the texts contents and the aspect settings.

## Navigation

The *origin* is the individual at the center of the chart. Write names to fuzzy-search in the list. You can also double-click on the chart.

By checking *auto resize*, the chart will be fit and centered into the page when updated. You may want to uncheck it to maintain a specific zoom and position.

You can move and zoom onto the chart at any time by dragging/scrolling/pinching.

## Aspect

The chart and labels are sized and drawn in the smallest and most readable way according to the following aspect settings.

The first *generations* circles are written "horizontally" and the slices are sized to contain all the lines of text. For the next generations, as the slices width are smaller and smaller, the content is written "verticaly" (pointing outside). The slices are sized to contain the texts line length, and displays only the number of lines who fits in.

The texts are drawn in the best direction depending on the slice orientation and the chart *rotation*.

The *padding* add space around labels, and the *generation spacing* add some space between each generation circles.

## Colors

The chart can be dynamically colored according to each data, corresponding to the [data keywords](#data-keywords), by using the *color palette* drop-down. Gradients are generated for numerical values (ex. dates, sources qualities...), and distinct colors for others (ex. names, places...).

The palette selection drop-down is also as a fuzzy-search filter.

**Highlights**  
Specific informations can be highlighted by limiting the coloring to certain selected values. All the values are colored by default.

**Global coloring**  
By default palettes are generated once, with a distinct color for each existing data variant, even for the ones not currently on the chart. Palettes are thus not recomputed when navigating, and same values will have the same color accross charts. But the more variants there are, the more chances there will be of similar colors, as the colors are not optimized for the current chart.
By disabling the *global coloring* option, color palettes are specifically generated for the values of the current chart.

**Legend**  
The chart legend is a list of the colors and their corresponding values, sorted by occurences. The maximum *legend number* can be changed in the settings. The legend title and labels are directly editables, and will retain their new value accross charts.

## Data keywords

Any GEDCOM tag is associated to its data field.

```
SEX         M
OCCU        Astronaut
...         ...
```

Custom keywords :

```
LAST        Doe
SURN        John Joseph-Alexander (complete surnames)
SURS        John / Joseph / Alexander (individual surnames)
GID         @00157@
GENS        8 (number of generations, used in title)
```

Each one of the following can be prefixed by `B` and `D` for birth and death data (ex. birth place, death sources, etc.). Not prefixed, they'll return every value known for the individual (ex. several countries, multiple sources, etc.) :

```
DATE       ABT 24 JUN 1936
YEAR       1936
MON        6
DAY        24
PRE        abt.
DEC        1930
CEN        1900
PLAC       Lorentz Crater, Northwest limb, Bright side, Moon
CNTR       Moon
STAT       Bright side
DSTR       Northwest limb
TOWN       Lorentz Crater
AREA       Lorentz Crater (smallest known place)
SOUR       NASA Bigest book
SGID       @00037@
SQUA       7 (sources quality)
```

Each event tag can be prefixed by `AG` to get the age at the event date (if there is one) :

```
AGDEAT		75 (age at death)
AGIMMI		28 (age at immigration)
...
```

Values can be truncated by using numbers and dots :

```
SURN        John Alexander
SURN1       John
SURN.1      John A.
SURN..1     John...
SURN...1    J...
```

## Editing

The chart style is extensively editable with CSS, as every slice is populated with useful CSS classes of form ``.TAGNAME_tagvalue``. Each line of text is displayed as a separate ``<text>`` element, with the different pieces of information surrounded by ``<tspan>``.

```
<g class="slice GEN_5 SEX_f OCCU_astronaut SOUR_s0019 SOUR_s0032 NOTE_n0132 LAST_doe SURN_john SURN_alexander">
	<path></path>
	<text><tspan>John A.</tspan><tspan> </tspan><tspan>Doe</tspan></text>
	<text><tspan>Asronaut</tspan></text>
</g>
```

The dynamic coloring for example is done by attributing a distinct fill color to every class of a tag type, preceded by a trigger class :
```
.show_SURN .SURN_john path {fill: red}
.show_SURN .SURN_paul path {fill: green}
.show_OCCU .OCCU_astronaut path {fill: skyblue}
```

## Saving & printing

You can print the chart (to a real printer, to PDF...) using the *print* option of your modern web browser.

You can save the page with its content by using the *File > Save web page as...* option of your web browser, usually with the shortcut ``Cmd+S``. The saved page will be a working version of the software and will contain the given GEDCOM data.

The original file is accessing libraries listed below trough internet. If you need a local version, you can simply save it *without* dropping a GEDCOM file. The saved file, accompanied with its data folder, will be a clean, local version of the software. Note that the data folder name is browser-specific.

## External libraries

- GEDCOM parser : https://github.com/tmcw/parse-gedcom
- SVG drawing : https://github.com/adobe-webplatform/Snap.svg
- SVG pan and zoom : https://github.com/huei90/snap.svg.zpd
- Colors generation : https://github.com/medialab/iwanthue
- Textarea resizing : https://github.com/jackmoore/autosize
- Searchable fields : https://github.com/jshjohnson/Choices

## Tests

Tested with GEDCOM files exported from Gramps (https://gramps-project.org).

Tested on desktop with latest chrome, firefox & safari.
