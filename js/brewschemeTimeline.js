var timeline1 = new vis.DataSet([
    { id : 'Init', content : '<strong style="color: white !important;">Initial Development of Brewscheme</strong>', start : '2015-05-03', end : '2015-09-17', type : 'background'},
    { id : 1, content : 'First Commit', start : '2015-05-03' },
    { id : 2, content : 'brewcolors added', start : '2015-05-18' },
    { id : 3, content : 'README added', start : '2015-07-31' },
    { id : 4, content : 'brewextra added', start : '2015-08-02'},
    { id : 5, content : 'brewscheme updated', start : '2015-08-17'},
    { id : 6, content : 'brewextra updated', start : '2015-08-18'},
    { id : 7, content : 'brewdb added', start : '2015-09-08'},
    /*
    This is where brewmeta stopped being used to parse the colors from colorbrewer
     */
    { id : 8, content : 'brewmeta update', start : '2015-09-17'},
    { id : 9, content : 'Mata recycle added', start : '2015-09-17'}
]);

var timeline2 = new vis.DataSet([
    { id : 'Alpha', content : '<strong style="color: white !important;">Alpha Brewscheme</strong>', start : '2015-10-14', end : '2015-11-23', type : 'background'},
    /* { id : 10, content : 'changes for<br>filepath management', start : '2015-10-13'}, */
    { id : 11, content : 'dirfile added', start : '2015-10-14'},
    { id : 12, content : 'brewterpolate added', start : '2015-10-26'},
    { id : 13, content : 'D3.js &amp; Tableau palettes', start : '2015-11-06'},
    { id : 14, content : 'hextorgb added', start : '2015-11-06'},
    { id : 15, content : 'brewviewer added', start : '2015-11-07'},
    { id : 16, content : 'brewtheme added', start : '2015-11-15'},
    { id : 17, content : 'brewtheme data added', start : '2015-11-16'},
    { id : 18, content : 'brewtheme joins brewscheme', start : '2015-11-17'},
    { id : 19, content : 'ggplot2 palette added', start : '2015-11-18'},
    { id : 20, content : 'brewcolordb added', start : '2015-11-21'},
    { id : 21, content : 'brewcolors added', start : '2015-11-21'},
    /*
    This may have been when the U Oregon color palettes got added as a standalone script
     */
    { id : 22, content : 'more palettes added<br>to script', start : '2015-11-23'}
]);

var timeline3 = new vis.DataSet([
    { id : 'Beta', content : '<strong style="color: white !important;">Beta Brewscheme</strong>', start : '2015-11-24', end : '2016-03-20', type : 'background'},
    /*
    This defines the Mata class/methods used to do the color sight impairment simulations.
     */
    { id : 23, content : 'colorblind.mata added', start : '2015-11-24'},
    /*
    Program allows users to see how an individual colors appear to individuals with color sight impairments.  Required
    using RGB value.
     */
    { id : 24, content : 'brewcbsim added', start : '2015-11-25'},
    { id : 25, content : 'brewtransform added', start : '2015-11-25'},
    { id : 26, content : 'libbrewscheme added', start : '2015-11-25'},
    { id : 27, content : 'brewsearch added', start : '2015-11-26'},
    { id : 28, content : 'brewviewer updated', start : '2015-11-28'},
    /*
    This was the beginning of starting to document all of the options/entries referenced by the brewtheme package.
     */
    { id : 29, content : 'brewtheme help', start : '2015-11-29'},
    /* This is when brewscheme started to think about adding colorblind simulated variants to the output.
    * This also is where an ad-hoc implementation of a singleton pattern in the mata class gets implemented.
    */
    { id : 30, content : 'brewscheme colorblind support started', start : '2015-11-30'},
    /*
    Now, brewcolordb would automatically build the database to include the color sight impaired simulated RGB values in
    the database.
     */
    { id : 31, content : 'brewcolordb automates CBsims', start : '2015-11-30'},
    /*
    The functionality was also added to take the named color styles from Stata and do the same with those color styles
    (e.g., create color sight impaired parallels of each one.
     */
    { id : 32, content : 'StataCorp colors translated', start : '2015-12-01'},
    /*
    This is the first version where brewscheme would generate 5 scheme files automatically in order to create
    parallel schemes for each form of colorsight deficiency
     */
    { id : 33, content : 'colorblind schemes', start : '2015-12-01'},
    /*
    brewproof allows users to proof their visualizations in order to see how it would appear to individuals
    with color sight impairments.
     */
    { id : 34, content : 'brewproof added', start : '2015-12-02'},
    /*
    Lots of files for this one help file and the structure of the files was updated to make it hopefully a bit easier
    to read/view/use.
     */
    { id : 35, content : 'brewtheme help updated', start : '2015-12-02'},
    /*
    This allowed a series of symbols to be repeated for the same length as the maximum number of colors specified in
    brewscheme.  Otherwise bizarre errors would be thrown if there would colors defined for say 7 layers, symbols defined
    for 3 layers, and the graph used 5 layers (e.g., tw scatter ... || scatter ... || scatter ... || scatter ... || scatter ...)
     */
    { id : 36, content : 'recycling symbols', start : '2015-12-11'},
    /*
    This change was used to allow the program to automatically recompile the mata library based on whether or not the
    system file date was earlier than the distribution date of the mata library.
     */
    { id : 37, content : '<a href="https://github.com/wbuchanan/StataFileSystem">filesys</a> added', start : '2015-12-17'},
    /*
    brewcbsim was now able to handle multiple colors including named color styles and quoted RGB strings.
     */
    { id : 38, content : 'brewcbsim updated', start : '2015-12-18'},
    /*
    Program used with filesys to check and trigger recompiling of mata library if needed
     */
    { id : 39, content : 'brewlibcheck added', start : '2015-12-18'},
    /*
    Very early version of the article that eventually got submitted.
     */
    { id : 40, content : 'SJ Article started', start : '2016-01-05'},
    /*
    This seems to have been primarily driven by fixing some reported/discovered bugs (issue 31).  The initial refactoring
    reduced the length of brewscheme from 1801 lines of code to 1485 lines of code.
     */
    { id : 41, content : 'brewscheme refactoring', start : '2016-01-07'},
    /*
    First of several tracked revisions to Stata Journal article
     */
    { id : 42, content : 'SJ Article Updated', start : '2016-01-08'},
    /*
    Updated to handle the brighter/darker methods in the underlying Java classes.
     */
    { id : 43, content : 'brewterpolate updated', start : '2016-01-09'},
    /*
    This is the first time that the default s2color colors got added to the brewscheme toolkit.
    The color references were added to brewextra.
     */
    { id : 44, content : 's2color added', start : '2016-01-10'},
    /*
    This refactoring of brewtheme and brewscheme made it possible to generate reasonable diffs between s2color and the
    schemes generated by brewscheme to identify where differences existed between the files.
     */
    { id : 45, content : 'Supporting diffs', start : '2016-01-10'},
    /*
    First attempt at fixing issues with contour plots
     */
    /* { id : 46, content : 'Identified issues<br>with contour plots', start : '2016-01-10'}, */
    /*
    Contour plot problem solved.  It was caused by `linepattern background blank` in one of the themefile settings and
    was fixed by replacing it with `linepattern background solid`.
     */
    { id : 47, content : 'Contour plot fixed', start : '2016-01-13'},
    /*
    Now the help for brewtheme starts to take on the modern view and starts to reference 50 distinct sub-help files which
    in turn point to references in the official documentation where applicable
     */
    { id : 48, content : 'brewtheme help restructured', start : '2016-02-25'},
    /*
    This is the point where all possible entries are finally finished being documented in the brewtheme helpfiles.
     */
    { id : 49, content : 'brewtheme help completed', start : '2016-03-12'},
    /*
    This was generic refactoring to standardize the apis across the toolkit
     */
    { id : 50, content : 'Standardizing options<br>across package', start : '2016-03-14'}
]);

var timeline4 = new vis.DataSet([
    { id : 'Stable', content : '<strong style="color: white !important;">Stable Brewscheme</strong>', start : '2016-03-21', end : '2016-04-10', type : 'background'},
    { id : 51, content : 'Version 1.0.0', start : '2016-03-21'},
    /*
        This introduced new methods to retrieve the color data based on accessing the data in Stata's memory from
        Mata, retrieving the set of records, and iterating over them to return the values.  This added the
        getPalette method to the brewcolors class to look up the values for the colors given a palette name and
        the number of colors for that specific palette.
     */
    { id : 52, content : 'Mata library updated', start : '2016-04-03'},
    /*
        These were a set of several example scripts used in the preparing of the SJ article.  There are scripts
        for nearly every .ado in the package along with an extensive set of comments.
     */
    { id : 53, content : 'Examples for programs added', start : '2016-04-05'}
]);

var timeline5 = new vis.DataSet([
    { id : 'Future', content : '<strong style="color: white !important;">Future Brewscheme</strong>', start : '2016-11-01', end : '2018-08-21', type : 'background'},
    /*
        This program was only added on the development branch, but is used to test the WCAG standards for color
        contrast ratios for web-based text.  It includes both the AA and AAA levels defined by the W3C.
        It is implemented as a Mata function and has an ado wrapper to interface with the Mata function and is included
        in libbrewscheme.
     */
    { id : 54, content : 'brewcontrastratio added', start : '2016-11-09'},
    /*
        This update would print the two colors being compared along with the tests for the WCAG standards.
     */
    { id : 55, content : 'brewcontrastratio updated', start : '2017-04-13'},
    /*
        Adjusted the font size for printing the RGB values in the graph and also fixed the error that was caused
        by too many colors being passed at once.
     */
    { id : 56, content : 'brewcbsim updated<br>for more colors', start : '2017-05-10' },
    /*
        Added new ado to replace the functionality of an old script to add color palettes from the University of Oregon.
     */
    { id : 57, content : 'brewmorepalettes added', start : '2017-08-03' },
    /*
    Can explain what happened with this part of the work and all that.
     */
    { id : 58, content : 'Dialog box<br>support started', start : '2018-08-04'}
]);


var options1 = {
    start : '2015-03-03',
    end : '2015-09-17',
    editable : false,
    zoomMin: 1000 * 60 * 60 * 24,
    zoomMax: 1000 * 60 * 60 * 24 * 7 * 28,
    maxHeight : 900,
    height: '115%',
    width: '95%',
    min : new Date(2015, 3, 3),
    max : new Date(2015, 9, 17),
    type : 'box',
    dataAttributes : [ 'id', 'content' ]
},
    options2 = {
        start : '2015-10-10',
        end : '2015-11-30',
        editable : false,
        zoomMin: 1000 * 60 * 60 * 24,
        zoomMax: 1000 * 60 * 60 * 24 * 50,
        maxHeight : 900,
        height: '115%',
        width: '95%',
        min : new Date(2015, 9, 9),
        max : new Date(2015, 10, 30),
        type : 'box',
        dataAttributes : [ 'id', 'content' ]
    },
    options3 = {
        start : '2015-10-20',
        end : '2016-04-05',
        editable : false,
        zoomMin: 1000 * 60 * 60 * 24,
        zoomMax: 1000 * 60 * 60 * 24 * 7 * 52,
        maxHeight : 900,
        height: '115%',
        width: '95%',
        min : new Date(2015, 9, 15),
        max : new Date(2016, 3, 5),
        type : 'box',
        dataAttributes : [ 'id', 'content' ]
    },
    options4 = {
        start : '2016-03-18',
        end : '2016-04-10',
        editable : false,
        zoomMin: 1000 * 60 * 60 * 24 * 2,
        zoomMax: 1000 * 60 * 60 * 24 * 7 * 36,
        maxHeight : 900,
        height: '115%',
        width: '95%',
        min : new Date(2016, 2, 10),
        max : new Date(2016, 4, 10),
        type : 'box',
        dataAttributes : [ 'id', 'content' ]
    },
    options5 = {
        hiddenDates : [
            { start : '2016-12-01', end : '2017-04-01' },
            { start : '2017-05-15', end : '2017-08-01' },
            { start : '2017-08-15', end : '2018-08-01' },
        ],
        start : '2016-11-01',
        end : '2019-07-12',
        editable : false,
        zoomMin: 1000 * 60 * 60 * 24 * 2,
        zoomMax: 1000 * 60 * 60 * 24 * 7 * 52 * 3,
        maxHeight : 900,
        height: '115%',
        width: '95%',
        min : new Date(2016, 9, 30),
        max : new Date(2018, 7, 20),
        type : 'box',
        dataAttributes : [ 'id', 'content' ]
    };

var t1 = new vis.Timeline(document.getElementById('timeline1'), timeline1, options1);
var t2 = new vis.Timeline(document.getElementById('timeline2'), timeline2, options2);
var t3 = new vis.Timeline(document.getElementById('timeline3'), timeline3, options3);
var t4 = new vis.Timeline(document.getElementById('timeline4'), timeline4, options4);
var t5 = new vis.Timeline(document.getElementById('timeline5'), timeline5, options5);

