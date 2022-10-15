import { StyleSheet } from 'react-native';

//not explaining the styles there are too many
//there are probably some unused ones but vs code isn't showing me
//a lot of decisions here work but i do not know why
//btw the box shadow thing isn't working but i will figure that out some other time

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: "center",
  },
  rcorners1: {
    borderRadius: 10,
    width: "40%",
    margin: "8%",
    maxHeight: 150,


    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.5
  },

  myHeader: {
    paddingHorizontal: "4%",
    marginTop: "14%",
    width: "100%",
    height: '4%',
  },

  myHeaderText: {
    fontWeight: "bold",
    fontSize: 48,
    fontFamily: "Arial",
    width: "66.67%",
    color: "#D77A61",
    textAlign: 'center'
  },
  myHeaderTextH2: {
    fontWeight: "bold",
    fontSize: 43,
    fontFamily: "Arial",
    width: "66.67%",
    color: "#D77A61",
    textAlign: 'center'
  },
  myHeaderTextH3: {
    fontWeight: "bold",
    fontSize: 38,
    fontFamily: "Arial",
    width: "66.67%",
    color: "#D77A61",
    textAlign: 'center'
  },
  myHeaderTextH4: {
    fontWeight: "bold",
    fontSize: 28,
    fontFamily: "Arial",
    width: "66.67%",
    color: "#D77A61",
    textAlign: 'center'
  },
  myHeaderTextH5: {
    fontWeight: "bold",
    fontSize: 23,
    fontFamily: "Arial",
    width: "66.67%",
    color: "#D77A61",
    textAlign: 'center'
  },

  myNormalText: {
    fontWeight: "normal",
    fontSize: 16,
    fontFamily: "Arial"
  },

  splitIcon: {
    width: "33%",
  },

  splitTextNormal: {
    width: "66%",
    fontWeight: "normal",
    fontSize: 18,
    fontFamily: "Arial"
  },


  linearGradient1: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: '#73AD21',
    padding: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  whiteText1: {
    fontWeight: "normal",
    fontSize: 15,
    fontFamily: "Arial",
    color: "#FFFFFF",
  },

  whiteText2: {
    fontWeight: "normal",
    fontSize: 25,
    fontFamily: "Arial",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  whiteIcon1: {
    backgroundColor: "#FFFFFF"
  },

  rowFlex1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    minHeight: 160,
    maxHeight: 200,
  },

  rowFlex2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "100%",
    width: "100%",

    alignItems: 'center',
  },

  bg1Page: {
    width: "100%",
    height: "100%",
  },

  svgContainer: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },

  container: {
    width: "100%",
    height: "100%",
  },

  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    backgroundColor: '#FFFFFFCC',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFFFFFCC',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "2%",
    padding: "2%"
  },

  flexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    color: "#000000",
  },
  inputBox: {
    height: "100%",
    minHeight: 30,
    maxHeight: 80,
    width: "100%",
    backgroundColor: "#EFF1F390",
    borderRadius: 15,
    alignContent: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0.5,
      height: 2
    },
    shadowRadius: 0.5,
    shadowOpacity: 0.5,
    paddingHorizontal: 12,
    fontSize: 24,
    fontFamily: 'Arial',
    marginVertical:12
    
  },

  inputBoxTall: {
    height: "100%",
    minHeight: 200,
    maxHeight: 275,
    width: "100%",
    backgroundColor: "#EFF1F390",
    borderRadius: 15,
    alignContent: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0.5,
      height: 2
    },
    shadowRadius: 0.5,
    shadowOpacity: 0.5,
    paddingHorizontal: 12,
    fontSize: 24,
    fontFamily: 'Arial',
    marginVertical:25
    
  },

  marginContainer: {
    width: "100%",
    height: "100%",
  },
  inputBoxBox: {
    borderRadius: 15,
    alignContent: 'center',
    justifyContent: 'space-around',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    width: "100%",
    maxHeight: 120,
    flex:1,
    flexDirection: 'column',
    

    paddingHorizontal:"10%",

  },inputBoxBoxTall: {
    borderRadius: 15,
    alignContent: 'center',
    justifyContent: 'space-around',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    width: "100%",
    maxHeight: 325,
    flex:1,
    flexDirection: 'column',
    marginVertical:10,
    

    paddingHorizontal:"10%",

  },
  page: {
    width: "100%",
    height: "100%",
  },

  page2: {
    width: "100%",
    height: "100%",
  },

  flexPage: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  flexColumnFlexStart: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  headerIcon: {
    width: "23.33%",
  },

  folderList: {
    marginTop: "7%",

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: "10%",
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  listColumn: {
    marginTop: "7%",
   
    
    paddingHorizontal:"4%",
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  folderListItem: {
    height: "10%",
    minHeight: 100,
    maxHeight: 110,
    width: "100%",

    backgroundColor: "#FFFFFFCC",
    borderRadius: 10,

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "4%",
    padding: "4%",

    alignContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.5
  },

  listItemColumn: {
    height:"10%",
    minHeight: 100,
    maxHeight: 110,
    width: "100%",

    backgroundColor: "#FFFFFFCC",
    borderRadius: 10,

    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: "4%",
    padding: "4%",

    alignContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.5
  },

  iconBorder: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: "#FFFFFF"
  },

  folderLabel: {
    fontSize: 16,
    fontFamily: "Arial",
    color: "#FFFFFF",
    zIndex: 1
  },

  folderLabelBlack: {
    fontSize: 16,
    fontFamily: "Arial",
    color: "#000000",
    zIndex: 1
  },

  folderLabelHolder: {
    marginTop: "2%",
    padding: "1%",
    position: "absolute",
    top: 0,
    left: 15,
    zIndex: 1
  },

  maxContainer: {
    height: "100%",
    width: "100%"
  },

  maxWidthContainer:{
    width: "100%",
  },

  pleaseStaySmall:{
    maxHeight: 120,
  },

  slightlyBiggerNormalText:{

    fontWeight: "normal",
    fontSize: 18,
    fontFamily: "Arial"
    
  },

  myBigBlackText:{
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "Arial"
  },

  boxText: {
    fontWeight: "normal",
    fontSize: 18,
    fontFamily: "Arial",
    color: "#223843",
    alignSelf: 'center',
    textAlign: 'center',
    
  },

  headerView: {
    minHeight: "30%",
    maxHeight: 300,
    width:"100%",
    flex: 1,
    zIndex: 1,

    marginTop:"20%",

    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
   
    
  },


  headerContainer:{
    maxHeight: 250,
    width: "100%",
  },

  enemyText:{
    width:"100%",
    height:"100%",
    margin: "2%",
    justifyContent:"center",
    alignItems:"flex-end",
    paddingHorizontal:"10%",

    backgroundColor: "rgba(219, 211, 216, 0.6)",
    boxShadow: '0px 4px 4px rgba(18, 117, 137, 0.25)',
    borderRadius: 10,

  },
  playerTextContainer:{
    display: 'flex',
    position:"relative",
    right:0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    

    
    
    margin: "2%",


    width:"90%",
    height: "100%",
    maxHeight:40,
  },
  enemyTextContainer:{
    position:"relative",
    left:0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    margin: "2%",
    

    



    width:"90%",
    height: "100%",
    maxHeight:40,
  },
  playerText:{
    width:"100%",
    height:"100%",
    margin: "2%",
    justifyContent:"center",
    alignItems:"flex-start",
    textAlign:'flex-end',
    paddingHorizontal:"10%",


   

    backgroundColor: "rgba(216, 180, 160, 0.6)",
    boxShadow: '0px 4px 4px rgba(18, 117, 137, 0.25)',
    borderRadius: 10,

    // /* Inside auto layout */

    // flex: 'none',
   
  },

  conversationView:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    gap: 10,

   

    backgroundColor: 'rgba(239, 241, 243, 0.6)',
    boxShadow: 'background: rgba(239, 241, 243, 0.6)',

  }

  


});
