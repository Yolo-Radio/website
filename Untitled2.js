_oc=new DWObjectCode(0,4,1);
_oc1=new DWObjectCode(0,4,3);
_oc2=new DWObjectCode(0,4,11);
_oc3=new DWObjectCode(0,4,9);
_oc4=new DWObjectCode(0,4,6);
_oc5=new DWObjectCode(0,4,10);
_oc6=new DWObjectCode(0,4,5);
_oc7=new DWObjectCode(0,4,7);
var _DWPub = new DWPublication(2,"Untitled2",false,1,false);
DWVariables.instance().initPublication(_DWPub,'SCORE',0, 'SCORE_VALUE',0, 'SCORE_VALUE_TOTAL',0, 'SCORE_VALUE_PERCENT',0, 'SCORE_CORRECT',0, 'SCORE_INCORRECT',0, 'SCORE_TOTAL',0, 'SCORE_PERCENT',0, 'SCORE_TOTAL_POSSIBLE',0, 'SCORE_TOTAL_QUESTIONS',0, 'SCORE_CURRENT_POSSIBLE',0, 'Q_SCORE_VALUE',0, 'Q_SCORE_VALUE_TOTAL',0, 'Q_SCORE_VALUE_PERCENT',0, 'Q_SCORE_CORRECT',0, 'Q_SCORE_INCORRECT',0, 'Q_SCORE_TOTAL',0, 'Q_SCORE_TOTAL_POSSIBLE',0, 'Q_SCORE_TOTAL_QUESTIONS',0, 'Q_SCORE_ANSWERED_QUESTIONS',0, 'Q_SCORE_CURRENT_POSSIBLE',0, 'Q_SCORE_VALUE_POSSIBLE',0, 'Q_SCORE_VALUE_TOTAL_REMAINING',0, 'Q_SCORE_OVERALL_PERCENT',0, 'Q_SCORE_COURSE_SUMMARY',"", 'Q_SCORE_PERCENT_POSSIBLE',0, 'Q_SCORE_COURSE_FINISHED',"", 'Q_SCORE_COURSE_PASSED',"", 'Q_COURSE_ADMINISTRATOR',"", 'Q_COURSE_ADMINISTRATOR_EMAIL',"", 'Q_TOPIC_NAME',new Object, 'Q_TOPIC_PASS_VALUE',new Object, 'Q_TOPIC_CRITICAL_PASS',new Object, 'Q_TOPIC_CURRENT_VALUE',new Object, 'Q_TOPIC_CURRENT_PERCENT',new Object, 'Q_TOPIC_CURRENT_POSSIBLE',new Object, 'Q_TOPIC_TOTAL_POSSIBLE',new Object, 'Q_TOPIC_CORRECT',new Object, 'Q_TOPIC_INCORRECT',new Object, 'Q_TOPIC_ANSWERED_QUESTIONS',new Object, 'Q_TOPIC_TOTAL_QUESTIONS',new Object, 'Q_TOPIC_VALUE_TOTAL_REMAINING',new Object, 'Q_TOPIC_OVERALL_PERCENT',new Object, 'Q_TOPIC_PASSED',new Object, 'Q_TOPIC_FINISHED',new Object, 'CHAPTER_PASSWORD',"", 'PUBLICATION_TIME',0, 'SYSTEM_TIME_YEAR',0, 'SYSTEM_TIME_MONTH',0, 'SYSTEM_TIME_DATE',0, 'SYSTEM_TIME_DAY',0, 'SYSTEM_TIME_HOUR',0, 'SYSTEM_TIME_MINUTE',0, 'SYSTEM_TIME_SECOND',0, 'SYSTEM_TIME_12HOUR',0, 'SYSTEM_TIME_AMPM',0, 'SYSTEM_DATE_FULL',"", 'SYSTEM_WIN_DIR',"", 'SYSTEM_WINSYS_DIR',"", 'SYSTEM_DOCUMENTS_DIR',"", 'SYSTEM_PROGRAMS_DIR',"", 'SYSTEM_PROGRAMDATA_DIR',"", 'SYSTEM_USERNAME',"", 'SYSTEM_PUBLICATION_DIR',"", 'SYSTEM_CD_DRIVE',"", 'SYSTEM_TEMP_DIR',"", 'PUBLICATION_TITLE',"", 'PUBLICATION_PAGE_TITLE',"", 'SYSTEM_COLOUR_DEPTH',0, 'SYSTEM_SCREEN_RES_X',0, 'SYSTEM_SCREEN_RES_Y',0, 'SYSTEM_OPERATING_SYS',0, 'SYSTEM_HAS_SOUND',"", 'LOGIN_USER_NAME',"", 'LOGIN_LEVEL_VALUE',"", 'LOGIN_LEVEL_NAME',"", 'LOGIN_FIRSTNAME',"", 'LOGIN_SURNAME',"", 'LOGIN_LEARNER_ID',"", 'LOGIN_TUTOR',"", 'LOGIN_DEPT',"", 'LOGIN_MANAGER',"", 'LOGIN_ORGANIZATION',"", 'LOGIN_USER_EMAIL',"", 'LOGIN_SCORE_EMAIL',"", 'USER_VOL',0, 'RADIO_GROUP_1_ID',0, 'RADIO_GROUP_1_NAME',"", 'RADIO_GROUP_2_ID',0, 'RADIO_GROUP_2_NAME',"", 'RADIO_GROUP_3_ID',0, 'RADIO_GROUP_3_NAME',"", 'RADIO_GROUP_4_ID',0, 'RADIO_GROUP_4_NAME',"", 'userInput',"", 'ScaleDisplay',"00kg", 'userEdit',"click to edit me", 'IsPlaying',"false", 'chem2',"", 'chem3',"", 'chem4',"", 'chem5',"", 'chem6',"", 'chem1',"", 'anagAnswer',"", 'LMS_SCORE_RAW',0, 'LMS_SCORE_SCALED',0, 'LMS_COMPLETION_STATUS',0, 'LMS_LEARNER_ID',0, 'LMS_LEARNER_NAME',0, 'LMS_EXIT_MODE',0, 'LMS_MAX_TIME',0, 'LMS_LESSON_LOCATION',0, 'LMS_INITIALIZE_RETURN',0, 'LMS_COMMIT_RETURN',0, 'LMS_FINISH_RETURN',0, 'currPage',"home");
if(true){var topics = new Array(1);topics[0] = new DWCBTTopic('Topic 1', 100.000000, true, false);DWCBTManager.instance().initialise(topics, '', '', '');}
var Chapter_1 = new DWChapter();
Chapter_1.setObjectCode(new DWObjectCode(0,2,1));
_DWPub.addChild(Chapter_1);
_DWPub.HomePage=HomePage=new DWPage('HomePage',_oc,760,700,760,700,760,700,false,0,false);
Chapter_1.addChild(HomePage);
HomePage.setURL('Untitled2.htm');
_DWPub.AudioVideo=AudioVideo=new DWPage('AudioVideo',_oc1,760,700,760,700,760,700,false,1,false);
Chapter_1.addChild(AudioVideo);
AudioVideo.setURL('AudioVideo.htm');
_DWPub.YouTube=YouTube=new DWPage('YouTube',_oc2,760,700,760,700,760,700,false,2,false);
Chapter_1.addChild(YouTube);
YouTube.setURL('YouTube.htm');
_DWPub.Effects=Effects=new DWPage('Effects',_oc3,760,700,760,700,760,700,false,3,false);
Chapter_1.addChild(Effects);
Effects.setURL('Effects.htm');
_DWPub.Fonts=Fonts=new DWPage('Fonts',_oc4,760,700,760,700,760,700,false,4,false);
Chapter_1.addChild(Fonts);
Fonts.setURL('Fonts.htm');
var Chapter_2 = new DWChapter();
Chapter_2.setObjectCode(new DWObjectCode(0,2,2));
_DWPub.addChild(Chapter_2);
_DWPub.Overview=Overview=new DWPage('Overview',_oc5,760,1250,760,1250,760,1250,false,5,false);
Chapter_2.addChild(Overview);
Overview.setURL('Overview.htm');
_DWPub.Features=Features=new DWPage('Features',_oc6,760,1250,760,1250,760,1250,false,6,false);
Chapter_2.addChild(Features);
Features.setURL('Features.htm');
_DWPub.Animation=Animation=new DWPage('Animation',_oc7,760,1250,760,1250,760,1250,false,7,false);
Chapter_2.addChild(Animation);
Animation.setURL('Animation.htm');
_oc8=new DWObjectCode(1,10,44);
_c=new DWColour(166,202,240,1.0);
_pp=['M',208.944,-341.283,'L',-0.345,8.436,'L',262.065,-323.217,'C',244.985,-329.975,227.261,-336.010,208.944,-341.283,'L',208.944,-341.283,'M',-0.002,-335.701,'C',15.884,-335.701,31.567,-335.150,47.024,-334.119,'L',-0.345,8.436,'L',-37.011,-334.705,'C',-24.789,-335.369,-12.450,-335.701,-0.002,-335.701,'L',-0.002,-335.701,'M',100.723,-328.330,'C',106.970,-327.404,113.218,-326.408,119.423,-325.303,'L',-0.345,8.436,'L',100.723,-328.330,'M',316.631,-328.662,'C',325.192,-324.604,333.520,-320.330,341.691,-315.912,'L',-0.345,8.436,'L',316.631,-328.662,'M',353.277,-294.490,'C',355.548,-293.162,366.166,-286.135,368.406,-284.771,'L',233.641,-185.975,'L',353.277,-294.490,'M',405.009,-262.510,'C',412.337,-257.232,417.578,-248.064,424.434,-242.463,'L',-0.345,8.436,'L',405.009,-262.510,'M',436.601,-228.725,'C',445.850,-220.432,449.908,-208.936,458.079,-200.057,'L',-0.345,8.436,'L',436.601,-228.725,'M',463.207,-194.299,'C',467.788,-189.100,472.190,-183.791,476.350,-178.369,'L',187.614,-69.506,'L',463.207,-194.299,'M',447.508,-128.721,'C',456.799,-113.717,464.588,-98.119,470.758,-82.045,'L',-0.345,8.436,'L',447.508,-128.721,'M',485.984,-21.615,'C',487.178,-11.740,487.830,-1.705,487.830,8.400,'C',487.830,28.748,485.321,48.693,480.509,68.053,'L',-0.345,8.436,'L',485.984,-21.615,'M',433.749,166.014,'C',430.436,170.580,426.967,175.080,423.341,179.506,'L',117.382,53.229,'L',433.749,166.014,'M',440.328,223.623,'L',405.930,294.596,'L',-0.345,8.436,'L',440.328,223.623,'M',312.658,347.779,'L',251.998,350.826,'L',-0.345,8.436,'L',312.658,347.779,'M',234.332,346.967,'L',121.717,351.604,'L',-0.345,8.436,'L',234.332,346.967,'M',80.833,347.775,'C',74.363,348.514,67.846,349.217,61.256,349.807,'L',-0.345,8.436,'L',80.833,347.775,'M',-36.113,351.537,'C',-42.478,351.205,-48.803,350.795,-55.082,350.275,'L',-15.069,123.611,'L',-36.113,351.537,'M',-83.186,347.482,'L',-245.114,346.744,'L',-0.345,8.436,'L',-83.186,347.482,'M',-360.281,240.373,'C',-364.519,237.131,-368.640,233.779,-372.690,230.385,'L',-108.629,77.010,'L',-360.281,240.373,'M',-385.946,218.842,'C',-391.464,213.830,-396.779,208.666,-401.945,203.436,'L',-0.345,8.436,'L',-385.946,218.842,'M',-418.101,185.736,'C',-421.687,181.568,-425.117,177.334,-428.465,173.049,'L',-188.270,86.373,'L',-418.101,185.736,'M',-447.586,145.404,'C',-456.838,130.393,-464.623,114.838,-470.797,98.799,'L',-0.345,8.436,'L',-447.586,145.404,'M',-479.163,73.213,'C',-479.546,71.775,-479.928,70.338,-480.314,68.932,'L',-295.051,55.588,'L',-466.902,82.314,'L',-479.163,73.213,'M',-486.484,34.240,'C',-487.374,25.725,-487.830,17.100,-487.830,8.400,'C',-487.830,8.287,-487.830,8.213,-487.830,8.104,'L',-0.345,8.436,'L',-486.484,34.240,'M',-478.582,-58.557,'C',-470.211,-88.494,-456.339,-117.033,-437.725,-143.619,'L',-0.345,8.436,'L',-478.582,-58.557,'M',-408.267,-179.967,'C',-401.247,-187.525,-393.809,-194.865,-385.985,-202.014,'L',-0.345,8.436,'L',-408.267,-179.967,'M',-367.407,-217.943,'C',-365.096,-219.822,-362.779,-221.666,-360.398,-223.471,'L',-269.651,-162.822,'L',-367.407,-217.943,'M',-380.858,-290.998,'C',-371.957,-296.635,-362.736,-302.092,-353.296,-307.295,'L',-0.345,8.436,'L',-380.858,-290.998,'M',-333.309,-319.779,'C',-310.488,-331.838,-286.123,-342.490,-260.489,-351.604,'L',-0.345,8.436,'L',-333.309,-319.779,'M',-177.839,-323.193,'C',-172.243,-324.678,-166.620,-326.107,-160.950,-327.479,'L',-0.345,8.436,'L',-177.839,-323.193,'M',-142.469,-320.771,'C',-125.128,-324.494,-107.392,-327.553,-89.278,-329.912,'L',-0.345,8.436,'L',-142.469,-320.771];
var _br=new DWSolidBrush(_c);
var _pl=new DWPolygon(_br,null,null,_pp);
_oc9=new DWObjectCode(1,10,17);
_c1=new DWColour(0,0,255,0.0);
tr=new DWShapeTransition(1000,false).addBlock(0,0,1000,1000,2,1000,12,0,0,_c1,0,100 );
_c2=new DWColour(214,77,34,1.0);
_pp1=['M',-87.938,90.287,'L',-105.966,-111.792,'L',-106.643,-119.415,'L',-98.988,-119.415,'L',98.984,-119.415,'L',106.643,-119.415,'L',105.962,-111.792,'L',87.934,90.345,'L',87.456,95.204,'L',82.801,96.473,'L',1.808,118.936,'L',-0.056,119.415,'L',-1.893,118.936,'L',-82.851,96.473,'L',-87.514,95.145,'L',-87.938,90.287];
var _br1=new DWSolidBrush(_c2);
var _pl1=new DWPolygon(_br1,null,new DWPoint(-30.11,28.49),_pp1);
_c3=new DWColour(225,98,40,1.0);
_pp2=['M',-91.317,-105.123,'L',-74.413,84.498,'L',-0.068,105.123,'L',74.386,84.498,'L',91.317,-105.123,'L',-91.317,-105.123];
var _br2=new DWSolidBrush(_c3);
var _pl2=new DWPolygon(_br2,null,new DWPoint(-30.09,28.26),_pp2);
_pp3=['M',-45.636,-105.123,'L',-28.737,84.498,'L',45.609,105.123,'L',45.636,105.096,'L',45.636,-105.123,'L',-45.636,-105.123];
var _pl3=new DWPolygon(_br1,null,new DWPoint(-75.77,28.26),_pp3);
_c4=new DWColour(254,254,254,1.0);
_pp4=['M',-62.095,-70.206,'L',-55.397,4.771,'L',30.531,4.771,'L',27.678,36.897,'L',-0.041,44.407,'L',-27.624,36.951,'L',-29.488,16.298,'L',-54.381,16.298,'L',-50.851,56.105,'L',-0.041,70.206,'L',50.820,56.105,'L',57.658,-20.028,'L',-32.707,-20.028,'L',-34.999,-45.399,'L',59.834,-45.399,'L',59.861,-45.399,'L',62.095,-70.206,'L',-62.095,-70.206];
var _br3=new DWSolidBrush(_c4);
var _pl4=new DWPolygon(_br3,null,new DWPoint(-30.12,27.59),_pp4);
_c5=new DWColour(222,222,222,1.0);
_pp5=['M',-31.041,-70.206,'L',-24.343,4.771,'L',31.041,4.771,'L',31.041,-20.028,'L',-1.652,-20.028,'L',-3.945,-45.399,'L',31.041,-45.399,'L',31.041,-70.206,'L',-31.041,-70.206,'M',31.041,44.407,'L',31.014,44.407,'L',3.431,36.951,'L',1.567,16.298,'L',-23.327,16.298,'L',-19.797,56.105,'L',31.014,70.206,'L',31.041,70.206,'L',31.041,44.407];
var _br4=new DWSolidBrush(_c5);
var _pl5=new DWPolygon(_br4,null,new DWPoint(-61.18,27.59),_pp5);
_c6=new DWColour(255,255,255,1.0);
_pp6=['M',-22.066,-23.080,'L',-7.798,-23.080,'L',-7.798,-6.893,'L',7.739,-6.893,'L',7.739,-23.080,'L',22.066,-23.080,'L',22.066,23.080,'L',7.739,23.080,'L',7.739,4.405,'L',-7.798,4.405,'L',-7.798,23.080,'L',-22.066,23.080,'L',-22.066,-23.080];
var _br5=new DWSolidBrush(_c6);
var _pl6=new DWPolygon(_br5,null,new DWPoint(-98.91,-124.83),_pp6);
_pp7=['M',-21.673,-23.080,'L',21.673,-23.080,'L',21.673,-11.724,'L',7.152,-11.724,'L',7.152,23.080,'L',-7.148,23.080,'L',-7.148,-11.724,'L',-21.673,-11.724,'L',-21.673,-23.080];
var _pl7=new DWPolygon(_br5,null,new DWPoint(-48.93,-124.83),_pp7);
_pp8=['M',-25.966,-23.080,'L',-7.206,-23.080,'L',0.056,5.001,'L',7.179,-23.080,'L',25.966,-23.080,'L',25.966,23.080,'L',14.270,23.080,'L',14.270,-12.094,'L',5.283,23.080,'L',-5.283,23.080,'L',-14.266,-12.094,'L',-14.266,23.080,'L',-25.966,23.080,'L',-25.966,-23.080];
var _pl8=new DWPolygon(_br5,null,new DWPoint(4.96,-124.83),_pp8);
_pp9=['M',-18.267,-23.080,'L',-3.999,-23.080,'L',-3.999,11.693,'L',18.267,11.693,'L',18.267,23.080,'L',-18.267,23.080,'L',-18.267,-23.080];
var _pl9=new DWPolygon(_br5,null,new DWPoint(58.24,-124.83),_pp9);
_pp10=['M',-12.741,-3.759,'L',-3.797,-3.759,'L',-3.797,-12.752,'L',3.750,-12.752,'L',3.750,-3.759,'L',12.741,-3.759,'L',12.741,3.805,'L',3.750,3.805,'L',3.750,12.752,'L',-3.797,12.752,'L',-3.797,3.805,'L',-12.741,3.805,'L',-12.741,-3.759,'L',-12.741,-3.759,'L',-12.741,-3.759];
var _pl10=new DWPolygon(_br2,null,new DWPoint(124.01,-131.17),_pp10);
_pp11=['M',-12.741,-3.759,'L',-3.797,-3.759,'L',-3.797,-12.752,'L',3.750,-12.752,'L',3.750,-3.759,'L',12.741,-3.759,'L',12.741,3.805,'L',3.750,3.805,'L',3.750,12.752,'L',-3.797,12.752,'L',-3.797,3.805,'L',-12.741,3.805,'L',-12.741,-3.759,'L',-12.741,-3.759,'L',-12.741,-3.759];
var _pl11=new DWPolygon(_br2,null,new DWPoint(91.71,-131.17),_pp11);
_oc10=new DWObjectCode(1,4,63);
tr1=new DWScrollAngleTransition(1000,false).setParams(0.0,0,100,1.0,1.0);
_oc11=new DWObjectCode(1,4,64);
tr2=new DWShapeTransition(1000,false).addBlock(0,0,1000,1000,0,256,5,0,0,_c1,0,100 );
_oc12=new DWObjectCode(1,4,347);
_oc13=new DWObjectCode(1,1,33);
_oc14=new DWObjectCode(1,4,350);
_c7=new DWColour(0,0,0,0.3);
_oc15=new DWObjectCode(1,4,352);
_oc16=new DWObjectCode(1,4,361);
_oc17=new DWObjectCode(1,4,362);
_oc18=new DWObjectCode(1,4,353);
_oc19=new DWObjectCode(1,4,354);
_oc20=new DWObjectCode(1,4,351);
_c8=new DWColour(166,202,240,0.8);
_oc21=new DWObjectCode(1,4,355);
_oc22=new DWObjectCode(1,4,360);
_oc23=new DWObjectCode(1,4,562);
_oc24=new DWObjectCode(2,0,16);
_oc25=new DWObjectCode(1,10,440);
_c9=new DWColour(0,0,0,1.0);
_c10=new DWColour(30,97,164,1.0);
_c11=new DWColour(32,112,179,1.0);
_pp12=['M',-386.500,-47.815,'L',386.500,-47.815,'L',384.497,47.815,'C',286.007,21.383,-130.835,-1.912,-386.500,-1.600,'L',-386.500,-47.815];
var _br6=new DWLinearGradientBrush(7.85).addColourStop(0.10, _c9).addColourStop(1.00, _c10);
var _pn=new DWPen(_c11,3.0,2,2,0.0);
var _pl12=new DWPolygon(_br6,_pn,null,_pp12);
_oc26=new DWObjectCode(1,3,82);
_oc27=new DWObjectCode(1,10,447);
tr3=new DWRevealTransition(300,false).addBlock(0,0,1000,1000,0,0,1000,0,0,100,1.0,1.0,0);
tr4=new DWRevealTransition(150,true).addBlock(0,0,1000,1000,0,0,1000,0,0,100,1.0,1.0,0);
_c12=new DWColour(255,255,255,0.7);
_c13=new DWColour(131,154,176,0.7);
_c14=new DWColour(67,79,90,0.7);
_c15=new DWColour(4,16,26,0.7);
_pp13=['M',-33.625,-12.959,'L',33.459,-12.662,'L',33.625,12.959,'L',-33.625,12.959,'L',-33.625,-12.959];
var _br7=new DWLinearGradientBrush(7.87).addColourStop(0.07, _c12).addColourStop(0.34, _c13).addColourStop(0.54, _c14).addColourStop(0.98, _c15);
var _pl13=new DWPolygon(_br7,null,null,_pp13);
_oc28=new DWObjectCode(1,10,449);
_pp14=['M',-61.500,-15.375,'L',61.098,-11.765,'L',61.500,15.375,'C',26.305,13.360,-29.754,11.919,-61.500,11.749,'L',-61.500,-15.375];
var _br8=new DWLinearGradientBrush(7.87).addColourStop(0.07, _c12).addColourStop(0.36, _c13).addColourStop(0.54, _c14).addColourStop(0.98, _c15);
var _pl14=new DWPolygon(_br8,null,null,_pp14);
_oc29=new DWObjectCode(1,10,450);
_pp15=['M',-54.500,-14.875,'L',54.145,-11.383,'L',54.500,14.875,'C',23.309,13.896,-26.867,12.014,-54.500,11.364,'L',-54.500,-14.875];
var _br9=new DWLinearGradientBrush(7.89).addColourStop(0.07, _c12).addColourStop(0.37, _c13).addColourStop(0.54, _c14).addColourStop(0.98, _c15);
var _pl15=new DWPolygon(_br9,null,null,_pp15);
_oc30=new DWObjectCode(1,10,451);
_pp16=['M',-56.627,-16.625,'L',56.271,-11.508,'L',56.627,16.625,'C',25.705,15.621,-29.236,11.176,-56.627,10.504,'L',-56.627,-16.625];
var _br10=new DWLinearGradientBrush(7.91).addColourStop(0.11, _c12).addColourStop(0.39, _c13).addColourStop(0.54, _c14).addColourStop(0.98, _c15);
var _pl16=new DWPolygon(_br10,null,null,_pp16);
_oc31=new DWObjectCode(1,10,452);
_pp17=['M',-60.375,-18.375,'L',60.261,-10.296,'L',60.375,18.375,'C',31.436,15.536,-32.519,9.681,-60.375,8.991,'L',-60.375,-18.375];
var _br11=new DWLinearGradientBrush(7.92).addColourStop(0.11, _c12).addColourStop(0.42, _c13).addColourStop(0.54, _c14).addColourStop(0.98, _c15);
var _pl17=new DWPolygon(_br11,null,null,_pp17);
_oc32=new DWObjectCode(1,10,453);
_pp18=['M',-49.875,-18.875,'L',49.785,-11.017,'L',49.875,18.875,'C',25.977,16.112,-26.855,11.367,-49.875,8.988,'L',-49.875,-18.875];
var _br12=new DWLinearGradientBrush(7.92).addColourStop(0.07, _c12).addColourStop(0.38, _c13).addColourStop(0.54, _c14).addColourStop(0.98, _c15);
var _pl18=new DWPolygon(_br12,null,null,_pp18);
_oc33=new DWObjectCode(1,10,454);
_pp19=['M',-63.193,-25.248,'C',-19.665,-21.378,23.359,-13.388,62.084,-7.131,'C',62.233,-0.217,63.993,18.047,62.800,25.248,'C',40.353,19.163,-41.714,6.585,-63.039,4.876,'L',-63.193,-25.248];
var _br13=new DWLinearGradientBrush(7.96).addColourStop(0.15, _c12).addColourStop(0.40, _c13).addColourStop(0.54, _c14).addColourStop(0.98, _c15);
var _pl19=new DWPolygon(_br13,null,null,_pp19);
_oc34=new DWObjectCode(1,10,445);
_pp20=['M',383.583,25.041,'C',285.088,-1.389,-127.911,-25.350,-383.583,-25.041];
var _pn1=new DWPen(_c6,1.0,2,2,0.0);
var _pl20=new DWPolygon(null,_pn1,null,_pp20);
_oc35=new DWObjectCode(1,4,553);
_oc36=new DWObjectCode(1,4,554);
_oc37=new DWObjectCode(1,4,555);
_oc38=new DWObjectCode(1,4,556);
_oc39=new DWObjectCode(1,4,557);
_oc40=new DWObjectCode(1,4,558);
_oc41=new DWObjectCode(1,4,559);
_oc42=new DWObjectCode(1,4,560);
_c16=new DWColour(0,53,124,0.4);
_oc43=new DWObjectCode(1,10,446);
_c17=new DWColour(165,201,239,0.8);
_c18=new DWColour(72,85,98,1.0);
_c19=new DWColour(163,170,176,1.0);
_pp21=['M',-5.768,-0.318,'L',0.235,-7.787,'L',5.768,0.318,'L',-0.235,7.787,'L',-5.768,-0.318];
var _br14=new DWLinearGradientBrush(4.71).addColourStop(0.00, _c18).addColourStop(0.16, _c19).addColourStop(0.66, _c6);
var _pn2=new DWPen(_c6,1.0,2,2,0.0);
var _pl21=new DWPolygon(_br14,_pn2,null,_pp21);
_oc44=new DWObjectCode(1,10,458);
_pp22=['M',96.655,99.197,'L',111.438,99.197,'L',111.438,85.420,'L',96.655,85.420,'L',96.655,99.197,'M',81.308,99.197,'L',96.091,99.197,'L',96.091,85.420,'L',81.308,85.420,'L',81.308,99.197,'M',65.957,84.854,'L',80.740,84.854,'L',80.740,71.107,'L',65.957,71.107,'L',65.957,84.854,'M',65.957,99.197,'L',80.740,99.197,'L',80.740,85.420,'L',65.957,85.420,'L',65.957,99.197,'M',50.583,84.854,'L',65.393,84.854,'L',65.393,71.107,'L',50.583,71.107,'L',50.583,84.854,'M',50.583,99.197,'L',65.393,99.197,'L',65.393,85.420,'L',50.583,85.420,'L',50.583,99.197,'M',35.232,70.537,'L',50.014,70.537,'L',50.014,56.791,'L',35.232,56.791,'L',35.232,70.537,'M',35.232,84.854,'L',50.014,84.854,'L',50.014,71.107,'L',35.232,71.107,'L',35.232,84.854,'M',35.232,99.197,'L',50.014,99.197,'L',50.014,85.420,'L',35.232,85.420,'L',35.232,99.197,'M',19.885,70.537,'L',34.667,70.537,'L',34.667,56.791,'L',19.885,56.791,'L',19.885,70.537,'M',19.885,84.854,'L',34.667,84.854,'L',34.667,71.107,'L',19.885,71.107,'L',19.885,84.854,'M',19.885,99.197,'L',34.667,99.197,'L',34.667,85.420,'L',19.885,85.420,'L',19.885,99.197,'M',4.534,56.225,'L',19.320,56.225,'L',19.320,42.447,'L',4.534,42.447,'L',4.534,56.225,'M',4.534,70.537,'L',19.320,70.537,'L',19.320,56.791,'L',4.534,56.791,'L',4.534,70.537,'M',4.534,84.854,'L',19.320,84.854,'L',19.320,71.107,'L',4.534,71.107,'L',4.534,84.854,'M',4.534,99.197,'L',19.320,99.197,'L',19.320,85.420,'L',4.534,85.420,'L',4.534,99.197,'M',-10.813,41.881,'L',3.969,41.881,'L',3.969,28.131,'L',-10.813,28.131,'L',-10.813,41.881,'M',-10.813,56.225,'L',3.969,56.225,'L',3.969,42.447,'L',-10.813,42.447,'L',-10.813,56.225,'M',-10.813,70.537,'L',3.969,70.537,'L',3.969,56.791,'L',-10.813,56.791,'L',-10.813,70.537,'M',-10.813,84.854,'L',3.969,84.854,'L',3.969,71.107,'L',-10.813,71.107,'L',-10.813,84.854,'M',-10.813,99.197,'L',3.969,99.197,'L',3.969,85.420,'L',-10.813,85.420,'L',-10.813,99.197,'M',-26.161,41.881,'L',-11.378,41.881,'L',-11.378,28.131,'L',-26.161,28.131,'L',-26.161,41.881,'M',-26.161,56.225,'L',-11.378,56.225,'L',-11.378,42.447,'L',-26.161,42.447,'L',-26.161,56.225,'M',-26.161,70.537,'L',-11.378,70.537,'L',-11.378,56.791,'L',-26.161,56.791,'L',-26.161,70.537,'M',-26.161,84.854,'L',-11.378,84.854,'L',-11.378,71.107,'L',-26.161,71.107,'L',-26.161,84.854,'M',-26.161,99.197,'L',-11.378,99.197,'L',-11.378,85.420,'L',-26.161,85.420,'L',-26.161,99.197,'M',-41.512,27.564,'L',-26.729,27.564,'L',-26.729,13.818,'L',-41.512,13.818,'L',-41.512,27.564,'M',-41.512,41.881,'L',-26.729,41.881,'L',-26.729,28.131,'L',-41.512,28.131,'L',-41.512,41.881,'M',-41.512,56.225,'L',-26.729,56.225,'L',-26.729,42.447,'L',-41.512,42.447,'L',-41.512,56.225,'M',-41.512,70.537,'L',-26.729,70.537,'L',-26.729,56.791,'L',-41.512,56.791,'L',-41.512,70.537,'M',-41.512,84.854,'L',-26.729,84.854,'L',-26.729,71.107,'L',-41.512,71.107,'L',-41.512,84.854,'M',-41.512,99.197,'L',-26.729,99.197,'L',-26.729,85.420,'L',-41.512,85.420,'L',-41.512,99.197,'M',-56.859,13.252,'L',-42.076,13.252,'L',-42.076,-0.525,'L',-56.859,-0.525,'L',-56.859,13.252,'M',-56.859,27.564,'L',-42.076,27.564,'L',-42.076,13.818,'L',-56.859,13.818,'L',-56.859,27.564,'M',-56.859,41.881,'L',-42.076,41.881,'L',-42.076,28.131,'L',-56.859,28.131,'L',-56.859,41.881,'M',-56.859,56.225,'L',-42.076,56.225,'L',-42.076,42.447,'L',-56.859,42.447,'L',-56.859,56.225,'M',-56.859,70.537,'L',-42.076,70.537,'L',-42.076,56.791,'L',-56.859,56.791,'L',-56.859,70.537,'M',-56.859,84.854,'L',-42.076,84.854,'L',-42.076,71.107,'L',-56.859,71.107,'L',-56.859,84.854,'M',-56.859,99.197,'L',-42.076,99.197,'L',-42.076,85.420,'L',-56.859,85.420,'L',-56.859,99.197,'M',-72.206,-29.721,'L',-57.423,-29.721,'L',-57.423,-43.498,'L',-72.206,-43.498,'L',-72.206,-29.721,'M',-72.206,-15.408,'L',-57.423,-15.408,'L',-57.423,-29.154,'L',-72.206,-29.154,'L',-72.206,-15.408,'M',-72.206,-1.092,'L',-57.423,-1.092,'L',-57.423,-14.842,'L',-72.206,-14.842,'L',-72.206,-1.092,'M',-72.206,13.252,'L',-57.423,13.252,'L',-57.423,-0.525,'L',-72.206,-0.525,'L',-72.206,13.252,'M',-72.206,27.564,'L',-57.423,27.564,'L',-57.423,13.818,'L',-72.206,13.818,'L',-72.206,27.564,'M',-72.206,41.881,'L',-57.423,41.881,'L',-57.423,28.131,'L',-72.206,28.131,'L',-72.206,41.881,'M',-72.206,56.225,'L',-57.423,56.225,'L',-57.423,42.447,'L',-72.206,42.447,'L',-72.206,56.225,'M',-72.206,70.537,'L',-57.423,70.537,'L',-57.423,56.791,'L',-72.206,56.791,'L',-72.206,70.537,'M',-72.206,84.854,'L',-57.423,84.854,'L',-57.423,71.107,'L',-72.206,71.107,'L',-72.206,84.854,'M',-72.206,99.197,'L',-57.423,99.197,'L',-57.423,85.420,'L',-72.206,85.420,'L',-72.206,99.197,'M',-87.557,-29.721,'L',-72.774,-29.721,'L',-72.774,-43.498,'L',-87.557,-43.498,'L',-87.557,-29.721,'M',-87.557,-15.408,'L',-72.774,-15.408,'L',-72.774,-29.154,'L',-87.557,-29.154,'L',-87.557,-15.408,'M',-87.557,-1.092,'L',-72.774,-1.092,'L',-72.774,-14.842,'L',-87.557,-14.842,'L',-87.557,-1.092,'M',-87.557,13.252,'L',-72.774,13.252,'L',-72.774,-0.525,'L',-87.557,-0.525,'L',-87.557,13.252,'M',-87.557,27.564,'L',-72.774,27.564,'L',-72.774,13.818,'L',-87.557,13.818,'L',-87.557,27.564,'M',-87.557,41.881,'L',-72.774,41.881,'L',-72.774,28.131,'L',-87.557,28.131,'L',-87.557,41.881,'M',-87.557,56.225,'L',-72.774,56.225,'L',-72.774,42.447,'L',-87.557,42.447,'L',-87.557,56.225,'M',-87.557,70.537,'L',-72.774,70.537,'L',-72.774,56.791,'L',-87.557,56.791,'L',-87.557,70.537,'M',-87.557,84.854,'L',-72.774,84.854,'L',-72.774,71.107,'L',-87.557,71.107,'L',-87.557,84.854,'M',-87.557,99.197,'L',-72.774,99.197,'L',-72.774,85.420,'L',-87.557,85.420,'L',-87.557,99.197,'M',-102.904,-44.064,'L',-88.121,-44.064,'L',-88.121,-57.814,'L',-102.904,-57.814,'L',-102.904,-44.064,'M',-102.904,-29.721,'L',-88.121,-29.721,'L',-88.121,-43.498,'L',-102.904,-43.498,'L',-102.904,-29.721,'M',-102.904,-15.408,'L',-88.121,-15.408,'L',-88.121,-29.154,'L',-102.904,-29.154,'L',-102.904,-15.408,'M',-102.904,-1.092,'L',-88.121,-1.092,'L',-88.121,-14.842,'L',-102.904,-14.842,'L',-102.904,-1.092,'M',-102.904,13.252,'L',-88.121,13.252,'L',-88.121,-0.525,'L',-102.904,-0.525,'L',-102.904,13.252,'M',-102.904,27.564,'L',-88.121,27.564,'L',-88.121,13.818,'L',-102.904,13.818,'L',-102.904,27.564,'M',-102.904,41.881,'L',-88.121,41.881,'L',-88.121,28.131,'L',-102.904,28.131,'L',-102.904,41.881,'M',-102.904,56.225,'L',-88.121,56.225,'L',-88.121,42.447,'L',-102.904,42.447,'L',-102.904,56.225,'M',-102.904,70.537,'L',-88.121,70.537,'L',-88.121,56.791,'L',-102.904,56.791,'L',-102.904,70.537,'M',-102.904,84.854,'L',-88.121,84.854,'L',-88.121,71.107,'L',-102.904,71.107,'L',-102.904,84.854,'M',-102.904,99.197,'L',-88.121,99.197,'L',-88.121,85.420,'L',-102.904,85.420,'L',-102.904,99.197,'M',-118.255,-58.381,'L',-103.468,-58.381,'L',-103.468,-72.127,'L',-118.255,-72.127,'L',-118.255,-58.381,'M',-118.255,-44.064,'L',-103.468,-44.064,'L',-103.468,-57.814,'L',-118.255,-57.814,'L',-118.255,-44.064,'M',-118.255,-29.721,'L',-103.468,-29.721,'L',-103.468,-43.498,'L',-118.255,-43.498,'L',-118.255,-29.721,'M',-118.255,-15.408,'L',-103.468,-15.408,'L',-103.468,-29.154,'L',-118.255,-29.154,'L',-118.255,-15.408,'M',-118.255,-1.092,'L',-103.468,-1.092,'L',-103.468,-14.842,'L',-118.255,-14.842,'L',-118.255,-1.092,'M',-118.255,13.252,'L',-103.468,13.252,'L',-103.468,-0.525,'L',-118.255,-0.525,'L',-118.255,13.252,'M',-118.255,27.564,'L',-103.468,27.564,'L',-103.468,13.818,'L',-118.255,13.818,'L',-118.255,27.564,'M',-118.255,41.881,'L',-103.468,41.881,'L',-103.468,28.131,'L',-118.255,28.131,'L',-118.255,41.881,'M',-118.255,56.225,'L',-103.468,56.225,'L',-103.468,42.447,'L',-118.255,42.447,'L',-118.255,56.225,'M',-118.255,70.537,'L',-103.468,70.537,'L',-103.468,56.791,'L',-118.255,56.791,'L',-118.255,70.537,'M',-118.255,84.854,'L',-103.468,84.854,'L',-103.468,71.107,'L',-118.255,71.107,'L',-118.255,84.854,'M',-118.255,99.197,'L',-103.468,99.197,'L',-103.468,85.420,'L',-118.255,85.420,'L',-118.255,99.197,'M',-133.602,-58.381,'L',-118.819,-58.381,'L',-118.819,-72.127,'L',-133.602,-72.127,'L',-133.602,-58.381,'M',-133.602,-44.064,'L',-118.819,-44.064,'L',-118.819,-57.814,'L',-133.602,-57.814,'L',-133.602,-44.064,'M',-133.602,-29.721,'L',-118.819,-29.721,'L',-118.819,-43.498,'L',-133.602,-43.498,'L',-133.602,-29.721,'M',-133.602,-15.408,'L',-118.819,-15.408,'L',-118.819,-29.154,'L',-133.602,-29.154,'L',-133.602,-15.408,'M',-133.602,-1.092,'L',-118.819,-1.092,'L',-118.819,-14.842,'L',-133.602,-14.842,'L',-133.602,-1.092,'M',-133.602,13.252,'L',-118.819,13.252,'L',-118.819,-0.525,'L',-133.602,-0.525,'L',-133.602,13.252,'M',-133.602,27.564,'L',-118.819,27.564,'L',-118.819,13.818,'L',-133.602,13.818,'L',-133.602,27.564,'M',-133.602,41.881,'L',-118.819,41.881,'L',-118.819,28.131,'L',-133.602,28.131,'L',-133.602,41.881,'M',-133.602,56.225,'L',-118.819,56.225,'L',-118.819,42.447,'L',-133.602,42.447,'L',-133.602,56.225,'M',-133.602,70.537,'L',-118.819,70.537,'L',-118.819,56.791,'L',-133.602,56.791,'L',-133.602,70.537,'M',-133.602,84.854,'L',-118.819,84.854,'L',-118.819,71.107,'L',-133.602,71.107,'L',-133.602,84.854,'M',-133.602,99.197,'L',-118.819,99.197,'L',-118.819,85.420,'L',-133.602,85.420,'L',-133.602,99.197,'M',-148.949,-72.693,'L',-134.167,-72.693,'L',-134.167,-86.471,'L',-148.949,-86.471,'L',-148.949,-72.693,'M',-148.949,-58.381,'L',-134.167,-58.381,'L',-134.167,-72.127,'L',-148.949,-72.127,'L',-148.949,-58.381,'M',-148.949,-44.064,'L',-134.167,-44.064,'L',-134.167,-57.814,'L',-148.949,-57.814,'L',-148.949,-44.064,'M',-148.949,-29.721,'L',-134.167,-29.721,'L',-134.167,-43.498,'L',-148.949,-43.498,'L',-148.949,-29.721,'M',-148.949,-15.408,'L',-134.167,-15.408,'L',-134.167,-29.154,'L',-148.949,-29.154,'L',-148.949,-15.408,'M',-148.949,-1.092,'L',-134.167,-1.092,'L',-134.167,-14.842,'L',-148.949,-14.842,'L',-148.949,-1.092,'M',-148.949,13.252,'L',-134.167,13.252,'L',-134.167,-0.525,'L',-148.949,-0.525,'L',-148.949,13.252,'M',-148.949,27.564,'L',-134.167,27.564,'L',-134.167,13.818,'L',-148.949,13.818,'L',-148.949,27.564,'M',-148.949,41.881,'L',-134.167,41.881,'L',-134.167,28.131,'L',-148.949,28.131,'L',-148.949,41.881,'M',-148.949,56.225,'L',-134.167,56.225,'L',-134.167,42.447,'L',-148.949,42.447,'L',-148.949,56.225,'M',-148.949,70.537,'L',-134.167,70.537,'L',-134.167,56.791,'L',-148.949,56.791,'L',-148.949,70.537,'M',-148.949,84.854,'L',-134.167,84.854,'L',-134.167,71.107,'L',-148.949,71.107,'L',-148.949,84.854,'M',-148.949,99.197,'L',-134.167,99.197,'L',-134.167,85.420,'L',-148.949,85.420,'L',-148.949,99.197,'M',149.514,99.764,'L',-149.514,99.764,'L',-149.514,-99.764,'C',-149.319,-99.682,-149.148,-99.568,-148.949,-99.482,'L',-148.949,-87.037,'L',-134.167,-87.037,'L',-134.167,-93.244,'C',-133.968,-93.131,-133.801,-93.018,-133.602,-92.936,'L',-133.602,-87.037,'L',-124.951,-87.037,'C',-124.640,-86.838,-124.360,-86.643,-124.048,-86.471,'L',-133.602,-86.471,'L',-133.602,-72.693,'L',-118.819,-72.693,'L',-118.819,-83.807,'C',-118.621,-83.693,-118.450,-83.607,-118.255,-83.521,'L',-118.255,-72.693,'L',-103.468,-72.693,'L',-103.468,-75.416,'C',-103.274,-75.275,-103.102,-75.104,-102.904,-74.963,'L',-102.904,-72.693,'L',-98.723,-72.693,'C',-98.127,-72.467,-97.504,-72.299,-96.854,-72.127,'L',-102.904,-72.127,'L',-102.904,-58.381,'L',-88.121,-58.381,'L',-88.121,-65.553,'C',-87.923,-65.467,-87.755,-65.381,-87.557,-65.295,'L',-87.557,-58.381,'L',-77.181,-58.381,'C',-76.956,-58.295,-76.757,-58.182,-76.531,-58.096,'C',-76.364,-58.010,-76.192,-57.896,-76.025,-57.814,'L',-87.557,-57.814,'L',-87.557,-44.064,'L',-72.774,-44.064,'L',-72.774,-56.025,'C',-72.576,-55.885,-72.404,-55.717,-72.206,-55.572,'L',-72.206,-44.064,'L',-57.423,-44.064,'L',-57.423,-44.123,'C',-57.225,-43.896,-57.057,-43.670,-56.859,-43.412,'L',-56.859,-29.721,'L',-48.632,-29.721,'C',-48.492,-29.553,-48.352,-29.354,-48.208,-29.154,'L',-56.859,-29.154,'L',-56.859,-15.408,'L',-43.968,-15.408,'C',-43.855,-15.209,-43.742,-15.037,-43.629,-14.842,'L',-56.859,-14.842,'L',-56.859,-1.092,'L',-42.076,-1.092,'L',-42.076,-12.658,'C',-41.936,-12.518,-41.823,-12.373,-41.679,-12.205,'L',-41.512,-1.092,'L',-35.633,-1.092,'C',-35.520,-0.893,-35.403,-0.697,-35.263,-0.525,'L',-41.512,-0.525,'L',-41.512,13.252,'L',-26.729,13.252,'L',-26.729,9.338,'C',-26.530,9.482,-26.332,9.623,-26.161,9.736,'L',-26.161,13.252,'L',-19.238,13.252,'C',-18.927,13.451,-18.615,13.619,-18.304,13.818,'L',-26.161,13.818,'L',-26.161,27.564,'L',-11.378,27.564,'L',-11.378,16.596,'C',-11.179,16.709,-10.985,16.850,-10.813,16.963,'L',-10.813,27.564,'L',3.969,27.564,'L',3.969,25.611,'C',4.168,25.807,4.366,26.006,4.534,26.178,'L',4.534,27.564,'L',5.920,27.564,'C',6.145,27.764,6.371,27.936,6.597,28.131,'L',4.534,28.131,'L',4.534,41.881,'L',19.320,41.881,'L',19.320,36.295,'C',19.515,36.439,19.713,36.580,19.885,36.721,'L',19.885,41.881,'L',28.761,41.881,'C',29.069,42.080,29.380,42.279,29.719,42.447,'L',19.885,42.447,'L',19.885,56.225,'L',34.667,56.225,'L',34.667,46.076,'C',34.866,46.189,35.064,46.275,35.232,46.361,'L',35.232,56.225,'L',50.014,56.225,'L',50.014,53.107,'C',50.213,53.221,50.411,53.334,50.583,53.447,'L',50.583,56.225,'L',54.877,56.225,'C',55.274,56.424,55.667,56.619,56.092,56.791,'L',50.583,56.791,'L',50.583,70.537,'L',65.393,70.537,'L',65.393,60.900,'C',65.564,60.986,65.759,61.100,65.957,61.186,'L',65.957,70.537,'L',80.740,70.537,'L',80.740,65.721,'L',81.308,65.861,'L',81.308,70.537,'L',93.206,70.537,'C',93.459,70.736,93.716,70.908,93.996,71.107,'L',81.308,71.107,'L',81.308,84.854,'L',96.091,84.854,'L',96.091,72.381,'C',96.258,72.521,96.457,72.693,96.655,72.834,'L',96.655,84.854,'L',111.438,84.854,'L',111.438,82.842,'C',111.609,82.928,111.804,83.010,112.002,83.068,'L',112.002,84.854,'L',115.425,84.854,'C',115.849,85.080,116.273,85.252,116.725,85.420,'L',112.002,85.420,'L',112.002,99.197,'L',126.785,99.197,'L',126.785,88.029,'C',126.956,88.084,127.155,88.143,127.353,88.197,'L',127.353,99.197,'L',142.136,99.197,'L',142.136,90.381,'C',142.303,90.721,142.502,91.033,142.701,91.346,'L',142.701,99.197,'L',149.062,99.197,'C',149.202,99.365,149.342,99.564,149.514,99.764,'L',149.514,99.764];
var _br15=new DWSolidBrush(_c);
var _pl22=new DWPolygon(_br15,null,null,_pp22);

HomePage.init('HomePageD',function(){var p = this;p.rayBak=new DWVector('rayBakD',_oc8,'rayBak',355.5,354.0,977,704);
p.html5_logo=new DWVector('html5_logoD',_oc9,'html5 logo',411.5,315.5,275,297);
p.OPUS_CREATOR=new DWText('OPUS_CREATORD',_oc10,'OPUS CREATOR',390.5,118.0,583,52);
p.THE_EASE=new DWText('THE_EASED',_oc11,'THE EASE',379.5,552.5,583,79);
p.THE_INTERNET=new DWText('THE_INTERNETD',_oc12,'THE INTERNET',379.5,642.5,583,77);
p.featuresFrame=new DWFrame('featuresFrameD',_oc13,'featuresFrame',389.0,346.0,742,504);
p.shadows=new DWText('shadowsG',_oc14,'shadows',-18.5,-26.0,661,56);
p.mouseovers=new DWText('mouseoversG',_oc15,'mouseovers',1.0,-15.5,674,49);
p.multiframes=new DWText('multiframesG',_oc16,'multiframes',-7.0,-21.5,640,35);
p.tweens=new DWText('tweensG',_oc17,'tweens',6.0,-14.0,662,34);
p.slideshows=new DWText('slideshowsG',_oc18,'slideshows',-8.5,-11.5,673,49);
p.timelines=new DWText('timelinesG',_oc19,'timelines',-53.5,-31.5,591,51);
p.flares=new DWText('flaresG',_oc20,'flares',9.0,-34.5,656,57);
p.text_input=new DWText('text_inputD',_oc21,'text input',8.0,-5.5,616,49);
p.transparency=new DWText('transparencyG',_oc22,'transparency',-5.0,110.5,296,57);
p.connect_to=new DWText('connect_toG',_oc23,'connect to',-1.5,145.5,727,49);
p.Loop01_mp3=new DWAudio(_oc24);
p.Timeline_1=new DWTimeline();
p.topBar=new DWVector('topBarD',_oc25,'topBar',376.5,43.5,777,99);
p.HTML5_Logo_mono__2_=new DWImage('HTML5_Logo_mono__2_D',_oc26,'HTML5 Logo mono (2)',625.0,71.0,270,142);
p.homeHite=new DWVector('homeHiteD',_oc27,'homeHite',34.5,55.5,69,27);
p.overHite=new DWVector('overHiteD',_oc28,'overHite',131.0,57.5,124,31);
p.featureHite=new DWVector('featureHiteD',_oc29,'featureHite',247.0,60.5,110,31);
p.effectsHite=new DWVector('effectsHiteD',_oc30,'effectsHite',358.5,66.0,115,34);
p.audioHite=new DWVector('audioHiteD',_oc31,'audioHite',475.5,73.5,121,37);
p.fontsHite=new DWVector('fontsHiteD',_oc32,'fontsHite',585.0,82.5,100,39);
p.animHite=new DWVector('animHiteD',_oc33,'animHite',697.5,96.5,127,51);
p.topBarXtra=new DWVector('topBarXtraD',_oc34,'topBarXtra',384.5,67.0,769,52);
p.home=new DWText('homeD',_oc35,'home',33.0,55.5,74,29);
p.overview=new DWText('overviewD',_oc36,'overview',131.5,58.5,125,29);
p.features=new DWText('featuresD',_oc37,'features',248.5,62.5,109,29);
p.effects=new DWText('effectsD',_oc38,'effects',360.0,68.5,114,29);
p.audio=new DWText('audioD',_oc39,'audio',476.0,77.5,122,29);
p.font_=new DWText('font_D',_oc40,'font ',585.5,87.5,101,31);
p.animation=new DWText('animationD',_oc41,'animation',697.0,99.5,126,29);
p.Opus_Creator=new DWText('Opus_CreatorD',_oc42,'Opus Creator',196.0,22.0,364,34);
p.indicator=new DWVector('indicatorD',_oc43,'indicator',-11.5,42.0,13,18);
p.BL_corner_grid=new DWVector('BL_corner_gridD',_oc44,'BL_corner_grid',150.5,601.0,301,200);
p.rayBak.addPolygons(0,null,0,_pl);
p.rayBak.setIgnoreTransparentArea(true).setInitialAlpha(0.29);
p.html5_logo.setShowTransition(tr);
p.html5_logo.addPolygons(0,null,0,_pl1);
p.html5_logo.addPolygons(1,null,0,_pl2);
p.html5_logo.addPolygons(2,null,0,_pl3);
p.html5_logo.addPolygons(3,null,0,_pl4);
p.html5_logo.addPolygons(4,null,0,_pl5);
p.html5_logo.addPolygons(5,null,0,_pl6);
p.html5_logo.addPolygons(6,null,0,_pl7);
p.html5_logo.addPolygons(7,null,0,_pl8);
p.html5_logo.addPolygons(8,null,0,_pl9);
p.html5_logo.addPolygons(9,null,0,_pl10);
p.html5_logo.addPolygons(10,null,0,_pl11);
p.html5_logo.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.OPUS_CREATOR.setShowTransition(tr1);
p.OPUS_CREATOR.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.THE_EASE.setShowTransition(tr2);
p.THE_EASE.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.THE_INTERNET.setShowTransition(tr2);
p.THE_INTERNET.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWSimpleAction(p.featuresFrame.showAction.bind(p.featuresFrame,null))
		)
	)
));
p.THE_INTERNET.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.featuresFrame.setShowTransition(tr2);
p.shadows.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWAnimateRotate( 5000, -1, 1, true, DWAnimationSpeed.EaseInOut, 40, p.shadows)
		)
	)
));
p.shadows.setIgnoreTransparentArea(true).setInitialEffectsTransforms( 343.91, 1.00, 1.00, 0.00, 0.00 );
p.mouseovers.setIgnoreTransparentArea(true);
p.multiframes.setIgnoreTransparentArea(true).setInitialEffectsTransforms( 10.71, 1.00, 1.00, 0.00, 0.00 );
p.tweens.setIgnoreTransparentArea(true).setInitialEffectsTransforms( 13.59, 1.00, 1.00, 0.00, 0.00 );
p.slideshows.setIgnoreTransparentArea(true);
p.timelines.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWAnimateRotate( 5000, -1, 1, true, DWAnimationSpeed.EaseInOut, -65, p.timelines)
		)
	)
));
p.timelines.setIgnoreTransparentArea(true).setInitialEffectsTransforms( 27.00, 1.00, 1.00, 0.00, 0.00 );
p.flares.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWAnimateRotate( 5000, -1, 1, true, DWAnimationSpeed.EaseInOut, 40, p.flares)
		)
	)
));
p.flares.setIgnoreTransparentArea(true).setInitialEffectsTransforms( 338.35, 1.00, 1.00, 0.00, 0.00 );
p.text_input.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWAnimateRotate( 5000, -1, 1, true, DWAnimationSpeed.EaseInOut, -45, p.text_input)
		)
	)
));
p.text_input.setDivObjectOffset(0,0).setIgnoreTransparentArea(true).setInitialEffectsTransforms( 25.29, 1.00, 1.00, 0.00, 0.00 );
p.transparency.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWSimpleAction(p.featuresFrame.showAction.bind(p.featuresFrame,null))
		)
	)
));
p.transparency.setIgnoreTransparentArea(true).setInitialAlpha(0.70);
p.connect_to.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWSimpleAction(p.featuresFrame.showAction.bind(p.featuresFrame,null))
		)
	)
));
p.connect_to.setIgnoreTransparentArea(true);
p.featuresFrame.addChildren(p.shadows,p.mouseovers,p.multiframes,p.tweens,p.slideshows,p.timelines,p.flares,p.text_input,p.transparency,p.connect_to);
p.featuresFrame.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.Loop01_mp3.addResource('Loop01.mp3','audio/mpeg;codecs="mp3"').addResource('Loop01.ogg','audio/ogg;codecs="vorbis"');
p.Timeline_1.setProperties(true,0).addTrack(new DWTimelineTrack(1560, new DWSimpleAction(p.html5_logo.showAction.bind(p.html5_logo,null)))).addTrack(new DWTimelineTrack(340, new DWSimpleAction(p.OPUS_CREATOR.showAction.bind(p.OPUS_CREATOR,null)), 3840, new DWSimpleAction(p.THE_INTERNET.showAction.bind(p.THE_INTERNET,null)))).addTrack(new DWTimelineTrack(2680, new DWSimpleAction(p.THE_EASE.showAction.bind(p.THE_EASE,null))));
p.topBar.addPolygons(0,null,0,_pl12);
p.topBar.setIgnoreTransparentArea(true);
p.HTML5_Logo_mono__2_.setIgnoreTransparentArea(true).setInitialAlpha(0.41);
p.homeHite.setShowTransition(tr3);
p.homeHite.setHideTransition(tr4);
p.homeHite.addPolygons(0,null,0,_pl13);
p.homeHite.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftDown')
		),
		new DWActionList(
			new DWAnimateMove( 300, 1, 0, false, DWAnimationSpeed.ElasticOut, 33, 42, p.indicator)
		)
	)
));
p.homeHite.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.overHite.setShowTransition(tr3);
p.overHite.setHideTransition(tr4);
p.overHite.addPolygons(0,null,0,_pl14);
p.overHite.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWAnimateMove( 300, 1, 0, false, DWAnimationSpeed.ElasticOut, 33, 42, p.indicator)
		)
	)
));
p.overHite.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.featureHite.setShowTransition(tr3);
p.featureHite.setHideTransition(tr4);
p.featureHite.addPolygons(0,null,0,_pl15);
p.featureHite.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftDown')
		),
		new DWActionList(
			new DWAnimateMove( 300, 1, 0, false, DWAnimationSpeed.ElasticOut, 33, 42, p.indicator)
		)
	)
));
p.featureHite.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.effectsHite.setShowTransition(tr3);
p.effectsHite.setHideTransition(tr4);
p.effectsHite.addPolygons(0,null,0,_pl16);
p.effectsHite.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftDown')
		),
		new DWActionList(
			new DWAnimateMove( 300, 1, 0, false, DWAnimationSpeed.ElasticOut, 33, 42, p.indicator)
		)
	)
));
p.effectsHite.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.audioHite.setShowTransition(tr3);
p.audioHite.setHideTransition(tr4);
p.audioHite.addPolygons(0,null,0,_pl17);
p.audioHite.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftDown')
		),
		new DWActionList(
			new DWAnimateMove( 300, 1, 0, false, DWAnimationSpeed.ElasticOut, 33, 42, p.indicator)
		)
	)
));
p.audioHite.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.fontsHite.setShowTransition(tr3);
p.fontsHite.setHideTransition(tr4);
p.fontsHite.addPolygons(0,null,0,_pl18);
p.fontsHite.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftDown')
		),
		new DWActionList(
			new DWAnimateMove( 300, 1, 0, false, DWAnimationSpeed.ElasticOut, 33, 42, p.indicator)
		)
	)
));
p.fontsHite.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.animHite.setShowTransition(tr3);
p.animHite.setHideTransition(tr4);
p.animHite.addPolygons(0,null,0,_pl19);
p.animHite.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftDown')
		),
		new DWActionList(
			new DWAnimateMove( 300, 1, 0, false, DWAnimationSpeed.ElasticOut, 33, 42, p.indicator)
		)
	)
));
p.animHite.setInitiallyHidden( true, -1 ).setIgnoreTransparentArea(true);
p.topBarXtra.addPolygons(0,null,0,_pl20);
p.topBarXtra.setIgnoreTransparentArea(true);
p.home.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOver')
		),
		new DWActionList(
			new DWSimpleAction(p.homeHite.showAction.bind(p.homeHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOut')
		),
		new DWActionList(
			new DWSimpleAction(p.homeHite.hideAction.bind(p.homeHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWGotoPageAction( 'HomePage' )
		)
	)
));
p.overview.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOver')
		),
		new DWActionList(
			new DWSimpleAction(p.overHite.showAction.bind(p.overHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOut')
		),
		new DWActionList(
			new DWSimpleAction(p.overHite.hideAction.bind(p.overHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWGotoPageAction( 'Overview' )
		)
	)
));
p.features.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOver')
		),
		new DWActionList(
			new DWSimpleAction(p.featureHite.showAction.bind(p.featureHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOut')
		),
		new DWActionList(
			new DWSimpleAction(p.featureHite.hideAction.bind(p.featureHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWGotoPageAction( 'Features' )
		)
	)
));
p.effects.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOver')
		),
		new DWActionList(
			new DWSimpleAction(p.effectsHite.showAction.bind(p.effectsHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOut')
		),
		new DWActionList(
			new DWSimpleAction(p.effectsHite.hideAction.bind(p.effectsHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWGotoPageAction( 'Effects' )
		)
	)
));
p.audio.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOver')
		),
		new DWActionList(
			new DWSimpleAction(p.audioHite.showAction.bind(p.audioHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOut')
		),
		new DWActionList(
			new DWSimpleAction(p.audioHite.hideAction.bind(p.audioHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWGotoPageAction( 'AudioVideo' )
		)
	)
));
p.font_.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOver')
		),
		new DWActionList(
			new DWSimpleAction(p.fontsHite.showAction.bind(p.fontsHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOut')
		),
		new DWActionList(
			new DWSimpleAction(p.fontsHite.hideAction.bind(p.fontsHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWGotoPageAction( 'Fonts' )
		)
	)
));
p.animation.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOver')
		),
		new DWActionList(
			new DWSimpleAction(p.animHite.showAction.bind(p.animHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnMouseOut')
		),
		new DWActionList(
			new DWSimpleAction(p.animHite.hideAction.bind(p.animHite,null))
		)
	), 
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWGotoPageAction( 'Animation' )
		)
	)
));
p.Opus_Creator.setIgnoreTransparentArea(true);
p.indicator.addPolygons(0,null,0,_pl21);
p.indicator.setIgnoreTransparentArea(true);
p.BL_corner_grid.addPolygons(0,null,0,_pl22);
p.BL_corner_grid.setIgnoreTransparentArea(true).setInitialAlpha(0.25);
HomePage.addChildren(p.rayBak,p.html5_logo,p.OPUS_CREATOR,p.THE_EASE,p.THE_INTERNET,p.featuresFrame,p.Loop01_mp3,p.Timeline_1,p.topBar,p.HTML5_Logo_mono__2_,p.homeHite,p.overHite,p.featureHite,p.effectsHite,p.audioHite,p.fontsHite,p.animHite,p.topBarXtra,p.home,p.overview,p.features,p.effects,p.audio,p.font_,p.animation,p.Opus_Creator,p.indicator,p.BL_corner_grid);
HomePage.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWPlaySoundAction(0, 100, false, true, -1, p.Loop01_mp3)
		)
	)
));
});_DWPub.setCurrentPage(HomePage);
window.onload=_DWPub.start.bind(_DWPub);
window.onunload=function(){};
