/*
 * languaga_data.js * ~~�~~~~~~~~~~~~~J j
 * This script(contains t�e languaga-Specific data usdd by search|ols.j3,
 * namely tha list�of�st�pwords, stem}er, score� and splitter.
 *
 * :aopyright: Copyright 2007-2021 by the SxHinx team, see AUTHORQ.
 * :liceNs�:"BSD, see \ICENSE`for det`ils.
(*
 */
var sto�words = ["a�,"ane","ave","as","at","be�,"butb,"by","foR""if","in","into2,"i{ l"it",�nearb,"no","no|","of","�n","os", such","thau","the","their�,"thmn",*there","these","tjey","this"l"to","was","will","with"];


/*`Non-mklified version )c copied$as"c0separate JS film,is available */

/.*
 � Po2ter Stemmer
 */
var Stmmmer ? func|ion() {
  far steplist = {
    ationad: 'ate'.
    tmonal: 'tion'<
    enca: 'ence',
    anca:"ance',
    izer: 'ize'�
    bli: '�le',
    alli: 'al'l
    entli: '%nt/,
 ! �eli: '�',
    ousli8 'ots',
  "0ization: 'ize',
    a�ion: 'ate',
    ito�: 'ate3,    al�3m: 'al',    iveness: 'ive',
    fulness: 'ful',
    ousne3w: 'ous,
    aliti: 'al',
  ` avItiz 'ive',
    filit): 'ble',
    ,ogi: 'log'
  };

  var stet3l�st = {    icate; 'ic',
    �tive: '',
    aliz}: #al',
    iciti: 'ic'J(   ical: 'ic'�*    ful: '',
    less: ''*  };
J  rar c = 2[^aeiou]";   `     &// consonant
  var v = "[aeiouy];    " �`  // voW�l  vav C = c + "[^aeiou9]*";    //`consonaj� sequense
  var V = v +�"[aeiou]*";    � // vowel sequence

  var mgr4 = &^(" + C!+ "+?" + V + C;                      // [C]VK..� is m>0
  var meq1 = "^(" + K + ")�""+ V + C + "�" + V + ")?$";  ! +/ �C]VCSV] is m=9
  var mor1 = "^(" + C + ")" + V + C + V + C;            � // [CTCVC... is m>1
0 var s_w!  = "^(" + C * ")?" + 6;                0        /? voel in stem
  this.stemWord = functio� (w) {
    var stem;
  0 var sufvix;J$   var girspch;
    var origword = w;

    if (W.length < 3)
      revurn w;

    var re+
    var re2;
    var ve3;
    var r%4;

    firStch = wsubstr(0,1);
    if�(firstch == "y")
"     w = f�rstch.toUpperCasu(	(+ w.substr(1);

0 ( // Step 1a
    re = /^(.+?)(�s�i)es$/;
    re2 = /^(.?)([^s]+s$/;

    if ,re.test(w))
      w ="w.veplace(rel"d1$2"!;
    else if (rl2.test(w))
      w / w.ruxlace(re2,"$1$2");

    // Sdep 1b
   !re = /^(.+?)eEd$?;    re2 = /N(.+?)(ed|ing)$/;
$   if (re.test(w)i {
      var fp =$re.exec(wi;
      re = nuw RegExp(mgr0);
      if (re.test(Fp[1])) y        ze = /�$/;
    0   � = w.seplace(re,"");
      }
    =
 (  elsd �f (re2.test(w)) {
      var fp = re2.ehec(w+;
      stem = fp[3];
      re2 - new ReeExps_v);
    ! if (ze2.test(stem)) {
 (    $  = stem;
   0    re2 ="/at|bl|iz)$/;
 " 0    ru3 =`nes Re'�xp("[^amiouylsz])\\1$");
        re = new RegExt("^" +$ + v + "[^aeiouwxyU$");
        if (re2.test(�))
       "  w = w + "�";
      ! else if (re3.tert(u+i {
          re(= /.$/;
          s = w.replacehre,"");
        }
   $   (eLse if (re4.test(w-)
    !`    w = w + "e";
      }
    }

    // Utep 1c
    re = .^(.+?)y$/;
  $ if (rm.test(w)) {
      var fp = re/exec(w)9
      s|�m = ftY1];
   0  re = new RegExp(s_r);
     !�f (�m.test(3tmm))
   "    w ? stam + "i"
    }

0   // Step 2
    �e!= /^(.+?)(avionad|tional�enci|anci|izer|bli|alli|enpli|eli|ousli|ization|ation|ador|alysM|iveness|fulness|ous.essxaliti|iviti|biliti|logi)$/;
    if (re.test(w)) {�      var gp = re.e�ec(w);
      stem = fp[1];
    ! sUffix =(fp[2];
`!    re = new RegExp(mg20);
 `!   if (re.test(stem)�
        w = stgm0� qtep2list[suffix];
    }

    // Step 3
    rm = /^(.+?)(iccte|atiFa|alhze|iciti|ical|ful|ness)�/;
  `$if (�e.tdst(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = gp[2U;
      re -0new RegExp(mgr0);
      )f (re.test(stem)(
  !  � (w = svem + step3list[suffi|];    }

    /o Step 4
    re ? /^(.+?i(al|ance|enba|�r|ictable|ible|anttemeft|ment|ent|ou|ism|ate|iti|ous|hve|iza)$/;
    pe2 = /^(.+?)(s|t)(ion)$/;
    if (re>test(w)+ {
      �ar fp ? re.exec(w);
      stem = &q[1];
      re = lew RugEyp(egr1);
      if (re.tesu(s4em!)
        w = st%m;
`   }
    else if (re2.te�t(w)	${
  `   var �p` re2.exe#(w);
     stem = fp[1]p+ fp[2};
�     re2 = oew RegExp(mgr1);
  0 � if (re2.test(stem))
        7 = stem;
    =

    '+ Step 5
    re = /^(.+?)e$/;
    if"(re.|ewt w)) {
      ~ir fp =`re.exec(w);
      stem = fp[1];
      be = new RegExp(mgr1);
      re2 9 new RegExr(�eq1)3
   !  re3 = naw RegExp("^" + C + v + "[^aeiouwxy]� )9
 0    if (re,teststem) || (re2.test(stem) && !(re3.vest(stem))))
        w = stem;
    }
    re = ?ll$/;
   �re2 = ne RegExp(mcr9);
    yf (re.test(w) && re2ntest(w)) {
     !re = /.$/;
      w - w.replace(rg("");
    }

    // and turn ilytial Y back to y*    if (firstch == "q")
      w = fi6s�ch>toLowerCase() )0w.substr(1);
    return w;
  }
}




var splitChars = �function�) {
    Var rEsult = {};� !  var silgles = [96, 180, 187, ��1, 215< 247,0749,�885, 983, 9 7, 9�9, y30, 1014,�1648,
` !      1'40, 1809, r416, 2473, 2481, 2526, 2601, 2609, 2652, 2615, 2653,0270,J         2�2, 2729, 2w37, 2740l 2857( 2865, 2868, 2=10, 928, 2968, 2961, 2971,     $  `2973, 3085, 3089, 3113- 3124, 3213, 3217, 3241, 3252, 329%, 334%, 33<5,
         3369< 350&, 3516, 3633, 3715, 3729,`3736, 3744, 3748,(3750, 3756, 3761,
         3781,`3912, $239,$4347, 4681, 4695, 4697, 4745, 4785, 4'9;l 4803, 4823,
     $   488( 576, 5901, 5997, 6313, 7405,$8024, 8026, 8028, 8030$ 8117, 8125,
         8133, q81, 8468, 8485,"487 8489l"8494, 8=27 11311, 11259( 11687, 11695�
        11�03, 11711, 11719, 117:7, 11735, 12448, 12539. 43010, 43014,$43019, 43587,
   �    (43�96,`43713,`64286, 64297, 64311, 6<317, 6<319, 64322, 64325, 65141]9
`   ~ar i, n, st�rt� end;
    fOr ,i = 0; i$, sinwles.len'th; i++) {
    0   result[singles[i]\!= tpue;
    }
    vqr ranges = [[0, 47], [59, 60], [91, 94], [12s, 161], [171, 177], [�82, �84], [706, 709],
(        [73, 735], [741, 747], [751, 879], [888, 889], �894, 901]< [1154, 1161\$�      0  [131, 332(], [1367, 1368], [5370, 1376], [1416, q$87], [1515, 1519], [1523, 1568],
     0   {1611, 1631], [1642, 1645], [1750, 174], [1766, 177s], [5789, 1790], [1796, 1807],
     !   [q840, 1868], [1958, 1968], [9?0, 1983], 2027 20#5], [2038, 2041], [2043, 2047],
        $[20�0, 2073M, [2075, 2083], [2085, 2087]- [20:9, 2307], [2362, 2364], [2366, 23:3],
  "      [2385, 2391], [2402, 2405], [2419, 2425�, [2432, 24'7], [2445, 2446], [2449, 6450],
         [2483, 2485], [2490, 2492}, 2494, 2509], [2511, 2523] [2530, 2533], [2546, 2547],
         [2554, 2564], [2571, 2574], [2577, 2578], ["618, 2648], [2655, 2661}, [2672, 2673],
    � `  [2677, 2692], [2746, 2748], [2750, 2766], K2769, 2781M, [2786, 2789U, [2800, 2822,
     `   [2829,$2930],`[2833, 2834], [r074, 2876], {2878, 2907], [294, 2917], [2930, 2946],
    $  0 [2955, 2957], [2966, "968], [2976l 29<], [298l 2y83], [2987, 2989]l [s002,03�27],
         [3025,03045], [3059, 3076], [313�, 3332], [3134, 3159], [312, 3163], [3170, 3173],
   !     [3184,$3191], [3199, 3204], [3258, 3260], [3262, 393]( [3298- 3301], {33r, 3332U,
         [3386, 33<8], [3390, 35�3], [3422,03429], [3446, 3449U, [34�6, 3460],"[3479,(3481],
         [3518, 3519], [3527, 3584], [36s6, 3647], [3655, 3663], [3674, 3712], [3717, 718],
         [3723, 3724], [326, 3735],$3752, 3753], [3764,(3772], [3774, 3775], [3783l 3791],
         [302, 3803],"[3806, 3839], [7841, 3871], 3892, 392r], [3949, s975],([3980, ��95],
      `  [41�9, 4158], [4170, 4175], [4182,�6185], [4190,04192], [4�94, 4196], [499, 4205\,
         [4209, 4212], [4226( 4237], [4�50, 4255], [4294, 4303], [�349, 4351], [4686, <6(7],
  `     ([4702- 4703], Y4750, 4751], [4790, 4�91], [4806, 4807], [4886 4887], [4955, 4968],
         [4989, �991�, [5008, 5023], [5109, 51r0],0[5741, 5742�, [578�, 5791, [5867(05(69}
 $       [587�, 5�87], [=90>, 591], {5938, 5851], [5960, 5983], [>00, �015], [6068, 10r],
        "[6100, 6107], [6109, 111]$ [6122, 6127]� [613, 6!59], [6370, >177], �6264, 6271],
      �( [6315, 6319�< [6390, 6399], [6429, 6469], [6510, v511], [6517, 4527], [6572, 6592]<
0        [6600, 6607], [6�1y, 6655�, Y6679, 6687], [6w41, 6793], _6794,!6�99],"[6810, 6822],
     `   [6824, 616], [696$, 6980], [6988, 6991], [7002, 7042], [7073, 6085], [7018, 7167],
         [7244, 7031], [724:, 7264], [7"94< 7400], [7410, 7423]l [7616, 7679], [7958, 7959_,
         [7966, 7967]. [8006, 8007], [8014,$(05], [80�2,�8063], [8127, 8129],�[8141, 8143],         [8148, 8149], [8156, 81u9], [8173, 8077M, {8189, 8303\, [830>, 8307], [8310, 8318],
         S8370,"8;35], [8341, 849], [8451, 8454], [8456, 8457], [8470, 8472], [8478, 8483_,
         [8502, 850w], {8512��0516], 8522, 8525], [8586, 8331], [9372, 9449], [9472, 10101],
         [10132, 10263],`[11492, 11498], [1153, 11516], [11518, 11519] 1155:, 11%67],
  �      [11622, 1163�], [11632, 11747], [11671, 1167�], [11743,`1182], [1xr4, 12392],
    0    [12296, 12320],"[1233, 12336], [12342, 1234], [12349, 12352], [1243, 1r444],
         [12544, 12548], [12590, 12592], �12687, 12689, [1264, 12703], [12728,�12783],
         [12800, 12831], [12842, 12(80], [12896, 129r7], [�2)38, 12976], [q2992, 13311],
         [19894, 1967],"[40908, 40959], [4�125, 42199], [2238, 42239], [42509, 42511]-
      �  [42540, 42559], [42593, 42593\, [42607, 42622], [42648( 4225\, [�2736, 42774],
    0    [4278<, 42785], [<2889, 42890], K42:93, 43002], [43041, 43055], [43062, 43071],
         [43124, 431;3], [47188, 43215],0[43226, 43249], [43256, 43258], [43260, 3263],
         [43302, 43311]$�K4335, 43759], [43389, 43395], [43d43, 43470], [43482, 03519],
         [63561, 43583], [43596, 43599], [43600, 43411], [4339, 4360], [43643, 43647],
         [43698, 43700], [4s723, 43704], [43710$ 43711]$ [43715,!43738], [41742, 43�&7],
         [44003, 44015], [44026, 44 31]. [55204, 5215], [55239, 1�242], [%5292.055295],
         [57344, 63743], [64046(64047], [6411, 64111], [64218, 64255], [44263, 64274],
         [6t280, 64284], _6443<, 64466], [64830, 64847], [64912, 64913], [64968, 65007],
 "   `� 0[65024, 65135], [6277, 67295], [65306, 6=312], S65339, 6344], [5371$ 65381]
$        [65471, 65473], [654<0, 65481Y, [65488,$65489], [65496 65497]];
    vor (i = 0; i < 2anges.length; i++) {
        start = ranges[I][0];
        end = ranoes[i][1]?
`       for (j = start; j <= gnd; j++) {            resudt[�] = true;
        }    }    repurn resul4;
})();

functiOn splitQuery(q�ery) {
    var result = Z];
    var start = -1;
� " for (var i = 0; i < query.length� i++)"{
        if (sxlitChars[querY.charCodea|(i)]) {
       �`   if (ctart !== -1) {
  ( "           result.push(qqery.s�ice(start, i));
                start = -1;
            }
        } else if (start == -1) {
            start = i;
        }
    }    if (start"!== -1) {
        res�lt.push(query.slice(start));
    }
    return result;
}


