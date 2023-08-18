import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 5,
  },

  cardBox: {
    flex: 1,
    height: 130,
    margin: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardBoxForProductCard: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    margin: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardText: {
    fontSize: 24,
  },

  shadowProps: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cropCardAlign: {
    alignItems: 'center',
  },
  ImageViewStyle: {
    flex: 0.8,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',


  },
  CropCardTextAlign: {
    flex: 0.2,
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  transparentCropCard: {
    backgroundColor: '#F2F2F2',
    borderWidth: 0,
  },
  productAndBrandAlign: {
    flex: 1,
    paddingStart: 15,
  },
  productTextView: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  productTextStyles: {
    fontSize: 20,
  },
  BrandTextView: {
    flex: 0.5,
    justifyContent: 'flex-start',
  },
  brandTextStyles: {
    fontSize: 15,
    color: 'green',
  },
  imageView: {
    flex: 0.45,
    alignItems: 'flex-end',
  },
  additionalInfoView: {
    margin: 10,
    flex: 1,
  },
  characteristicsTextStyle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  characteristicsViewStyles: {
    flex: 1,
    flexDirection: 'row',
  },
  titleView: {
    alignItems: 'flex-start',
    flex: 0.6,
    marginVertical: 5,
  },
  titleAndValueText: {
    fontSize: 14,
  },
  valueView: {
    alignItems: 'flex-start',
    flex: 0.4,
    marginVertical: 5,
  },
  vegComponentsView: {
    height: '100%',
    width: '100%'
  },
  OverViewComponentView: {
    margin: 15,
    flex: 1,
  },
  headingStyles: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileStyle: {
    fontSize: 14,
    // marginBottom: layoutScale(10),
    marginTop: 6,
  },
  keyFeaturesView: {
    marginBottom: 10,
  },
  additionalInfoImage: {
    flex: 0.3,
    alignItems: 'center',
    marginBottom: 10,
  },
  characteristicsFlex: {
    flex: 0.7,
  },
  cropImageTagViewStyle: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    margin: 10,
  },
  productImageTagViewStyles: {
    width: '60%',
    flex: 1,
    margin: 6,
  },
  imageTagStyles: {
    height: '100%',
    width: '100%',
  },
  dropdown: {
    marginVertical: 4,
    //marginHorizontal: 4,
    height: 38,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    width: '100%',
    alignSelf: 'center',
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,

    color: 'black',
  },
  profileDropDownViewStyels: {
    marginVertical: 4,
  },
  profileDropDownText: {
    fontSize: 14,
    marginStart: 8,
  },
  profileViewStyles: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#696969',
    width: '100%',
    padding: 6,
  },
  profileTextStyle: {
    fontSize: 14,
    marginStart: 8,
  },
});
export default styles;
