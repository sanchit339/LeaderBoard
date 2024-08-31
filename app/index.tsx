import { Text, View, StyleSheet, Image, FlatList } from "react-native";

export default function Index() {
  return (
    <View style={styles.container} >
        <View style={styles.topContainer}>
            <Text style = {styles.headerTitle}>Leader Board</Text>
                <View style={styles.mainCardContainer}>
                    {[2,1,3].map((item, index) => {
                        return(
                            <View key={index} 
                                style={[styles.mainCard, item !== 1 && {marginTop : 20}]} >
                                <Image 
                                    source={{uri: "https://fastly.picsum.photos/id/77/450/300.jpg?hmac=V_LawevwSaVitpQs2t7AnuBi84UPSNl1Qp3PmKkmaXc"}}
                                    style={styles.mainCardImage}
                                    resizeMode= "cover"    
                                />
                                <Text style={styles.mainCardTitle}>Sanchit</Text>
                                <View style={styles.mainCardRankContainer}>
                                    <Text style={styles.mainCardRankContainerText}>{item}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
        </View>
        <FlatList 
            data={[1,2,3,1,2,3,1,2,3,1,2,3]}
            renderItem={({item, index}) => {
                return <View style={styles.card}>
                    <View style={styles.cardDataContainer}>
                        <Text style={styles.cardIndex}>{index + 1}</Text>
                        <Image
                            source={{uri : "https://fastly.picsum.photos/id/77/450/300.jpg?hmac=V_LawevwSaVitpQs2t7AnuBi84UPSNl1Qp3PmKkmaXc"}}
                            style={styles.cardImage}
                            resizeMode="cover"
                        />
                        <Text style={styles.cardTitle}>Sanchit Ingale</Text>
                    </View>
                    <View style={styles.cardRankContainer}>
                        <Text style={styles.cardRankTitle}>324,124</Text>
                    </View>
                </View>
            }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#272C35",
    },
    topContainer : {
        backgroundColor: "#1A1F25",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 20,
        gap: 20,
        paddingTop: 30,
        paddingBottom : 50
    },
    headerTitle : {
        textAlign: "center",
        color:"white",
        fontSize: 21,
        fontWeight: '600'
    },
    mainCardContainer : {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'
    },
    mainCard : {
        backgroundColor: '#272C35',
        padding: 20,
        alignItems: 'center',
        borderRadius: 20,
        gap: 15,
        height: 175
    },
    mainCardImage : {
        height: 80,
        width: 80,
        borderRadius: 10
    },
    mainCardTitle : {
        color: 'white',
        fontSize: 17,
        fontWeight: '600'
    },
    mainCardRankContainer : {
        backgroundColor: 'orange',
        height: 30,
        width: 30,
        borderRadius: 30,
        alignItems : 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -14
    },
    mainCardRankContainerText : {
        color: 'white',
        fontWeight : '600'
    },
    card : {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardDataContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

    },
    cardIndex : {
        color: 'white'
    },
    cardImage : {
        height: 50,
        width: 50,
        borderRadius : 50,
        marginLeft : 15 
    },
    cardTitle : {
        color : 'white',
        fontWeight: '600',
        fontSize: 17,
    },
    cardRankContainer : {},
    cardRankTitle : {
        color: 'orange'
    }
})