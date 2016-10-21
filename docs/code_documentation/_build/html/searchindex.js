Search.setIndex({envversion:49,filenames:["examples","index","pycont"],objects:{"":{controller:[2,0,0,"-"],pump_protocol:[2,0,0,"-"],pycont:[2,0,0,"-"]},"pycont.controller":{C3000Broadcast:[2,1,1,""],C3000Controller:[2,2,1,""],C3000SwitchToAddress:[2,1,1,""],ControllerInitError:[2,6,1,""],ControllerRepeatedError:[2,6,1,""],DEFAULT_IO_BAUDRATE:[2,1,1,""],DEFAULT_IO_TIMEOUT:[2,1,1,""],MAX_REPEAT_OPERATION:[2,1,1,""],MAX_REPEAT_WRITE_AND_READ:[2,1,1,""],MAX_TOP_VELOCITY_MICRO_STEP_MODE_0:[2,1,1,""],MAX_TOP_VELOCITY_MICRO_STEP_MODE_2:[2,1,1,""],MICRO_STEP_MODE_0:[2,1,1,""],MICRO_STEP_MODE_2:[2,1,1,""],MultiPumpController:[2,2,1,""],N_STEP_MICRO_STEP_MODE_0:[2,1,1,""],N_STEP_MICRO_STEP_MODE_2:[2,1,1,""],PumpIO:[2,2,1,""],PumpIOTimeOutError:[2,6,1,""],VALVE_BYPASS:[2,1,1,""],VALVE_EXTRA:[2,1,1,""],VALVE_INPUT:[2,1,1,""],VALVE_OUTPUT:[2,1,1,""],WAIT_SLEEP_TIME:[2,1,1,""]},"pycont.controller.C3000Controller":{check_top_velocity_within_range:[2,3,1,""],current_steps:[2,4,1,""],current_volume:[2,4,1,""],deliver:[2,3,1,""],ensure_default_top_velocity:[2,3,1,""],flash_eeprom_3_way_t_valve:[2,3,1,""],flash_eeprom_3_way_y_valve:[2,3,1,""],flash_eeprom_4_way_dist_valve:[2,3,1,""],flash_eeprom_4_way_nondist_valve:[2,3,1,""],from_config:[2,5,1,""],get_default_top_velocity:[2,3,1,""],get_eeprom_config:[2,3,1,""],get_plunger_position:[2,3,1,""],get_raw_valve_postion:[2,3,1,""],get_top_velocity:[2,3,1,""],get_valve_position:[2,3,1,""],get_volume:[2,3,1,""],go_to_max_volume:[2,3,1,""],go_to_volume:[2,3,1,""],init_all_pump_parameters:[2,3,1,""],initialize:[2,3,1,""],initialize_no_valve:[2,3,1,""],initialize_valve_left:[2,3,1,""],initialize_valve_only:[2,3,1,""],initialize_valve_right:[2,3,1,""],is_busy:[2,3,1,""],is_idle:[2,3,1,""],is_initialized:[2,3,1,""],is_volume_deliverable:[2,3,1,""],is_volume_pumpable:[2,3,1,""],is_volume_valid:[2,3,1,""],pump:[2,3,1,""],remaining_steps:[2,4,1,""],remaining_volume:[2,4,1,""],set_default_top_velocity:[2,3,1,""],set_eeprom_config:[2,3,1,""],set_microstep_mode:[2,3,1,""],set_top_velocity:[2,3,1,""],set_valve_position:[2,3,1,""],smart_initialize:[2,3,1,""],step_to_volume:[2,3,1,""],transfer:[2,3,1,""],volume_to_step:[2,3,1,""],wait_until_idle:[2,3,1,""],write_and_read_from_pump:[2,3,1,""]},"pycont.controller.MultiPumpController":{apply_command_to_all_pumps:[2,3,1,""],apply_command_to_group:[2,3,1,""],apply_command_to_pumps:[2,3,1,""],are_pumps_busy:[2,3,1,""],are_pumps_idle:[2,3,1,""],are_pumps_initialized:[2,3,1,""],default_pump_config:[2,3,1,""],deliver:[2,3,1,""],from_configfile:[2,5,1,""],get_pumps:[2,3,1,""],pump:[2,3,1,""],set_pumps_as_attributes:[2,3,1,""],smart_initialize:[2,3,1,""],transfer:[2,3,1,""],wait_until_all_pumps_idle:[2,3,1,""]},"pycont.controller.PumpIO":{close:[2,3,1,""],flushInput:[2,3,1,""],from_config:[2,5,1,""],from_configfile:[2,5,1,""],open:[2,3,1,""],readline:[2,3,1,""],write:[2,3,1,""],write_and_readline:[2,3,1,""]},"pycont.dtprotocol":{DTCommand:[2,2,1,""],DTInstructionPacket:[2,2,1,""],DTStatus:[2,2,1,""]},"pycont.dtprotocol.DTCommand":{to_array:[2,3,1,""],to_string:[2,3,1,""]},"pycont.dtprotocol.DTInstructionPacket":{to_array:[2,3,1,""],to_string:[2,3,1,""]},"pycont.dtprotocol.DTStatus":{decode:[2,3,1,""]},"pycont.pump_protocol":{C3000Protocol:[2,2,1,""],CMD_DELIVER:[2,1,1,""],CMD_EEPROM_CONFIG:[2,1,1,""],CMD_EXECUTE:[2,1,1,""],CMD_INITIALIZE_NO_VALVE:[2,1,1,""],CMD_INITIALIZE_VALVE_LEFT:[2,1,1,""],CMD_INITIALIZE_VALVE_ONLY:[2,1,1,""],CMD_INITIALIZE_VALVE_RIGHT:[2,1,1,""],CMD_MICROSTEPMODE:[2,1,1,""],CMD_MOVE_TO:[2,1,1,""],CMD_PUMP:[2,1,1,""],CMD_REPORT_CUTOFF_VELOCITY:[2,1,1,""],CMD_REPORT_EEPROM:[2,1,1,""],CMD_REPORT_INTIALIZED:[2,1,1,""],CMD_REPORT_PEAK_VELOCITY:[2,1,1,""],CMD_REPORT_PLUNGER_POSITION:[2,1,1,""],CMD_REPORT_START_VELOCITY:[2,1,1,""],CMD_REPORT_STATUS:[2,1,1,""],CMD_REPORT_VALVE_POSITION:[2,1,1,""],CMD_TOPVELOCITY:[2,1,1,""],CMD_VALVE_BYPASS:[2,1,1,""],CMD_VALVE_EXTRA:[2,1,1,""],CMD_VALVE_INPUT:[2,1,1,""],CMD_VALVE_OUTPUT:[2,1,1,""],STATUS_BUSY_ERROR_FREE:[2,1,1,""],STATUS_IDLE_ERROR_FREE:[2,1,1,""]},"pycont.pump_protocol.C3000Protocol":{decode_packet:[2,3,1,""],forge_deliver_packet:[2,3,1,""],forge_eeprom_config_packet:[2,3,1,""],forge_initialize_no_valve_packet:[2,3,1,""],forge_initialize_valve_left_packet:[2,3,1,""],forge_initialize_valve_only_packet:[2,3,1,""],forge_initialize_valve_right_packet:[2,3,1,""],forge_microstep_mode_packet:[2,3,1,""],forge_move_to_packet:[2,3,1,""],forge_packet:[2,3,1,""],forge_pump_packet:[2,3,1,""],forge_report_cutoff_velocity_packet:[2,3,1,""],forge_report_eeprom_packet:[2,3,1,""],forge_report_initialized_packet:[2,3,1,""],forge_report_peak_velocity_packet:[2,3,1,""],forge_report_plunger_position_packet:[2,3,1,""],forge_report_start_velocity_packet:[2,3,1,""],forge_report_status_packet:[2,3,1,""],forge_report_valve_position_packet:[2,3,1,""],forge_top_velocity_packet:[2,3,1,""],forge_valve_bypass_packet:[2,3,1,""],forge_valve_extra_packet:[2,3,1,""],forge_valve_input_packet:[2,3,1,""],forge_valve_output_packet:[2,3,1,""]},pycont:{controller:[2,0,0,"-"],dtprotocol:[2,0,0,"-"],pump_protocol:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","classmethod","Python class method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:data","2":"py:class","3":"py:method","4":"py:attribute","5":"py:classmethod","6":"py:exception"},terms:{"class":2,"default":[0,2],"final":0,"float":2,"function":[0,2],"import":0,"int":2,"new":2,"return":[0,2],"switch":[0,2],"true":[0,2],"while":0,abov:0,access:[0,2],aceton:0,achiev:2,action:[0,2],actual:0,addit:0,address:2,after:[0,2],again:0,all:[0,1,2],along:2,alreadi:0,also:0,alwai:0,appli:[0,2],apply_command_to_all_pump:[0,2],apply_command_to_group:[0,2],apply_command_to_pump:[0,2],appropri:0,arbitrari:2,are_pumps_busi:[0,2],are_pumps_idl:2,are_pumps_initi:2,arg:2,arguement:2,argument:[0,2],ask:0,associ:2,attempt:2,attribut:[0,2],autom:0,avail:0,back:0,base:[0,2],baudrat:[0,2],becaus:0,been:2,befir:2,befor:[0,2],below:0,between:2,bigger:0,block:0,bool:2,broadcast:2,buffer:2,busi:[0,2],bypass:2,c3000:2,c3000broadcast:2,c3000control:2,c3000protocol:2,c3000switchtoaddress:2,call:0,can:0,cannot:0,certain:2,certainli:0,chang:[0,2],check:[0,2],check_top_velocity_within_rang:2,chemic:0,chr:2,classmethod:2,close:2,cmd_deliver:2,cmd_eeprom_config:2,cmd_execute:2,cmd_initialize_no_valve:2,cmd_initialize_valve_left:2,cmd_initialize_valve_only:2,cmd_initialize_valve_right:2,cmd_microstepmode:2,cmd_move_to:2,cmd_pump:2,cmd_report_cutoff_velocity:2,cmd_report_eeprom:2,cmd_report_intialized:2,cmd_report_peak_velocity:2,cmd_report_plunger_position:2,cmd_report_start_velocity:2,cmd_report_status:2,cmd_report_valve_position:2,cmd_topvelocity:2,cmd_valve_bypass:2,cmd_valve_extra:2,cmd_valve_input:2,cmd_valve_output:2,collect:0,com:2,command:[0,2],commun:[0,2],compar:0,config:[0,2],configuratt:2,connect:0,conta:2,contain:[0,2],control:[],controlleriniterror:2,controllerrepeatederror:2,conveni:0,convent:0,corect:2,correct:2,could:0,cours:0,coverag:2,creat:2,cseri:2,current:[0,2],current_step:2,current_volum:[0,2],custom:2,cutoff:2,data:2,deal:2,decod:2,decode_packet:2,decoded_respons:2,default_io_baudrate:2,default_io_timeout:2,default_pump_config:2,default_top_veloc:2,defaulted_pump_config:2,defin:0,definit:0,defualt:2,deliv:[0,2],deliver:2,deliveri:2,depend:2,depth:0,design:2,desir:2,detail:2,determin:2,dev:0,devic:2,dict:[0,2],dictionari:2,differ:0,direct:0,directli:0,distribut:2,dtcommand:2,dtinstructionpacket:2,dtprotocol:[],dtrespons:2,dtstatu:2,each:[0,2],easi:0,eeprom:2,eeprom_config:2,effect:2,either:2,els:0,encompass:0,ensure:2,ensure_default_top_veloc:2,error:2,even:0,everyth:2,except:2,exception:2,execut:2,extra:2,fail:2,failur:2,fals:[0,2],feasibl:0,find:[0,1,2],finish:0,first:0,flash_eeprom_3_way_t_valv:2,flash_eeprom_3_way_y_valv:2,flash_eeprom_4_way_dist_valv:2,flash_eeprom_4_way_nondist_valv:2,flush:2,flushinput:2,follow:2,forge_deliver_packet:2,forge_eeprom_config_packet:2,forge_initialize_no_valve_packet:2,forge_initialize_valve_left_packet:2,forge_initialize_valve_only_packet:2,forge_initialize_valve_right_packet:2,forge_microstep_mode_packet:2,forge_move_to_packet:2,forge_packet:2,forge_pump_packet:2,forge_report_cutoff_velocity_packet:2,forge_report_eeprom_packet:2,forge_report_initialized_packet:2,forge_report_peak_velocity_packet:2,forge_report_plunger_position_packet:2,forge_report_start_velocity_packet:2,forge_report_status_packet:2,forge_report_valve_position_packet:2,forge_top_velocity_packet:2,forge_valve_bypass_packet:2,forge_valve_extra_packet:2,forge_valve_input_packet:2,forge_valve_output_packet:2,form:2,forward:0,from:[0,2],from_config:2,from_configfil:[0,2],from_valv:[0,2],fun:0,gak:2,gener:0,get:[0,2],get_default_top_veloc:2,get_eeprom_config:2,get_plunger_posit:2,get_pump:2,get_raw_valve_post:2,get_top_veloc:2,get_valve_posit:[0,2],get_volum:[0,2],given:2,global:0,go_to_max_volum:[0,2],go_to_volum:[0,2],got:0,greater:2,grerat:2,group:[0,2],group_nam:2,hardwar:[0,2],have:[0,2],hear:0,here:[0,1,2],higher:0,highlight:0,hold:[0,2],host:0,how:0,hte:2,http:2,identifi:0,idl:2,idle:2,immedi:0,inde:0,index:1,individu:0,inform:1,init_all_pump_paramet:2,initi:[0,2],initialis:[0,2],initialize_no_valv:2,initialize_valve_left:2,initialize_valve_onli:2,initialize_valve_posit:[0,2],initialize_valve_right:2,input:[0,2],insert:0,instanc:0,instruct:2,invalid:2,invok:2,io_config:2,io_configfil:2,iobe:2,ipython:0,is_busi:[0,2],is_idl:[0,2],is_initi:2,is_volume_deliver:[0,2],is_volume_pump:[0,2],is_volume_valid:2,item:0,iter:0,itm:2,just:0,keyword:2,kwarg:2,laid:2,last:2,leav:0,left:2,length:2,let:0,level:0,librari:[0,1,2],like:0,line:[0,2],link:0,list:[0,2],load:0,locat:2,made:0,main:2,mani:[0,2],max:0,max_repeat:2,max_repeat_operation:2,max_repeat_write_and_read:2,max_top_velocity_micro_step_mode_0:2,max_top_velocity_micro_step_mode_2:2,maximum:[0,2],method:[0,2],micro_step_mod:[0,2],micro_step_mode_0:2,micro_step_mode_2:2,microstep:[0,2],millilitr:2,mirror:2,mode:[0,2],modul:[],more:[0,2],mostli:0,move:[0,2],movement:[0,2],multipl:2,multipump:2,multipumpcontrol:[0,2],must:0,n_step_micro_step_mode_0:2,n_step_micro_step_mode_2:2,name:[0,2],necessari:1,need:[0,2],non:0,none:2,note:[0,2],now:0,number:2,number_of_step:2,object:[0,2],obtain:2,onc:0,onli:[0,2],onlin:0,open:2,oper:[0,2],operand:2,operand_str:2,operand_valu:2,out:[0,2],output:2,packag:[],packet:2,page:[1,2],paramet:[0,2],parammet:2,parrallel:0,pars:2,paus:0,payload:2,peak:2,person:0,place:2,pleas:[1,2],plunger:2,port:[0,2],posiiton:2,posit:[0,2],power:[0,2],prefer:0,print:0,product:2,protocol:[],pump_config:2,pump_io:2,pump_nam:[0,2],pump_protocol:2,pumpabl:2,pumpio:2,pumpiotimeouterror:2,purpos:0,pycont:[],rais:2,rang:2,raw:2,raw_valve_posit:2,read:[0,2],readi:0,readlin:2,real:0,realli:2,receiv:2,record:0,recus:0,reimplement:2,reiniti:0,relat:1,remain:2,remaining_step:2,remaining_volum:[0,2],repeat:[0,2],repons:2,report:2,repres:2,requir:2,reset:2,respect:0,respons:2,restart:2,right:2,round:2,run:0,same:0,sampl:0,scope:2,search:1,second:0,section:0,secur:2,see:[1,2],self:2,send:2,sent:2,sequenc:2,seri:2,serial:[0,2],set:[0,2],set_default_top_veloc:2,set_eeprom_config:2,set_microstep_mod:2,set_pumps_as_attribut:2,set_top_veloc:2,set_valve_posit:[0,2],setup:[0,2],setup_config:2,setup_config_file:0,setup_configfil:2,sever:0,should:0,signal:2,signifi:0,simpli:0,sleep:0,small:0,smart:0,smart_initi:[0,2],some:0,someth:0,sound:0,sourc:2,specif:[0,2],specifi:2,speed:[0,2],speed_in:2,speed_out:2,start:2,statu:[0,2],status_busy_error_free:2,status_idle_error_free:2,step:[0,2],step_to_volum:2,steps_per_ml:2,still:0,str:2,string:2,structur:0,succe:0,suffic:0,suppli:2,synchron:2,syring:[0,2],system:0,take:[0,2],talk:2,tell:0,test:0,than:[0,2],thei:0,them:0,thhe:2,thi:[0,1,2],thing:0,those:0,three:0,threshold:2,through:0,time:[0,2],timeout:[0,2],to_arrai:2,to_str:2,to_valv:[0,2],too:2,tool:0,top:[0,2],top_veloc:[0,2],total:2,total_volum:2,track:0,transfer:[0,2],tricontin:[0,1,2],ttyusb0:0,two:0,type:2,u11:2,unix:0,unknown:2,unsure:2,until:[0,2],usual:0,valid:2,valu:2,valueerror:2,valv:[0,2],valve_bypass:[0,2],valve_extra:[0,2],valve_input:[0,2],valve_output:[0,2],valve_posit:[0,2],valvl:0,variabl:[0,2],veloc:2,volum:[0,2],volume_in_ml:2,volume_to_step:2,wai:[0,2],wait:[0,2],wait_sleep_time:2,wait_until_all_pumps_idl:[0,2],wait_until_idl:2,want:0,warn:2,water:0,well:0,went:0,what:[0,2],when:[0,2],where:0,whether:2,which:[0,2],whichev:0,wise:0,within:2,without:0,write:2,write_and_read_from_pump:2,write_and_readlin:2,written:2,wrong:0,www:2,you:[0,1,2],your:0,zero:0},titles:["Examples","Welcome to Pycont&#8217;s documentation!","Pycont Package"],titleterms:{configur:0,content:[1,2],control:2,document:1,dtprotocol:2,exampl:0,file:0,indice:1,json:0,modul:2,packag:2,protocol:2,pump:[0,2],pump_setup_config:0,pycont:[1,2],pycont_test:0,python:0,script:0,tabl:1,usage:0,welcom:1}})