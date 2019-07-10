/*
    Defines the elements contained in each of the timeline visualizations.
    Added an attribute 'easterEgg' that is used to provide an URL to redirect end users to related content.
 */
var timeline1 = new vis.DataSet([
    { id : 'Init', content : '<strong style="color: white !important;">Initial Development of Brewscheme</strong>', start : '2015-05-03', end : '2015-09-17', type : 'background'},
    /*
        This is where everything began.
     */
    { id : 1, content : 'First Commit', start : '2015-05-03  07:50:21',
        title : 'I did not realize that I had already<br>included the Tableau color palettes<br>in this version until I started<br>working on these slides.',
        easterEgg : 'https://github.com/wbuchanan/brewscheme/commit/edf4be10b4e16d715cad51111a365d80000517a6' },
    /*
        Brewcolors adds named color styles from XKCD color survey
     */
    { id : 2, content : 'brewcolors added', start : '2015-05-18 15:24:35',
        title : 'Some of the interesting names of colors from XKCD:<br>booger, bland, dirty purple, baby shit brown, ugly brown,<br>baby puke green, browny orange, bile, &amp; almost black.',
        easterEgg : null },
    /*
        This is an instance where I forgot to generate a README until the program was already a few months old.
     */
    { id : 3, content : 'README added', start : '2015-07-31 07:19:18',
        title : 'Sometimes you start programming without<br>a README and then you fix it a bit later.',
        easterEgg : null  },
    /*
        This eventually makes it possible for end users to add palettes to brewscheme using a defined file spec
     */
    { id : 4, content : 'brewextra added', start : '2015-08-02 07:18:32',
        title : 'It is far from the perfect solution, but brewextra did<br>make it possible for end users to add palettes.',
        easterEgg : null  },
    /*
        Added new lookup method in brewscheme.ado; Now program uses file built by brewmeta.
        If brewmeta.dta does not exist, brewscheme builds the file first by calling brewmeta
        then the file is loaded and used to validate palette names and maximum colors available;
        this mechanism will be used to allow end users to eventually create customized palettes
        which can then be used by brewscheme for customized graph schemes.
     */
    { id : 5, content : 'brewscheme updated', start : '2015-08-17 04:34:43',
        title : 'This is when brewscheme stopped using hardcoded values for<br>the colorbrewer palettes and used brewmeta to do that instead.',
        easterEgg : null  },
    /*
        Refactored brewextra so it used the checkfilespec subroutine for all data added to the
        palette (e.g., including the extra palettes standard with the program); subroutine also
        drops any duplicates from the dataset to make sure there is always a consistent primary key.
     */
    { id : 6, content : 'brewextra updated', start : '2015-08-18 16:49:18',
        title : 'This added some QA/QC to the process by checking file specs<br>and ensuring a consistent primary key in the file.',
        easterEgg : null  },
    /*
        A bit of refactoring to parse the colorbrewer palettes in a separate sub routine
     */
    { id : 7, content : 'brewdb added', start : '2015-09-08 06:08:20',
        title : 'A new subroutine developed just to handle building the database of<br>palettes from colorbrewer.',
        easterEgg : null  },
    /*
    This is where brewmeta stopped being used to parse the colors from colorbrewer
     */
    { id : 8, content : 'brewmeta update', start : '2015-09-17 06:39:52',
        title : 'From this point on, brewmeta was no<br>longer used to parse the javascript<br>from the <a href="http://colorbrewer2.org/export/colorbrewer.js" target="_blank">colorbrewer</a> website.',
        easterEgg : null },
    /*
        Recycle function allowed a vector of values to be repeated an arbitrary number of times
     */
    { id : 9, content : 'Mata recycle added', start : '2015-09-17 06:44:51',
        title : 'Although it may have taken a while to start recycling<br>colors, this Mata function enabled later recycling of symbols too.',
        easterEgg : null  }
]);
var timeline2 = new vis.DataSet([
    { id : 'Alpha', content : '<strong style="color: white !important;">Alpha Brewscheme</strong>', start : '2015-10-14', end : '2015-11-23', type : 'background'},
    /*
        Added an additional return code to check what was happening here.
     */
    { id : 10, content : 'squashing file<br>path bugs', start : '2015-10-13 16:39:03', title : 'Apparently, there are multiple return codes used when a file<br>is not confirmed as new.  This added the 603 return<br>code to patch a bizarre OS bug.' },
    /*
        This was used to decouple responsibilities for testing/checking for the appropriate file path
     */
    { id : 11, content : 'dirfile added', start : '2015-10-14 12:14:48', title : 'I have a love hate relationship with this program.<br>It does the job, but definitely needs an update.' },
    /*
        Java plugin developed to handle generating interpolations in color space between a start and end point.
        Options from the ado file are all part of the underlying Java API.
     */
    { id : 12, content : 'brewterpolate added', start : '2015-10-26 11:30:59', title : 'Want to generate your own color ramps/palettes?<br>How would you do that?  brewterpolate was<br>created to make it fairly simple to generate<br>sequential color palettes.' },
    /*
        Added the different categorical color scales to the program at this point
     */
    { id : 13, content : 'D3.js palettes added', start : '2015-11-06 11:16:27', title : 'D3.js is popular and recognizable, so I added<br>some of their color palettes to brewscheme.' },
    /*
        Here is a case where the program is maintained in a separate repository, but bundled with brewscheme for the
        purposes of distribution
     */
    { id : 14, content : 'hextorgb added', start : '2015-11-06 11:16:27', title : 'Most descriptive program name ever.  States exactly what the program does and nothing else.' },
    /*
        Provides a palette previewer along the lines of a program named colorscheme developed by Matthieu Gomez
     */
    { id : 15, content : 'brewviewer added', start : '2015-11-07 10:36:32', title : 'Provides a way to view palettes in different ways and can<br>include color sight impaired translations of the colors.' },
    /*
        To me, this is one of the more important updates to the package.
     */
    { id : 16, content : 'brewtheme added', start : '2015-11-15 08:11:10', title : 'Finally, I started working on how to deal with other<br>aesthetics in visualizations beyond the marks themselves.' },
    /*
        Rewrote the start of brewtheme.  Now is closer to parallel in construction to the rest of
        brewscheme with a look up table used to verify arguments and write out the file. Includes
        new do file that builds a data set with all other values that users could modify safely
        (e.g., without breaking the scheme [hopefully]) and uses an interface around it to replace
        default values and write the dataset out to a theme file. Will need to modify brewscheme
        to read values from specified lines of the theme file.
     */
    { id : 17, content : 'brewtheme data added', start : '2015-11-16 06:57:12', title : 'It almost made it 24 hours without<br>being completely rewritten.' },
    /*
        Tested functionality using brewtheme.  With no theme argument the updated brewscheme
        replicates the same results that the previous version did.
     */
    { id : 18, content : 'brewtheme joins brewscheme', start : '2015-11-17 05:53:46', title : 'It may have been a bit early at this point to proclaim it<br>being alive, but it was definitely alive...and integrated.' },
    /*

     */
    { id : 19, content : 'ggplot2 palette added', start : '2015-11-18 04:49:10', title : 'I did this purely to put an end to the<br>flame how much better ggplot2 graphs look compared to Stata graphs.' },
    /*
        Built a database of named color styles from default Stata installation. Would subsequently
     */
    { id : 20, content : 'brewcolordb added', start : '2015-11-21 10:19:47', title : 'The initial version of this just creates a database of named colors from Stata.' },
    /*

    { id : 21, content : 'brewcolors added', start : '2015-11-21 10:19:47', title : 'This ' },
     */
    /*
    This may have been when the U Oregon color palettes got added as a standalone script
     */
    { id : 22, content : 'Palettes from<br>Uniiversity of Oregon<br>added', start : '2015-11-23 06:20:57', title : 'This was a standalone do file to parse<br>and load additional palettes; it was<br>eventually refactored into brewextra.' }
]);
var timeline3 = new vis.DataSet([
    { id : 'Beta', content : '<strong style="color: white !important;">Beta Brewscheme</strong>', start : '2015-11-24', end : '2016-03-20', type : 'background'},
    /*
    This defines the Mata class/methods used to do the color sight impairment simulations.
     */
    { id : 23, content : 'colorblind.mata added', start : '2015-11-24 07:48:24',
        title : 'A Mata class to simulate different forms of color sight impairments gets added.',
        easterEgg : null  },
    /*
    Program allows users to see how an individual colors appear to individuals with color sight impairments.  Required
    using RGB value.
     */
    { id : 24, content : 'brewcbsim added', start : '2015-11-25 05:01:58',
        title : 'This program allows users to see how different colors appear to individuals with different color sight impairments.',
        easterEgg : null  },
    /*
        This ends up helping some of the functionality later down the road begins to get developed
     */
    { id : 25, content : 'brewtransform added', start : '2015-11-25 14:30:51',
        title : 'This is used internally to generate the variables containing<br>the color sight impaired RGB values based on RGB values contaiend<br>in a variable.',
        easterEgg : null  },
    /*
        This ends up starting some refactoring that still has yet to be finished.
     */
    { id : 26, content : 'libbrewscheme added', start : '2015-11-25 16:30:53',
        title : 'Now the Mata code can be compiled into a library for better execution and later expansion.',
        easterEgg : null  },
    /*
        Finding named color styles and returning RGB values and color sight impaired values for the named color styles
     */
    { id : 27, content : 'brewsearch added', start : '2015-11-26 10:07:36',
        title : 'Now users can search for colors with those lovely names from XKCD<br>and get the RGB values for the original color and color<br>sight impaired values using the named color styles.',
        easterEgg : null  },
    /*
    This is essentially a previewer for existing color palettes that could also display color sight impaired versions
    of the existing palettes.
     */
    { id : 28, content : 'brewviewer updated', start : '2015-11-28 08:47:03',
        title : 'Of the many challenges with developing things over several years,<br>forgetting what the different updates were is probably one<br>of the more difficult issues to correct in the future.',
        easterEgg : null  },
    /*
    This was the beginning of starting to document all of the options/entries referenced by the brewtheme package.
     */
    { id : 29, content : 'brewtheme help', start : '2015-11-29 09:27:29',
        title : 'This is where the craziness that is the documentation for brewtheme began.',
        easterEgg : null  },
    /* This is when brewscheme started to think about adding colorblind simulated variants to the output.
    * This also is where an ad-hoc implementation of a singleton pattern in the mata class gets implemented.
    */
    { id : 30, content : 'brewscheme colorblind support started', start : '2015-11-30 06:09:39',
        title : 'Here is where I first started trying to figure out how to<br>make brewscheme a more useful tool for visualizations that would be<br>useful to individuals with color sight impairments.',
        easterEgg : null  },
    /*
    Now, brewcolordb would automatically build the database to include the color sight impaired simulated RGB values in
    the database.
     */
    { id : 31, content : 'brewcolordb automates CBsims', start : '2015-11-30 10:51:29',
        title : 'This update added to the underlying data model to include pre-translated colors that would only need to be looked up.',
        easterEgg : null  },
    /*
    The functionality was also added to take the named color styles from Stata and do the same with those color styles
    (e.g., create color sight impaired parallels of each one.
     */
    { id : 32, content : 'StataCorp colors translated', start : '2015-12-01 03:58:32',
        title : 'This was a fairly minor update, but provides color sight impaired versions of Stata colors.',
        easterEgg : null  },
    /*
    This is the first version where brewscheme would generate 5 scheme files automatically in order to create
    parallel schemes for each form of colorsight deficiency
     */
    { id : 33, content : 'colorblind schemes', start : '2015-12-01 05:18:12',
        title : 'It may not be clear to everyone, but brewscheme actually generates ',
        easterEgg : null  },
    /*
    brewproof allows users to proof their visualizations in order to see how it would appear to individuals
    with color sight impairments.
     */
    { id : 34, content : 'brewproof added', start : '2015-12-02 03:00:52',
        title : 'With this program, users can now see how their graph would<br>appear to users with any form of color-sight impairment.<br>If visualization is used to communicate to a wider audience<br>it makes sense to ensure everyone gets the same message.',
        easterEgg : null  },
    /*
    Lots of files for this one help file and the structure of the files was updated to make it hopefully a bit easier
    to read/view/use.
     */
    { id : 35, content : 'brewtheme help updated', start : '2015-12-02 04:22:36',
        title : 'This was one of several steps along the way of documenting brewtheme.',
        easterEgg : null  },
    /*
    This allowed a series of symbols to be repeated for the same length as the maximum number of colors specified in
    brewscheme.  Otherwise bizarre errors would be thrown if there would colors defined for say 7 layers, symbols defined
    for 3 layers, and the graph used 5 layers (e.g., tw scatter ... || scatter ... || scatter ... || scatter ... || scatter ...)
     */
    { id : 36, content : 'recycling symbols', start : '2015-12-11 05:58:38',
        title : 'Almost seven months after the initial presentation I finally got this implemented.',
        easterEgg : null  },
    /*
    This change was used to allow the program to automatically recompile the mata library based on whether or not the
    system file date was earlier than the distribution date of the mata library.
     */
    { id : 37, content : '<a href="https://github.com/wbuchanan/StataFileSystem">filesys</a> added', start : '2015-12-17 05:17:23',
        title : 'Here is another example of making a program a dependency that gets bundled but lives in its own repo.',
        easterEgg : null  },
    /*
    brewcbsim was now able to handle multiple colors including named color styles and quoted RGB strings.
     */
    { id : 38, content : 'brewcbsim updated', start : '2015-12-18 05:44:16',
        title : 'The initial version only allowed single colors and did not handle named colors, so I fixed it.',
        easterEgg : null  },
    /*
    Program used with filesys to check and trigger recompiling of mata library if needed
     */
    { id : 39, content : 'brewlibcheck added', start : '2015-12-18 05:53:44',
        title : 'Since I release all of the code I needed to have a way to ensure<br>the mata library was the most recent library.  This program<br>allowed me to automate compilation of the Mata<br>library on end users machines.',
        easterEgg : null  },
    /*
    Very early version of the article that eventually got submitted.
     */
    { id : 40, content : 'SJ Article started', start : '2016-01-05',
        title : 'I do not remember what changes happened here, but something did.',
        easterEgg : null  },
    /*
    This seems to have been primarily driven by fixing some reported/discovered bugs (issue 31).  The initial refactoring
    reduced the length of brewscheme from 1801 lines of code to 1485 lines of code.
     */
    { id : 41, content : 'brewscheme refactoring', start : '2016-01-07 05:02:19',
        title : 'This was a crazy little bug with a solution<br>that made the program shorter...by a<br>few hundred lines of code.',
        easterEgg : null  },
    /*
    First of several tracked revisions to Stata Journal article
     */
    { id : 42, content : 'SJ Article Updated', start : '2016-01-08 06:58:58',
        title : 'Once my full-time employment provides more opportunity<br>to work on research I will be able to work on this again.',
        easterEgg : null  },
    /*
    Updated to handle the brighter/darker methods in the underlying Java classes.
     */
    { id : 43, content : 'brewterpolate updated', start : '2016-01-09 09:05:42',
        title : 'Java can be challenging to work with at times.<br>This was not one of them, but it still took a<br>bit of time to figure out where things went wrong.',
        easterEgg : null  },
    /*
    This is the first time that the default s2color colors got added to the brewscheme toolkit.
    The color references were added to brewextra.
     */
    { id : 44, content : 's2color added', start : '2016-01-10 04:47:55',
        title : 'This entry is one reason why version control is awesome.<br>I have no recollection what-so-ever of adding s2color to<br>brewscheme, but thanks to this commit I know<br>that I did it at some point several years ago.',
        easterEgg : null  },
    /*
    This refactoring of brewtheme and brewscheme made it possible to generate reasonable diffs between s2color and the
    schemes generated by brewscheme to identify where differences existed between the files.
     */
    { id : 45, content : 'Supporting diffs', start : '2016-01-10 05:34:44',
        title : 'This was purely a way to help me debug changes.<br>It turns out that it can also be useful for identifying<br>what parameters to modify in a scheme file.',
        easterEgg : null  },
    /*
    First attempt at fixing issues with contour plots
     */
    { id : 46, content : 'Identified issues<br>with contour plots', start : '2016-01-10 06:57:47',
        title : 'Initially, the schemes produced by brewscheme did not<br>work as expected with contour plots.  This is where I finally<br>noticed that this was an issue and started working to figure out<br>how to fix it.',
        easterEgg : null },
    /*
    Contour plot problem solved.  It was caused by `linepattern background blank` in one of the themefile settings and
    was fixed by replacing it with `linepattern background solid`.
     */
    { id : 47, content : 'Contour plot fixed', start : '2016-01-13 14:29:18',
        title : 'I do not remember when I first noticed this, but I do<br>know that it took a significant amount of time<br>and work between tech support and I to squash this cockroach.',
        easterEgg : null  },
    /*
    Now the help for brewtheme starts to take on the modern view and starts to reference 50 distinct sub-help files which
    in turn point to references in the official documentation where applicable
     */
    { id : 48, content : 'brewtheme help restructured', start : '2016-02-25 06:24:09',
        title : 'So there are actually 50+ different helpfiles just for<br>brewtheme.  I am sure you can imagine how fun it was<br>to generate the documentation.',
        easterEgg : null  },
    /*
    This is the point where all possible entries are finally finished being documented in the brewtheme helpfiles.
     */
    { id : 49, content : 'brewtheme help completed', start : '2016-03-12 03:24:35',
        title : 'There are still a few entries that are not documented<br>(<em>to the best of my knowledge at least</em>),<br>but everything that is documented got links and<br>those elements that were not documented got line references<br>to their location in s2color.',
        easterEgg : null  },
    /*
    This was generic refactoring to standardize the apis across the toolkit
     */
    { id : 50, content : 'Standardizing options<br>across package', start : '2016-03-14 05:21:23',
        title : 'Sometimes it makes sense to have different option names across programs.<br>This was not one of those times and this is when I fixed it.',
        easterEgg : null  }
]);
var timeline4 = new vis.DataSet([
    { id : 'Stable', content : '<strong style="color: white !important;">Stable Brewscheme</strong>', start : '2016-03-21', end : '2016-04-10', type : 'background'},
    /*

     */
    { id : 51, content : 'Version 1.0.0', start : '2016-03-21 05:20:53',
        title : 'Finally a stable release.<br>If you are not familiar with semantic versioning<br>the numbers indicate Major.minor.patch releases.',
        easterEgg : null  },
    /*
        This introduced new methods to retrieve the color data based on accessing the data in Stata's memory from
        Mata, retrieving the set of records, and iterating over them to return the values.  This added the
        getPalette method to the brewcolors class to look up the values for the colors given a palette name and
        the number of colors for that specific palette.
     */
    { id : 52, content : 'Mata library updated', start : '2016-04-03 07:32:08',
        title : 'Remember during the talk I mentioned something about using Mata when/where possible?<br>This is far from the best example of when, where, <br>or why to use Mata, but it did use Mata nonetheless.',
        easterEgg : null  },
    /*
        These were a set of several example scripts used in the preparing of the SJ article.  There are scripts
        for nearly every .ado in the package along with an extensive set of comments.
     */
    { id : 53, content : 'Examples for programs added', start : '2016-04-05',
        title : 'When starting the SJ article I went a bit overboard.<br>I tried to show everything in a single article<br>and all of these examples are the result of it.',
        easterEgg : null  }
]);
var timeline5 = new vis.DataSet([
    { id : 'Future', content : '<strong style="color: white !important;">Future Brewscheme</strong>', start : '2016-11-01', end : '2018-08-10', type : 'background'},
    /*
        This program was only added on the development branch, but is used to test the WCAG standards for color
        contrast ratios for web-based text.  It includes both the AA and AAA levels defined by the W3C.
        It is implemented as a Mata function and has an ado wrapper to interface with the Mata function and is included
        in libbrewscheme.
     */
    { id : 54, content : 'brewcontrastratio<br>added', start : '2016-11-06 06:22:05', title : 'Have you ever had difficulty reading text on a website?<br>If you have it was probably due to low color<br>contrast between the font color and background color.<br>This was designed to help identify<br>those issues so you would know<br>if the text in your visualizations<br>could be easily read by end users.',
        easterEgg : null  },
    /*
        This update would print the two colors being compared along with the tests for the WCAG standards.
     */
    { id : 55, content : 'brewcontrastratio updated', start : '2017-04-13 12:36:56', title : 'This update just made it easier<br>to see the results.',
        easterEgg : null  },
    /*
        Adjusted the font size for printing the RGB values in the graph and also fixed the error that was caused
        by too many colors being passed at once.
     */
    { id : 56, content : 'brewcbsim updated<br>for more colors', start : '2017-05-10 17:24:18', title : 'With a ton of colors, this became<br>unreadable, so I adjusted some of the sizes.<br>Relative sizing of fonts in graphs<br>will hopefully be a Stata 17 thing.',
        easterEgg : null  },
    /*
        Added new ado to replace the functionality of an old script to add color palettes from the University of Oregon.
     */
    { id : 57, content : 'brewmorepalettes added', start : '2017-08-03 ', title : 'Instead of having a standalone do file<br>this command handles copying, parsing, and<br>adding some additional palettes fairly easy.',
        easterEgg : null  },
    /*
    Can explain what happened with this part of the work and all that.
     */
    { id : 58, content : 'Dialog box<br>support started', start : '2018-08-04 08:42:40', title : 'There is a reason this is still a <br>work in progress...<br>Dialog box programming in Stata<br>is anything but simple.',
        easterEgg : null  },
    /*
    I think this is when I first started to figure out a little bit about dialog box programming after a Statalist
    question from Sergey Radyakin that asked about some options that are documented in the undocumented help file.
     */
    { id : 59, content : 'Dialog box update', start : '2018-08-10 15:58:38', title : 'This is the first attempt at updating the dialog box work.<br>One major challenge is needing to define a fixed window size,<br>particularly when the number of options can vary based on arguments.',
        easterEgg : null  },
]);

/*
    Specifies the options objects for each of the timelines.
 */
var options1 = {
    start : '2015-03-03',
    end : '2015-09-17',
    editable : false,
    zoomMin: 1000 * 60 * 60,
    zoomMax: 1000 * 60 * 60 * 24 * 7 * 28,
    height: '90%',
    width: '90%',
    min : new Date(2015, 3, 3),
    max : new Date(2015, 9, 17),
    type : 'box',
    dataAttributes : [ 'id', 'content' ],
        tooltip : {
            followMouse : true,
            overflowMethod : 'cap'
        }
    },
    options2 = {
        start : '2015-10-10',
        end : '2015-11-30',
        editable : false,
        zoomMin: 1000 * 60 * 60,
        zoomMax: 1000 * 60 * 60 * 24 * 50,
        height: '90%',
        width: '90%',
        min : new Date(2015, 9, 9),
        max : new Date(2015, 10, 30),
        type : 'box',
        dataAttributes : [ 'id', 'content' ],
        tooltip : {
            followMouse : true,
            overflowMethod : 'cap'
        }
    },
    options3 = {
        start : '2015-10-20',
        end : '2016-04-05',
        editable : false,
        zoomMin: 1000 * 60 * 60,
        zoomMax: 1000 * 60 * 60 * 24 * 7 * 52,
        height: '90%',
        width: '90%',
        min : new Date(2015, 9, 15),
        max : new Date(2016, 3, 5),
        type : 'box',
        dataAttributes : [ 'id', 'content' ],
        tooltip : {
            followMouse : true,
            overflowMethod : 'cap'
        }
    },
    options4 = {
        start : '2016-03-18',
        end : '2016-04-10',
        editable : false,
        zoomMin: 1000 * 60 * 60,
        zoomMax: 1000 * 60 * 60 * 24 * 7 * 36,
        height: '90%',
        width: '90%',
        min : new Date(2016, 2, 10),
        max : new Date(2016, 3, 10),
        type : 'box',
        dataAttributes : [ 'id', 'content' ],
        tooltip : {
            followMouse : true,
            overflowMethod : 'cap'
        }
    },
    options5 = {
        start : '2016-07-01',
        end : '2018-12-04',
        editable : false,
        zoomMin: 1000 * 60 * 60,
        zoomMax: 1000 * 60 * 60 * 24 * 7 * 300,
        height: '90%',
        width: '90%',
        min : new Date(2016, 7, 30),
        max : new Date(2018, 9, 20),
        type : 'box',
        dataAttributes : [ 'id', 'content' ],
        tooltip : {
            followMouse : true,
            overflowMethod : 'cap'
        }
    };

/*
    Adds the timeline visualizations to the slide decks.
 */
var t1 = new vis.Timeline(document.getElementById('timeline1'), timeline1, options1);
var t2 = new vis.Timeline(document.getElementById('timeline2'), timeline2, options2);
var t3 = new vis.Timeline(document.getElementById('timeline3'), timeline3, options3);
var t4 = new vis.Timeline(document.getElementById('timeline4'), timeline4, options4);
var t5 = new vis.Timeline(document.getElementById('timeline5'), timeline5, options5);

/*
    This function is used to let the user know they've found some content that includes links/examples to other content.
    After displaying the alert the function will redirect the end user to the appropriate linked reference.
 */
function doubleClicker(timeline, properties) {
    var url = timeline._data[properties.item].easterEgg;
    if (url != null) {
        alert("Congrats! You've double clicked on an element with an easter egg.\nI'll redirect you to the related example/link/content now.");
        var easterEggLink = window.open(url, '_blank');
        easterEggLink.focus();
    }
}

/*
    This code sets all the doubleClick event listeners for the timelines in the slide deck.
 */
t1.on('doubleClick', function(properties) {
    doubleClicker(timeline1, properties);
});

t2.on('doubleClick', function(properties) {
    doubleClicker(timeline2, properties);
});

t3.on('doubleClick', function(properties) {
    doubleClicker(timeline3, properties);
});

t4.on('doubleClick', function(properties) {
    doubleClicker(timeline4, properties);
});

t5.on('doubleClick', function(properties) {
    doubleClicker(timeline5, properties);
});