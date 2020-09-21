import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import LogoImg from '../../assets/logo.png';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState();

    const navigation = useNavigation();

    function navigationToDetail(incident) {
        navigation.navigate('Detail2', { incident });
    }

    async function loadIncidents(){

        if(loading){
            return;
        }

        // se carrega a primeira pagina 
        if(total > 0 && incidents.length == total){
            return;
        }

        setLoading(true);

        const response = await api.get('/incidents', {
            params: { page } // mostra as paginas
        });

        // carregar a pagina com o numero de incidents da pagina 1 + pagina 2, assim por diante
        // anexa dois vetores
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        // paginação
        setPage(page +1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image source={LogoImg} ></Image>
                <Text style={styles.headerText} >
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.descriprion}>Escolha um dos casos e salve o dia</Text>

            <FlatList 
                data={incidents}
                style={styles.IncidentList}
                keyExtractor={incident => String(incident.id)}
                // showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents} // se chegou no final da pagina
                onEndReachedThreshold={0.2} //carrega com 20% antes do fim da pagina
                renderItem={({ item: incident }) => (

                    <View style={styles.incident} >
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>
                    
                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>
                    
                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => navigationToDetail(incident)}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
                    
                )}
            /> 
        </ View>
    );
}