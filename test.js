function getLetterNumber(input) {
    return input.toUpperCase().charCodeAt(0) - "A".charCodeAt(0); 
}

function createkey(inkeyword) {
    var keyword = ""
    for(var i = 0; i < inkeyword.length; i++) {
        if(keyword.indexOf(inkeyword[i].toUpperCase()) == -1) {
            keyword += inkeyword[i].toUpperCase();
        }  
    }

    var key = keyword;
    for (var i = "Z".charCodeAt(0); i >= "A".charCodeAt(0); i--) {
        var currentChar = String.fromCharCode(i);
        if(!keyword.includes(currentChar)) {
            key += currentChar;
        }

    }
    return key;
}

function decode(input) {
    var output = "";
    for(var i = 0; i < input.length; i++) {
        var index = getLetterNumber(input[i]);
        if(index < 0 || index >= 26) {
            output += input[i].toUpperCase();
        }
        else {
            output += key[index];
        }
    }
    return output;
}

function encode(input) {
    var output = "";
    for(var i = 0; i < input.length; i++) {
        var index = key.indexOf(input[i].toUpperCase());
        if(index < 0) {
            output += input[i].toUpperCase();
        }
        else {
            output += String.fromCharCode("A".charCodeAt(0) + index);
        }
    }
    return output;
}


var encoded = document.getElementById('encoded');
var decoded = document.getElementById('decoded');
var keytext = document.getElementById('keytext');

function onKeywordChange (val) {
    encoded = document.getElementById('encoded');
    decoded = document.getElementById('decoded');
    keytext = document.getElementById('keytext');

    key = createkey(val);
    keytext.innerHTML = key;

    decoded.innerHTML = decode(encoded.innerHTML);

}

var key = "teslabcdfghijkmnopqruvwxyz"

var puzzle2 = "BONCUAD YNPMBOF KCBDCAX B XTVKTCA DTVUC OAGC CN NJDK. CUAF BDA QTCCQA ZACCAD CUBO QNNCADK. BOF BDCTWBYCK CUAF WTOX CUAF KAQQ CN MDTIBCA YNQQAYCNDK WND AGNDZTCBOC MDTYAK. PBOF NW CUAP HTQQ OAIAD ZA KAAO ZF CUA VAOADBQ MJZQTY AIAD BVBTO. CUTK RTOX NW ZAUBITND TK JOBYYAMCBZQA, ONC SJKC WDNP B PNDBQ KCBOXMNTOC, ZJC WDNP B KYTAOCTWTY NOA BK HAQQ. ZF DAPNITOV CUAKA BDCTWBYCK WDNP CUA KTCA BOX KAQQTOV CUAP NWW MTAYAPABQ, IBQJBZQA TOWNDPBCTNO BZNJC CUA YNOCAGC BOX DAQBCTNOKUTMK ZACHAAO BDCTWBYCK TK QNKC, BOX NJD JOXADKCBOXTOV NW CUTK YTITQTEBCTNO TK KAIADAQF UTOXADAX.";
var puzzle15 = "CPYEF JEM E CPLWV YEF XPD RB. U XPLQY PLC CVEC RF ZPGGBEWLB EQY XDUBQY, REDS, MPGY MBKBDEG PX CVB EDCUXEZCM XDPR PLD GECBMC YUW CP ODUKECB ZPGGBZCPDM. CVUM JEM E ABCDEFEG PX BKBDFCVUQW JB MCEQY XPD EM E ZPROEQF EQY EM ODPXBMMUPQEGM UQ CVB XUBGY PX EDZVEBPGPWF. U ER ABFPQY YUMEOOPUQCBY UQ REDS'M EZCUPQM. VB SQBJ CVB UROPDCEQZB PX CVBMB EDCUXEZCM EQY CVB UROEZC CVEC MBGGUQW CVBR JPLGY VEKB. FBC, VB ZVPMB CP ODUPDUCUHB ODPXUC PKBD ODBMBDKECUPQ."
var puzzle34 = "NWVO CFK DVOZQLFGI VO NQQ VRAQGNBCN NQ NWF KQGSD NQ GVOT VN DVOBAAFBGVCX VCNQ OQRF AGVLBNF ZQSSFZNVQC CFLFG NQ EF OFFC BXBVC. V RMON YVCD B KBI NQ AGQNFZN VN YGQR RBGT BCD FCOMGF VN FCDO MA VC B ASBZF KWFGF VN ZBC EF AGQAFGSI ONMDVFD BCD NWF WVONQGI VN AGQLVDFO VO OWBGFD KVNW FLFGIQCF. NWFGF WBO NQ EF B KBI NQ XFN RBGT NQ OFF NWF FGGQG QY WVO KBIO."

var stringToEncode ="This new discovery is too important to the world to risk it disappearing into some private collection never to be seen again. I must find a way to protect it from Mark and ensure it ends up in a place where it can be properly studied and the history it provides is shared with everyone. There has to be a way to get Mark to see the error of his ways."
// stringToEncode = "Another company started a digsite right next to ours. They are little better than looters. Any artifacts they find they sell to private collectors for exorbitant prices. Many of them will never be seen by the general public ever again. This kind of behavior is unacceptable, not just from a moral standpoint, but from a scientific one as well. By removing these artifacts from the site and selling them off piecemeal, valuable information about the context and relationships between artifacts is lost, and our understanding of this civilization is severely hindered."
function myFunction () {
    decoded = document.getElementById('decoded');
    key = createkey("pandabear");
    decoded.innerHTML = encode(stringToEncode);
}

function puzzle2Function () {
    encoded = document.getElementById('encoded');
    encoded.innerHTML = puzzle2;

}

function puzzle15Function () {
    encoded = document.getElementById('encoded');
    encoded.innerHTML = puzzle15;

}

function puzzle34Function () {
    encoded = document.getElementById('encoded');
    encoded.innerHTML = puzzle34;

}

// encoded.innerHTML = "KMSZD";
