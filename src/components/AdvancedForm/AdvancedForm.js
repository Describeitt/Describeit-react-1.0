import React from 'react'
import { useForm } from 'react-hook-form';
import '../AdvancedForm/AdvancedForm.css'
import axios from 'axios';
import { useState } from 'react';

function AdvancedForm({onGenerate}) {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      const [disable,setDisable] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
       // console.log("hi");
        const filteredFormData ={};
        Object.keys(data).forEach((key) => {
            if(data[key]){
                filteredFormData[key] = data[key];
            }
        });
       // console.log(filteredFormData);
        setDisable(true)
        const prompt = "consider yourself a content generator. I am giving you a html  form's data in json form. create a beautiful description of the property based on it. I am directly going to publish your generation on my website. Do not add any extra amendities or features apart from the form data. Strictly do not add extra data or descriptions or information apart from the given data. Here is your data -> \n"
        const generatedText = document.getElementById('generatedText');
        generatedText.value = "Generating your Description ! ..."
        const formDataString = prompt+JSON.stringify(filteredFormData, null, 2);
        var response;
        onGenerate(true);
        try {
            response = await axios.post('https://describeit-backend-1-0.onrender.com/api/describeit/', { "prompt":formDataString });
            generatedText.value=(response.data.result);
        } catch (error) {
            //generatedText.value=("error generating your description");
            console.error('Error:', error);
        }finally{
            onGenerate(false);
        }
        await sleep(500);
        const generatedTexts = document.getElementById('generatedText');
        generatedTexts.value=(response.data.result);
        setDisable(false)
        //generatedText.value = formDataString;
    }
    const Bedroomoptions = [];
    Bedroomoptions.push(<option value="">Select one</option>)
    for (let index = 0; index <= 10; index++) {
        Bedroomoptions.push(<option key={index} value={index}>{index}</option>);
    }
    const Bathroomoptions = [];
    Bathroomoptions.push(<option value="">Select one</option>)
    for (let index = 0; index <= 10; index++) {
        Bathroomoptions.push(<option key={index} value={index}>{index}</option>);
    }

    return (
        <div className='AdvancedForm-container'>
            {/* <div className='formdesc'>
                <h2 className='Advanced-form-desct'>Advanced Description Generation</h2>
                <p className='Advanced-form-descp'>Fill up the form on the right side to generate advanced descriptions. Use the keyboard to search through the dropbox if required. The clarity of information that you provide help us to generate more detailed descriptions.</p>
            </div> */}
            <div className='formside'>
                {/* <h2 className='Advanced-form-title'>Advanced Generation Requirements</h2> */}
             <form onSubmit={handleSubmit(onSubmit)}>
            <div className='city-Dropdown'>
                <label className='main' htmlFor='city'>1. Select the city where your property is present:<span className="star">*</span> </label><br />
                <select required {...register("city")}>
                    <option value="">Select City</option>
                    <option value="Acalanes Ridge">Acalanes Ridge</option>
                    <option value="Acton">Acton</option>
                    <option value="Adelanto">Adelanto</option>
                    <option value="Agoura">Agoura</option>
                    <option value="Agoura Hills">Agoura Hills</option>
                    <option value="Agua Dulce">Agua Dulce</option>
                    <option value="Aguanga">Aguanga</option>
                    <option value="Ahwahnee">Ahwahnee</option>
                    <option value="Alameda">Alameda</option>
                    <option value="Alameda County">Alameda County</option>
                    <option value="Alamo">Alamo</option>
                    <option value="Albany">Albany</option>
                    <option value="Alhambra">Alhambra</option>
                    <option value="Aliso Viejo">Aliso Viejo</option>
                    <option value="Allendale">Allendale</option>
                    <option value="Alondra Park">Alondra Park</option>
                    <option value="Alpaugh">Alpaugh</option>
                    <option value="Alpine">Alpine</option>
                    <option value="Alpine County">Alpine County</option>
                    <option value="Alta Sierra">Alta Sierra</option>
                    <option value="Altadena">Altadena</option>
                    <option value="Alturas">Alturas</option>
                    <option value="Alum Rock">Alum Rock</option>
                    <option value="Amador County">Amador County</option>
                    <option value="American Canyon">American Canyon</option>
                    <option value="Amesti">Amesti</option>
                    <option value="Anaheim">Anaheim</option>
                    <option value="Anderson">Anderson</option>
                    <option value="Angels Camp">Angels Camp</option>
                    <option value="Angwin">Angwin</option>
                    <option value="Antelope">Antelope</option>
                    <option value="Antioch">Antioch</option>
                    <option value="Anza">Anza</option>
                    <option value="Apple Valley">Apple Valley</option>
                    <option value="Aptos">Aptos</option>
                    <option value="Aptos Hills-Larkin Valley">Aptos Hills-Larkin Valley</option>
                    <option value="Arbuckle">Arbuckle</option>
                    <option value="Arcadia">Arcadia</option>
                    <option value="Arcata">Arcata</option>
                    <option value="Arden-Arcade">Arden-Arcade</option>
                    <option value="Armona">Armona</option>
                    <option value="Arnold">Arnold</option>
                    <option value="Aromas">Aromas</option>
                    <option value="Arroyo Grande">Arroyo Grande</option>
                    <option value="Artesia">Artesia</option>
                    <option value="Arvin">Arvin</option>
                    <option value="Ashland">Ashland</option>
                    <option value="Atascadero">Atascadero</option>
                    <option value="Atherton">Atherton</option>
                    <option value="Atwater">Atwater</option>
                    <option value="Auberry">Auberry</option>
                    <option value="Auburn">Auburn</option>
                    <option value="Auburn Lake Trails">Auburn Lake Trails</option>
                    <option value="August">August</option>
                    <option value="Avalon">Avalon</option>
                    <option value="Avenal">Avenal</option>
                    <option value="Avila Beach">Avila Beach</option>
                    <option value="Avocado Heights">Avocado Heights</option>
                    <option value="Azusa">Azusa</option>
                    <option value="Bakersfield">Bakersfield</option>
                    <option value="Baldwin Park">Baldwin Park</option>
                    <option value="Banning">Banning</option>
                    <option value="Barstow">Barstow</option>
                    <option value="Barstow Heights">Barstow Heights</option>
                    <option value="Bay Point">Bay Point</option>
                    <option value="Bayside">Bayside</option>
                    <option value="Bayview">Bayview</option>
                    <option value="Beale Air Force Base">Beale Air Force Base</option>
                    <option value="Bear Valley Springs">Bear Valley Springs</option>
                    <option value="Beaumont">Beaumont</option>
                    <option value="Bell">Bell</option>
                    <option value="Bell Gardens">Bell Gardens</option>
                    <option value="Bella Vista">Bella Vista</option>
                    <option value="Bellflower">Bellflower</option>
                    <option value="Belmont">Belmont</option>
                    <option value="Belvedere">Belvedere</option>
                    <option value="Ben Lomond">Ben Lomond</option>
                    <option value="Benicia">Benicia</option>
                    <option value="Berkeley">Berkeley</option>
                    <option value="Bermuda Dunes">Bermuda Dunes</option>
                    <option value="Berry Creek">Berry Creek</option>
                    <option value="Bertsch-Oceanview">Bertsch-Oceanview</option>
                    <option value="Bethel Island">Bethel Island</option>
                    <option value="Beverly Hills">Beverly Hills</option>
                    <option value="Big Bear City">Big Bear City</option>
                    <option value="Big Bear Lake">Big Bear Lake</option>
                    <option value="Big Pine">Big Pine</option>
                    <option value="Big River">Big River</option>
                    <option value="Biggs">Biggs</option>
                    <option value="Biola">Biola</option>
                    <option value="Bishop">Bishop</option>
                    <option value="Black Point-Green Point">Black Point-Green Point</option>
                    <option value="Blackhawk">Blackhawk</option>
                    <option value="Bloomington">Bloomington</option>
                    <option value="Blue Lake">Blue Lake</option>
                    <option value="Blythe">Blythe</option>
                    <option value="Bodega Bay">Bodega Bay</option>
                    <option value="Bodfish">Bodfish</option>
                    <option value="Bolinas">Bolinas</option>
                    <option value="Bonadelle Ranchos-Madera Ranchos">Bonadelle Ranchos-Madera Ranchos</option>
                    <option value="Bonita">Bonita</option>
                    <option value="Bonny Doon">Bonny Doon</option>
                    <option value="Bonsall">Bonsall</option>
                    <option value="Boonville">Boonville</option>
                    <option value="Boron">Boron</option>
                    <option value="Boronda">Boronda</option>
                    <option value="Borrego Springs">Borrego Springs</option>
                    <option value="Bostonia">Bostonia</option>
                    <option value="Boulder Creek">Boulder Creek</option>
                    <option value="Boyes Hot Springs">Boyes Hot Springs</option>
                    <option value="Boyle Heights">Boyle Heights</option>
                    <option value="Bradbury">Bradbury</option>
                    <option value="Brawley">Brawley</option>
                    <option value="Brea">Brea</option>
                    <option value="Brentwood">Brentwood</option>
                    <option value="Bret Harte">Bret Harte</option>
                    <option value="Bridgeport">Bridgeport</option>
                    <option value="Brisbane">Brisbane</option>
                    <option value="Broadmoor">Broadmoor</option>
                    <option value="Brookdale">Brookdale</option>
                    <option value="Brooktrails">Brooktrails</option>
                    <option value="Buckhorn">Buckhorn</option>
                    <option value="Buellton">Buellton</option>
                    <option value="Buena Park">Buena Park</option>
                    <option value="Buena Vista">Buena Vista</option>
                    <option value="Burbank">Burbank</option>
                    <option value="Burlingame">Burlingame</option>
                    <option value="Burney">Burney</option>
                    <option value="Butte County">Butte County</option>
                    <option value="Buttonwillow">Buttonwillow</option>
                    <option value="Byron">Byron</option>
                    <option value="Bystrom">Bystrom</option>
                    <option value="Cabazon">Cabazon</option>
                    <option value="Calabasas">Calabasas</option>
                    <option value="Calaveras County">Calaveras County</option>
                    <option value="Calexico">Calexico</option>
                    <option value="California City">California City</option>
                    <option value="Calimesa">Calimesa</option>
                    <option value="Calipatria">Calipatria</option>
                    <option value="Calistoga">Calistoga</option>
                    <option value="Callender">Callender</option>
                    <option value="Camarillo">Camarillo</option>
                    <option value="Cambria">Cambria</option>
                    <option value="Cambrian Park">Cambrian Park</option>
                    <option value="Cameron Park">Cameron Park</option>
                    <option value="Camino">Camino</option>
                    <option value="Camp Meeker">Camp Meeker</option>
                    <option value="Camp Pendleton North">Camp Pendleton North</option>
                    <option value="Camp Pendleton South">Camp Pendleton South</option>
                    <option value="Campbell">Campbell</option>
                    <option value="Campo">Campo</option>
                    <option value="Canoga Park">Canoga Park</option>
                    <option value="Canyon Lake">Canyon Lake</option>
                    <option value="Capitola">Capitola</option>
                    <option value="Carlsbad">Carlsbad</option>
                    <option value="Carmel Valley Village">Carmel Valley Village</option>
                    <option value="Carmel-by-the-Sea">Carmel-by-the-Sea</option>
                    <option value="Carmichael">Carmichael</option>
                    <option value="Carpinteria">Carpinteria</option>
                    <option value="Carson">Carson</option>
                    <option value="Caruthers">Caruthers</option>
                    <option value="Casa Conejo">Casa Conejo</option>
                    <option value="Casa de Oro-Mount Helix">Casa de Oro-Mount Helix</option>
                    <option value="Castaic">Castaic</option>
                    <option value="Castro Valley">Castro Valley</option>
                    <option value="Castroville">Castroville</option>
                    <option value="Cathedral City">Cathedral City</option>
                    <option value="Cayucos">Cayucos</option>
                    <option value="Cedar Ridge">Cedar Ridge</option>
                    <option value="Central Valley (historical)">Central Valley (historical)</option>
                    <option value="Century City">Century City</option>
                    <option value="Ceres">Ceres</option>
                    <option value="Cerritos">Cerritos</option>
                    <option value="Challenge-Brownsville">Challenge-Brownsville</option>
                    <option value="Channel Islands Beach">Channel Islands Beach</option>
                    <option value="Charter Oak">Charter Oak</option>
                    <option value="Chatsworth">Chatsworth</option>
                    <option value="Cherry Valley">Cherry Valley</option>
                    <option value="Cherryland">Cherryland</option>
                    <option value="Chester">Chester</option>
                    <option value="Chico">Chico</option>
                    <option value="China Lake Acres">China Lake Acres</option>
                    <option value="Chinatown">Chinatown</option>
                    <option value="Chino">Chino</option>
                    <option value="Chino Hills">Chino Hills</option>
                    <option value="Chowchilla">Chowchilla</option>
                    <option value="Chualar">Chualar</option>
                    <option value="Chula Vista">Chula Vista</option>
                    <option value="Citrus">Citrus</option>
                    <option value="Citrus Heights">Citrus Heights</option>
                    <option value="City and County of San Francisco">City and County of San Francisco</option>
                    <option value="Claremont">Claremont</option>
                    <option value="Clay">Clay</option>
                    <option value="Clayton">Clayton</option>
                    <option value="Clear Lake Riviera">Clear Lake Riviera</option>
                    <option value="Clearlake">Clearlake</option>
                    <option value="Clearlake Oaks">Clearlake Oaks</option>
                    <option value="Cloverdale">Cloverdale</option>
                    <option value="Clovis">Clovis</option>
                    <option value="Coachella">Coachella</option>
                    <option value="Coalinga">Coalinga</option>
                    <option value="Coarsegold">Coarsegold</option>
                    <option value="Cobb">Cobb</option>
                    <option value="Colfax">Colfax</option>
                    <option value="Collierville">Collierville</option>
                    <option value="Colma">Colma</option>
                    <option value="Colton">Colton</option>
                    <option value="Columbia">Columbia</option>
                    <option value="Colusa">Colusa</option>
                    <option value="Colusa County">Colusa County</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Compton">Compton</option>
                    <option value="Concord">Concord</option>
                    <option value="Contra Costa Centre">Contra Costa Centre</option>
                    <option value="Contra Costa County">Contra Costa County</option>
                    <option value="Cool">Cool</option>
                    <option value="Copperopolis">Copperopolis</option>
                    <option value="Corcoran">Corcoran</option>
                    <option value="Corning">Corning</option>
                    <option value="Corona">Corona</option>
                    <option value="Coronado">Coronado</option>
                    <option value="Corralitos">Corralitos</option>
                    <option value="Corte Madera">Corte Madera</option>
                    <option value="Costa Mesa">Costa Mesa</option>
                    <option value="Cotati">Cotati</option>
                    <option value="Coto De Caza">Coto De Caza</option>
                    <option value="Cottonwood">Cottonwood</option>
                    <option value="Country Club">Country Club</option>
                    <option value="Covelo">Covelo</option>
                    <option value="Covina">Covina</option>
                    <option value="Crescent City">Crescent City</option>
                    <option value="Crest">Crest</option>
                    <option value="Crestline">Crestline</option>
                    <option value="Crockett">Crockett</option>
                    <option value="Cudahy">Cudahy</option>
                    <option value="Culver City">Culver City</option>
                    <option value="Cupertino">Cupertino</option>
                    <option value="Cutler">Cutler</option>
                    <option value="Cutten">Cutten</option>
                    <option value="Cypress">Cypress</option>
                    <option value="Daly City">Daly City</option>
                    <option value="Dana Point">Dana Point</option>
                    <option value="Danville">Danville</option>
                    <option value="Davis">Davis</option>
                    <option value="Day Valley">Day Valley</option>
                    <option value="Deer Park">Deer Park</option>
                    <option value="Del Aire">Del Aire</option>
                    <option value="Del Mar">Del Mar</option>
                    <option value="Del Monte Forest">Del Monte Forest</option>
                    <option value="Del Norte County">Del Norte County</option>
                    <option value="Del Rey">Del Rey</option>
                    <option value="Del Rey Oaks">Del Rey Oaks</option>
                    <option value="Del Rio">Del Rio</option>
                    <option value="Delano">Delano</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Denair">Denair</option>
                    <option value="Descanso">Descanso</option>
                    <option value="Desert Edge">Desert Edge</option>
                    <option value="Desert Hot Springs">Desert Hot Springs</option>
                    <option value="Desert Shores">Desert Shores</option>
                    <option value="Desert View Highlands">Desert View Highlands</option>
                    <option value="Diablo">Diablo</option>
                    <option value="Diamond Bar">Diamond Bar</option>
                    <option value="Diamond Springs">Diamond Springs</option>
                    <option value="Dinuba">Dinuba</option>
                    <option value="Discovery Bay">Discovery Bay</option>
                    <option value="Dixon">Dixon</option>
                    <option value="Dixon Lane-Meadow Creek">Dixon Lane-Meadow Creek</option>
                    <option value="Dogtown">Dogtown</option>
                    <option value="Dollar Point">Dollar Point</option>
                    <option value="Dos Palos">Dos Palos</option>
                    <option value="Downey">Downey</option>
                    <option value="Downieville">Downieville</option>
                    <option value="Duarte">Duarte</option>
                    <option value="Dublin">Dublin</option>
                    <option value="Dunnigan">Dunnigan</option>
                    <option value="Dunsmuir">Dunsmuir</option>
                    <option value="Durham">Durham</option>
                    <option value="Earlimart">Earlimart</option>
                    <option value="East Foothills">East Foothills</option>
                    <option value="East Hemet">East Hemet</option>
                    <option value="East La Mirada">East La Mirada</option>
                    <option value="East Los Angeles">East Los Angeles</option>
                    <option value="East Oakdale">East Oakdale</option>
                    <option value="East Palo Alto">East Palo Alto</option>
                    <option value="East Pasadena">East Pasadena</option>
                    <option value="East Porterville">East Porterville</option>
                    <option value="East Quincy">East Quincy</option>
                    <option value="East Rancho Dominguez">East Rancho Dominguez</option>
                    <option value="East Richmond Heights">East Richmond Heights</option>
                    <option value="East San Gabriel">East San Gabriel</option>
                    <option value="East Sonora">East Sonora</option>
                    <option value="Easton">Easton</option>
                    <option value="Eastvale">Eastvale</option>
                    <option value="Echo Park">Echo Park</option>
                    <option value="Edwards Air Force Base">Edwards Air Force Base</option>
                    <option value="El Cajon">El Cajon</option>
                    <option value="El Centro">El Centro</option>
                    <option value="El Cerrito">El Cerrito</option>
                    <option value="El Cerrito Corona">El Cerrito Corona</option>
                    <option value="El Dorado County">El Dorado County</option>
                    <option value="El Dorado Hills">El Dorado Hills</option>
                    <option value="El Granada">El Granada</option>
                    <option value="El Monte">El Monte</option>
                    <option value="El Rio">El Rio</option>
                    <option value="El Segundo">El Segundo</option>
                    <option value="El Sobrante">El Sobrante</option>
                    <option value="El Verano">El Verano</option>
                    <option value="Eldridge">Eldridge</option>
                    <option value="Elk Grove">Elk Grove</option>
                    <option value="Elkhorn">Elkhorn</option>
                    <option value="Elverta">Elverta</option>
                    <option value="Emerald Lake Hills">Emerald Lake Hills</option>
                    <option value="Emeryville">Emeryville</option>
                    <option value="Empire">Empire</option>
                    <option value="Encinitas">Encinitas</option>
                    <option value="Encino">Encino</option>
                    <option value="Escalon">Escalon</option>
                    <option value="Escondido">Escondido</option>
                    <option value="Esparto">Esparto</option>
                    <option value="Eucalyptus Hills">Eucalyptus Hills</option>
                    <option value="Eureka">Eureka</option>
                    <option value="Exeter">Exeter</option>
                    <option value="Fair Oaks">Fair Oaks</option>
                    <option value="Fairbanks Ranch">Fairbanks Ranch</option>
                    <option value="Fairfax">Fairfax</option>
                    <option value="Fairfield">Fairfield</option>
                    <option value="Fairmead">Fairmead</option>
                    <option value="Fairview">Fairview</option>
                    <option value="Fallbrook">Fallbrook</option>
                    <option value="Farmersville">Farmersville</option>
                    <option value="Felton">Felton</option>
                    <option value="Ferndale">Ferndale</option>
                    <option value="Fetters Hot Springs-Agua Caliente">Fetters Hot Springs-Agua Caliente</option>
                    <option value="Fillmore">Fillmore</option>
                    <option value="Firebaugh">Firebaugh</option>
                    <option value="Florence-Graham">Florence-Graham</option>
                    <option value="Florin">Florin</option>
                    <option value="Folsom">Folsom</option>
                    <option value="Fontana">Fontana</option>
                    <option value="Foothill Farms">Foothill Farms</option>
                    <option value="Foothill Ranch">Foothill Ranch</option>
                    <option value="Ford City">Ford City</option>
                    <option value="Forest Meadows">Forest Meadows</option>
                    <option value="Forest Ranch">Forest Ranch</option>
                    <option value="Foresthill">Foresthill</option>
                    <option value="Forestville">Forestville</option>
                    <option value="Fort Bragg">Fort Bragg</option>
                    <option value="Fort Irwin">Fort Irwin</option>
                    <option value="Fortuna">Fortuna</option>
                    <option value="Foster City">Foster City</option>
                    <option value="Fountain Valley">Fountain Valley</option>
                    <option value="Fowler">Fowler</option>
                    <option value="Frazier Park">Frazier Park</option>
                    <option value="Freedom">Freedom</option>
                    <option value="Fremont">Fremont</option>
                    <option value="French Camp">French Camp</option>
                    <option value="Fresno">Fresno</option>
                    <option value="Fresno County">Fresno County</option>
                    <option value="Fruitridge Pocket">Fruitridge Pocket</option>
                    <option value="Fullerton">Fullerton</option>
                    <option value="Galt">Galt</option>
                    <option value="Garden Acres">Garden Acres</option>
                    <option value="Garden Grove">Garden Grove</option>
                    <option value="Gardena">Gardena</option>
                    <option value="Garnet">Garnet</option>
                    <option value="Georgetown">Georgetown</option>
                    <option value="Gerber">Gerber</option>
                    <option value="Gilroy">Gilroy</option>
                    <option value="Glen Avon">Glen Avon</option>
                    <option value="Glendale">Glendale</option>
                    <option value="Glendora">Glendora</option>
                    <option value="Glenn County">Glenn County</option>
                    <option value="Gold River">Gold River</option>
                    <option value="Golden Hills">Golden Hills</option>
                    <option value="Goleta">Goleta</option>
                    <option value="Gonzales">Gonzales</option>
                    <option value="Good Hope">Good Hope</option>
                    <option value="Goshen">Goshen</option>
                    <option value="Grand Terrace">Grand Terrace</option>
                    <option value="Granite Bay">Granite Bay</option>
                    <option value="Granite Hills">Granite Hills</option>
                    <option value="Grass Valley">Grass Valley</option>
                    <option value="Graton">Graton</option>
                    <option value="Green Acres">Green Acres</option>
                    <option value="Green Valley">Green Valley</option>
                    <option value="Greenacres">Greenacres</option>
                    <option value="Greenfield">Greenfield</option>
                    <option value="Greenville">Greenville</option>
                    <option value="Gridley">Gridley</option>
                    <option value="Grover Beach">Grover Beach</option>
                    <option value="Guadalupe">Guadalupe</option>
                    <option value="Guerneville">Guerneville</option>
                    <option value="Gustine">Gustine</option>
                    <option value="Hacienda Heights">Hacienda Heights</option>
                    <option value="Half Moon Bay">Half Moon Bay</option>
                    <option value="Hamilton City">Hamilton City</option>
                    <option value="Hanford">Hanford</option>
                    <option value="Happy Camp">Happy Camp</option>
                    <option value="Harbison Canyon">Harbison Canyon</option>
                    <option value="Hartley">Hartley</option>
                    <option value="Hawaiian Gardens">Hawaiian Gardens</option>
                    <option value="Hawthorne">Hawthorne</option>
                    <option value="Hayfork">Hayfork</option>
                    <option value="Hayward">Hayward</option>
                    <option value="Healdsburg">Healdsburg</option>
                    <option value="Heber">Heber</option>
                    <option value="Hemet">Hemet</option>
                    <option value="Herald">Herald</option>
                    <option value="Hercules">Hercules</option>
                    <option value="Hermosa Beach">Hermosa Beach</option>
                    <option value="Hesperia">Hesperia</option>
                    <option value="Hidden Hills">Hidden Hills</option>
                    <option value="Hidden Meadows">Hidden Meadows</option>
                    <option value="Hidden Valley Lake">Hidden Valley Lake</option>
                    <option value="Highgrove">Highgrove</option>
                    <option value="Highland">Highland</option>
                    <option value="Highlands-Baywood Park">Highlands-Baywood Park</option>
                    <option value="Hillsborough">Hillsborough</option>
                    <option value="Hilmar-Irwin">Hilmar-Irwin</option>
                    <option value="Hollister">Hollister</option>
                    <option value="Hollywood">Hollywood</option>
                    <option value="Holtville">Holtville</option>
                    <option value="Home Garden">Home Garden</option>
                    <option value="Home Gardens">Home Gardens</option>
                    <option value="Homeland">Homeland</option>
                    <option value="Hughson">Hughson</option>
                    <option value="Humboldt County">Humboldt County</option>
                    <option value="Humboldt Hill">Humboldt Hill</option>
                    <option value="Huntington Beach">Huntington Beach</option>
                    <option value="Huntington Park">Huntington Park</option>
                    <option value="Huron">Huron</option>
                    <option value="Hydesville">Hydesville</option>
                    <option value="Idyllwild">Idyllwild</option>
                    <option value="Idyllwild-Pine Cove">Idyllwild-Pine Cove</option>
                    <option value="Imperial">Imperial</option>
                    <option value="Imperial Beach">Imperial Beach</option>
                    <option value="Imperial County">Imperial County</option>
                    <option value="Indian Wells">Indian Wells</option>
                    <option value="Indio">Indio</option>
                    <option value="Inglewood">Inglewood</option>
                    <option value="Interlaken">Interlaken</option>
                    <option value="Inverness">Inverness</option>
                    <option value="Inyo County">Inyo County</option>
                    <option value="Inyokern">Inyokern</option>
                    <option value="Ione">Ione</option>
                    <option value="Irvine">Irvine</option>
                    <option value="Irwindale">Irwindale</option>
                    <option value="Isla Vista">Isla Vista</option>
                    <option value="Ivanhoe">Ivanhoe</option>
                    <option value="Jackson">Jackson</option>
                    <option value="Jamestown">Jamestown</option>
                    <option value="Jamul">Jamul</option>
                    <option value="Janesville">Janesville</option>
                    <option value="Johnstonville">Johnstonville</option>
                    <option value="Joshua Tree">Joshua Tree</option>
                    <option value="Julian">Julian</option>
                    <option value="Jurupa Valley">Jurupa Valley</option>
                    <option value="Kelseyville">Kelseyville</option>
                    <option value="Kennedy">Kennedy</option>
                    <option value="Kensington">Kensington</option>
                    <option value="Kentfield">Kentfield</option>
                    <option value="Kenwood">Kenwood</option>
                    <option value="Kerman">Kerman</option>
                    <option value="Kern County">Kern County</option>
                    <option value="Kernville">Kernville</option>
                    <option value="Kettleman City">Kettleman City</option>
                    <option value="Keyes">Keyes</option>
                    <option value="King City">King City</option>
                    <option value="Kings Beach">Kings Beach</option>
                    <option value="Kings County">Kings County</option>
                    <option value="Kingsburg">Kingsburg</option>
                    <option value="Knightsen">Knightsen</option>
                    <option value="Koreatown">Koreatown</option>
                    <option value="La Cañada Flintridge">La Cañada Flintridge</option>
                    <option value="La Crescenta-Montrose">La Crescenta-Montrose</option>
                    <option value="La Habra">La Habra</option>
                    <option value="La Habra Heights">La Habra Heights</option>
                    <option value="La Jolla">La Jolla</option>
                    <option value="La Mesa">La Mesa</option>
                    <option value="La Mirada">La Mirada</option>
                    <option value="La Palma">La Palma</option>
                    <option value="La Presa">La Presa</option>
                    <option value="La Puente">La Puente</option>
                    <option value="La Quinta">La Quinta</option>
                    <option value="La Riviera">La Riviera</option>
                    <option value="La Selva Beach">La Selva Beach</option>
                    <option value="La Verne">La Verne</option>
                    <option value="Ladera">Ladera</option>
                    <option value="Ladera Heights">Ladera Heights</option>
                    <option value="Ladera Ranch">Ladera Ranch</option>
                    <option value="Lafayette">Lafayette</option>
                    <option value="Laguna">Laguna</option>
                    <option value="Laguna Beach">Laguna Beach</option>
                    <option value="Laguna Hills">Laguna Hills</option>
                    <option value="Laguna Niguel">Laguna Niguel</option>
                    <option value="Laguna Woods">Laguna Woods</option>
                    <option value="Lagunitas-Forest Knolls">Lagunitas-Forest Knolls</option>
                    <option value="Lake Arrowhead">Lake Arrowhead</option>
                    <option value="Lake County">Lake County</option>
                    <option value="Lake Elsinore">Lake Elsinore</option>
                    <option value="Lake Forest">Lake Forest</option>
                    <option value="Lake Isabella">Lake Isabella</option>
                    <option value="Lake Los Angeles">Lake Los Angeles</option>
                    <option value="Lake Nacimiento">Lake Nacimiento</option>
                    <option value="Lake of the Pines">Lake of the Pines</option>
                    <option value="Lake San Marcos">Lake San Marcos</option>
                    <option value="Lake Wildwood">Lake Wildwood</option>
                    <option value="Lakeland Village">Lakeland Village</option>
                    <option value="Lakeport">Lakeport</option>
                    <option value="Lakeside">Lakeside</option>
                    <option value="Lakeview">Lakeview</option>
                    <option value="Lakewood">Lakewood</option>
                    <option value="Lamont">Lamont</option>
                    <option value="Lancaster">Lancaster</option>
                    <option value="Larkfield-Wikiup">Larkfield-Wikiup</option>
                    <option value="Larkspur">Larkspur</option>
                    <option value="Las Flores">Las Flores</option>
                    <option value="Las Lomas">Las Lomas</option>
                    <option value="Lassen County">Lassen County</option>
                    <option value="Lathrop">Lathrop</option>
                    <option value="Laton">Laton</option>
                    <option value="Lawndale">Lawndale</option>
                    <option value="Laytonville">Laytonville</option>
                    <option value="Le Grand">Le Grand</option>
                    <option value="Lebec">Lebec</option>
                    <option value="Lemon Grove">Lemon Grove</option>
                    <option value="Lemoore">Lemoore</option>
                    <option value="Lemoore Station">Lemoore Station</option>
                    <option value="Lennox">Lennox</option>
                    <option value="Lenwood">Lenwood</option>
                    <option value="Leona Valley">Leona Valley</option>
                    <option value="Lewiston">Lewiston</option>
                    <option value="Lexington Hills">Lexington Hills</option>
                    <option value="Lincoln">Lincoln</option>
                    <option value="Lincoln Village">Lincoln Village</option>
                    <option value="Linda">Linda</option>
                    <option value="Linden">Linden</option>
                    <option value="Lindsay">Lindsay</option>
                    <option value="Littlerock">Littlerock</option>
                    <option value="Live Oak">Live Oak</option>
                    <option value="Livermore">Livermore</option>
                    <option value="Livingston">Livingston</option>
                    <option value="Lockeford">Lockeford</option>
                    <option value="Lodi">Lodi</option>
                    <option value="Loma Linda">Loma Linda</option>
                    <option value="Loma Rica">Loma Rica</option>
                    <option value="Lomita">Lomita</option>
                    <option value="Lompico">Lompico</option>
                    <option value="Lompoc">Lompoc</option>
                    <option value="London">London</option>
                    <option value="Lone Pine">Lone Pine</option>
                    <option value="Long Beach">Long Beach</option>
                    <option value="Loomis">Loomis</option>
                    <option value="Los Alamitos">Los Alamitos</option>
                    <option value="Los Alamos">Los Alamos</option>
                    <option value="Los Altos">Los Altos</option>
                    <option value="Los Altos Hills">Los Altos Hills</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Los Angeles County">Los Angeles County</option>
                    <option value="Los Banos">Los Banos</option>
                    <option value="Los Gatos">Los Gatos</option>
                    <option value="Los Molinos">Los Molinos</option>
                    <option value="Los Olivos">Los Olivos</option>
                    <option value="Los Osos">Los Osos</option>
                    <option value="Los Serranos">Los Serranos</option>
                    <option value="Lost Hills">Lost Hills</option>
                    <option value="Lower Lake">Lower Lake</option>
                    <option value="Loyola">Loyola</option>
                    <option value="Lucas Valley-Marinwood">Lucas Valley-Marinwood</option>
                    <option value="Lucerne">Lucerne</option>
                    <option value="Lucerne Valley">Lucerne Valley</option>
                    <option value="Lynwood">Lynwood</option>
                    <option value="Madera">Madera</option>
                    <option value="Madera Acres">Madera Acres</option>
                    <option value="Madera County">Madera County</option>
                    <option value="Magalia">Magalia</option>
                    <option value="Malibu">Malibu</option>
                    <option value="Mammoth Lakes">Mammoth Lakes</option>
                    <option value="Manhattan Beach">Manhattan Beach</option>
                    <option value="Manteca">Manteca</option>
                    <option value="March Air Force Base">March Air Force Base</option>
                    <option value="Maricopa">Maricopa</option>
                    <option value="Marin City">Marin City</option>
                    <option value="Marin County">Marin County</option>
                    <option value="Marina">Marina</option>
                    <option value="Marina del Rey">Marina del Rey</option>
                    <option value="Mariposa">Mariposa</option>
                    <option value="Mariposa County">Mariposa County</option>
                    <option value="Martinez">Martinez</option>
                    <option value="Marysville">Marysville</option>
                    <option value="Matheny">Matheny</option>
                    <option value="Maxwell">Maxwell</option>
                    <option value="Mayflower Village">Mayflower Village</option>
                    <option value="Maywood">Maywood</option>
                    <option value="McCloud">McCloud</option>
                    <option value="McFarland">McFarland</option>
                    <option value="McKinleyville">McKinleyville</option>
                    <option value="Mead Valley">Mead Valley</option>
                    <option value="Meadow Vista">Meadow Vista</option>
                    <option value="Meadowbrook">Meadowbrook</option>
                    <option value="Mecca">Mecca</option>
                    <option value="Meiners Oaks">Meiners Oaks</option>
                    <option value="Mendocino County">Mendocino County</option>
                    <option value="Mendota">Mendota</option>
                    <option value="Menifee">Menifee</option>
                    <option value="Menlo Park">Menlo Park</option>
                    <option value="Mentone">Mentone</option>
                    <option value="Merced">Merced</option>
                    <option value="Merced County">Merced County</option>
                    <option value="Mesa Verde">Mesa Verde</option>
                    <option value="Middletown">Middletown</option>
                    <option value="Midpines">Midpines</option>
                    <option value="Midway City">Midway City</option>
                    <option value="Mill Valley">Mill Valley</option>
                    <option value="Millbrae">Millbrae</option>
                    <option value="Milpitas">Milpitas</option>
                    <option value="Minkler">Minkler</option>
                    <option value="Mira Mesa">Mira Mesa</option>
                    <option value="Mira Monte">Mira Monte</option>
                    <option value="Mission Canyon">Mission Canyon</option>
                    <option value="Mission District">Mission District</option>
                    <option value="Mission Hills">Mission Hills</option>
                    <option value="Mission Viejo">Mission Viejo</option>
                    <option value="Modesto">Modesto</option>
                    <option value="Modoc County">Modoc County</option>
                    <option value="Mojave">Mojave</option>
                    <option value="Mono County">Mono County</option>
                    <option value="Mono Vista">Mono Vista</option>
                    <option value="Monrovia">Monrovia</option>
                    <option value="Montague">Montague</option>
                    <option value="Montalvin">Montalvin</option>
                    <option value="Montara">Montara</option>
                    <option value="Montclair">Montclair</option>
                    <option value="Monte Rio">Monte Rio</option>
                    <option value="Monte Sereno">Monte Sereno</option>
                    <option value="Montebello">Montebello</option>
                    <option value="Montecito">Montecito</option>
                    <option value="Monterey">Monterey</option>
                    <option value="Monterey County">Monterey County</option>
                    <option value="Monterey Park">Monterey Park</option>
                    <option value="Monument Hills">Monument Hills</option>
                    <option value="Moorpark">Moorpark</option>
                    <option value="Morada">Morada</option>
                    <option value="Moraga">Moraga</option>
                    <option value="Moreno Valley">Moreno Valley</option>
                    <option value="Morgan Hill">Morgan Hill</option>
                    <option value="Morongo Valley">Morongo Valley</option>
                    <option value="Morro Bay">Morro Bay</option>
                    <option value="Moss Beach">Moss Beach</option>
                    <option value="Mount Hermon">Mount Hermon</option>
                    <option value="Mount Shasta">Mount Shasta</option>
                    <option value="Mountain House">Mountain House</option>
                    <option value="Mountain Ranch">Mountain Ranch</option>
                    <option value="Mountain View">Mountain View</option>
                    <option value="Mountain View Acres">Mountain View Acres</option>
                    <option value="Murphys">Murphys</option>
                    <option value="Murrieta">Murrieta</option>
                    <option value="Murrieta Hot Springs">Murrieta Hot Springs</option>
                    <option value="Muscoy">Muscoy</option>
                    <option value="Myrtletown">Myrtletown</option>
                    <option value="Napa">Napa</option>
                    <option value="Napa County">Napa County</option>
                    <option value="National City">National City</option>
                    <option value="Needles">Needles</option>
                    <option value="Nevada City">Nevada City</option>
                    <option value="Nevada County">Nevada County</option>
                    <option value="Newark">Newark</option>
                    <option value="Newcastle">Newcastle</option>
                    <option value="Newman">Newman</option>
                    <option value="Newport Beach">Newport Beach</option>
                    <option value="Nice">Nice</option>
                    <option value="Niland">Niland</option>
                    <option value="Nipomo">Nipomo</option>
                    <option value="Noe Valley">Noe Valley</option>
                    <option value="Norco">Norco</option>
                    <option value="North Auburn">North Auburn</option>
                    <option value="North Edwards">North Edwards</option>
                    <option value="North El Monte">North El Monte</option>
                    <option value="North Fair Oaks">North Fair Oaks</option>
                    <option value="North Highlands">North Highlands</option>
                    <option value="North Hills">North Hills</option>
                    <option value="North Hollywood">North Hollywood</option>
                    <option value="North Lakeport">North Lakeport</option>
                    <option value="North Richmond">North Richmond</option>
                    <option value="North Tustin">North Tustin</option>
                    <option value="Northridge">Northridge</option>
                    <option value="Norwalk">Norwalk</option>
                    <option value="Novato">Novato</option>
                    <option value="Nuevo">Nuevo</option>
                    <option value="Oak Hills">Oak Hills</option>
                    <option value="Oak Park">Oak Park</option>
                    <option value="Oak View">Oak View</option>
                    <option value="Oakdale">Oakdale</option>
                    <option value="Oakhurst">Oakhurst</option>
                    <option value="Oakland">Oakland</option>
                    <option value="Oakley">Oakley</option>
                    <option value="Oasis">Oasis</option>
                    <option value="Occidental">Occidental</option>
                    <option value="Oceano">Oceano</option>
                    <option value="Oceanside">Oceanside</option>
                    <option value="Oildale">Oildale</option>
                    <option value="Ojai">Ojai</option>
                    <option value="Old Fig Garden">Old Fig Garden</option>
                    <option value="Olivehurst">Olivehurst</option>
                    <option value="Ontario">Ontario</option>
                    <option value="Opal Cliffs">Opal Cliffs</option>
                    <option value="Orange">Orange</option>
                    <option value="Orange County">Orange County</option>
                    <option value="Orange Cove">Orange Cove</option>
                    <option value="Orangevale">Orangevale</option>
                    <option value="Orcutt">Orcutt</option>
                    <option value="Orinda">Orinda</option>
                    <option value="Orland">Orland</option>
                    <option value="Orosi">Orosi</option>
                    <option value="Oroville">Oroville</option>
                    <option value="Oroville East">Oroville East</option>
                    <option value="Oxnard">Oxnard</option>
                    <option value="Pacheco">Pacheco</option>
                    <option value="Pacific Grove">Pacific Grove</option>
                    <option value="Pacifica">Pacifica</option>
                    <option value="Pajaro">Pajaro</option>
                    <option value="Palermo">Palermo</option>
                    <option value="Palm Desert">Palm Desert</option>
                    <option value="Palm Springs">Palm Springs</option>
                    <option value="Palmdale">Palmdale</option>
                    <option value="Palo Alto">Palo Alto</option>
                    <option value="Palo Cedro">Palo Cedro</option>
                    <option value="Palos Verdes Estates">Palos Verdes Estates</option>
                    <option value="Paradise">Paradise</option>
                    <option value="Paramount">Paramount</option>
                    <option value="Parksdale">Parksdale</option>
                    <option value="Parkway">Parkway</option>
                    <option value="Parkwood">Parkwood</option>
                    <option value="Parlier">Parlier</option>
                    <option value="Pasadena">Pasadena</option>
                    <option value="Pasatiempo">Pasatiempo</option>
                    <option value="Paso Robles">Paso Robles</option>
                    <option value="Patterson">Patterson</option>
                    <option value="Patterson Tract">Patterson Tract</option>
                    <option value="Pedley">Pedley</option>
                    <option value="Penn Valley">Penn Valley</option>
                    <option value="Penngrove">Penngrove</option>
                    <option value="Perris">Perris</option>
                    <option value="Petaluma">Petaluma</option>
                    <option value="Phelan">Phelan</option>
                    <option value="Phoenix Lake">Phoenix Lake</option>
                    <option value="Pico Rivera">Pico Rivera</option>
                    <option value="Piedmont">Piedmont</option>
                    <option value="Pine Grove">Pine Grove</option>
                    <option value="Pine Hills">Pine Hills</option>
                    <option value="Pine Mountain Club">Pine Mountain Club</option>
                    <option value="Pine Valley">Pine Valley</option>
                    <option value="Pinole">Pinole</option>
                    <option value="Piñon Hills">Piñon Hills</option>
                    <option value="Pioneer">Pioneer</option>
                    <option value="Piru">Piru</option>
                    <option value="Pismo Beach">Pismo Beach</option>
                    <option value="Pittsburg">Pittsburg</option>
                    <option value="Pixley">Pixley</option>
                    <option value="Placentia">Placentia</option>
                    <option value="Placer County">Placer County</option>
                    <option value="Placerville">Placerville</option>
                    <option value="Planada">Planada</option>
                    <option value="Pleasant Hill">Pleasant Hill</option>
                    <option value="Pleasanton">Pleasanton</option>
                    <option value="Plumas County">Plumas County</option>
                    <option value="Plumas Lake">Plumas Lake</option>
                    <option value="Pollock Pines">Pollock Pines</option>
                    <option value="Pomona">Pomona</option>
                    <option value="Poplar-Cotton Center">Poplar-Cotton Center</option>
                    <option value="Port Hueneme">Port Hueneme</option>
                    <option value="Porterville">Porterville</option>
                    <option value="Portola">Portola</option>
                    <option value="Portola Hills">Portola Hills</option>
                    <option value="Portola Valley">Portola Valley</option>
                    <option value="Poway">Poway</option>
                    <option value="Prunedale">Prunedale</option>
                    <option value="Quail Valley">Quail Valley</option>
                    <option value="Quartz Hill">Quartz Hill</option>
                    <option value="Quincy">Quincy</option>
                    <option value="Rainbow">Rainbow</option>
                    <option value="Ramona">Ramona</option>
                    <option value="Rancho Calaveras">Rancho Calaveras</option>
                    <option value="Rancho Cordova">Rancho Cordova</option>
                    <option value="Rancho Cucamonga">Rancho Cucamonga</option>
                    <option value="Rancho Mirage">Rancho Mirage</option>
                    <option value="Rancho Murieta">Rancho Murieta</option>
                    <option value="Rancho Palos Verdes">Rancho Palos Verdes</option>
                    <option value="Rancho Penasquitos">Rancho Penasquitos</option>
                    <option value="Rancho San Diego">Rancho San Diego</option>
                    <option value="Rancho Santa Fe">Rancho Santa Fe</option>
                    <option value="Rancho Santa Margarita">Rancho Santa Margarita</option>
                    <option value="Rancho Tehama Reserve">Rancho Tehama Reserve</option>
                    <option value="Red Bluff">Red Bluff</option>
                    <option value="Red Corral">Red Corral</option>
                    <option value="Redding">Redding</option>
                    <option value="Redlands">Redlands</option>
                    <option value="Redondo Beach">Redondo Beach</option>
                    <option value="Redway">Redway</option>
                    <option value="Redwood City">Redwood City</option>
                    <option value="Redwood Shores">Redwood Shores</option>
                    <option value="Redwood Valley">Redwood Valley</option>
                    <option value="Reedley">Reedley</option>
                    <option value="Rialto">Rialto</option>
                    <option value="Richgrove">Richgrove</option>
                    <option value="Richmond">Richmond</option>
                    <option value="Ridgecrest">Ridgecrest</option>
                    <option value="Ridgemark">Ridgemark</option>
                    <option value="Rio Del Mar">Rio Del Mar</option>
                    <option value="Rio Dell">Rio Dell</option>
                    <option value="Rio Linda">Rio Linda</option>
                    <option value="Rio Vista">Rio Vista</option>
                    <option value="Ripon">Ripon</option>
                    <option value="Riverbank">Riverbank</option>
                    <option value="Riverdale">Riverdale</option>
                    <option value="Riverdale Park">Riverdale Park</option>
                    <option value="Riverside">Riverside</option>
                    <option value="Riverside County">Riverside County</option>
                    <option value="Rocklin">Rocklin</option>
                    <option value="Rodeo">Rodeo</option>
                    <option value="Rohnert Park">Rohnert Park</option>
                    <option value="Rolling Hills">Rolling Hills</option>
                    <option value="Rolling Hills Estates">Rolling Hills Estates</option>
                    <option value="Rollingwood">Rollingwood</option>
                    <option value="Romoland">Romoland</option>
                    <option value="Rosamond">Rosamond</option>
                    <option value="Rosedale">Rosedale</option>
                    <option value="Roseland">Roseland</option>
                    <option value="Rosemead">Rosemead</option>
                    <option value="Rosemont">Rosemont</option>
                    <option value="Roseville">Roseville</option>
                    <option value="Ross">Ross</option>
                    <option value="Rossmoor">Rossmoor</option>
                    <option value="Rowland Heights">Rowland Heights</option>
                    <option value="Rubidoux">Rubidoux</option>
                    <option value="Running Springs">Running Springs</option>
                    <option value="Sacramento">Sacramento</option>
                    <option value="Sacramento County">Sacramento County</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Salida">Salida</option>
                    <option value="Salinas">Salinas</option>
                    <option value="Salton City">Salton City</option>
                    <option value="San Andreas">San Andreas</option>
                    <option value="San Anselmo">San Anselmo</option>
                    <option value="San Antonio Heights">San Antonio Heights</option>
                    <option value="San Benito County">San Benito County</option>
                    <option value="San Bernardino">San Bernardino</option>
                    <option value="San Bernardino County">San Bernardino County</option>
                    <option value="San Bruno">San Bruno</option>
                    <option value="San Carlos">San Carlos</option>
                    <option value="San Clemente">San Clemente</option>
                    <option value="San Diego">San Diego</option>
                    <option value="San Diego Country Estates">San Diego Country Estates</option>
                    <option value="San Diego County">San Diego County</option>
                    <option value="San Dimas">San Dimas</option>
                    <option value="San Fernando">San Fernando</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="San Gabriel">San Gabriel</option>
                    <option value="San Jacinto">San Jacinto</option>
                    <option value="San Joaquin">San Joaquin</option>
                    <option value="San Joaquin County">San Joaquin County</option>
                    <option value="San Joaquin Hills">San Joaquin Hills</option>
                    <option value="San Jose">San Jose</option>
                    <option value="San Juan Bautista">San Juan Bautista</option>
                    <option value="San Juan Capistrano">San Juan Capistrano</option>
                    <option value="San Leandro">San Leandro</option>
                    <option value="San Lorenzo">San Lorenzo</option>
                    <option value="San Luis Obispo">San Luis Obispo</option>
                    <option value="San Luis Obispo County">San Luis Obispo County</option>
                    <option value="San Marcos">San Marcos</option>
                    <option value="San Marino">San Marino</option>
                    <option value="San Martin">San Martin</option>
                    <option value="San Mateo">San Mateo</option>
                    <option value="San Mateo County">San Mateo County</option>
                    <option value="San Miguel">San Miguel</option>
                    <option value="San Pablo">San Pablo</option>
                    <option value="San Pasqual">San Pasqual</option>
                    <option value="San Pedro">San Pedro</option>
                    <option value="San Rafael">San Rafael</option>
                    <option value="San Ramon">San Ramon</option>
                    <option value="Sanger">Sanger</option>
                    <option value="Santa Ana">Santa Ana</option>
                    <option value="Santa Barbara">Santa Barbara</option>
                    <option value="Santa Barbara County">Santa Barbara County</option>
                    <option value="Santa Clara">Santa Clara</option>
                    <option value="Santa Clara County">Santa Clara County</option>
                    <option value="Santa Clarita">Santa Clarita</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santa Cruz County">Santa Cruz County</option>
                    <option value="Santa Fe Springs">Santa Fe Springs</option>
                    <option value="Santa Margarita">Santa Margarita</option>
                    <option value="Santa Maria">Santa Maria</option>
                    <option value="Santa Monica">Santa Monica</option>
                    <option value="Santa Paula">Santa Paula</option>
                    <option value="Santa Rosa">Santa Rosa</option>
                    <option value="Santa Susana">Santa Susana</option>
                    <option value="Santa Venetia">Santa Venetia</option>
                    <option value="Santa Ynez">Santa Ynez</option>
                    <option value="Santee">Santee</option>
                    <option value="Saranap">Saranap</option>
                    <option value="Saratoga">Saratoga</option>
                    <option value="Saticoy">Saticoy</option>
                    <option value="Sausalito">Sausalito</option>
                    <option value="Scotts Valley">Scotts Valley</option>
                    <option value="Sea Ranch">Sea Ranch</option>
                    <option value="Seacliff">Seacliff</option>
                    <option value="Seal Beach">Seal Beach</option>
                    <option value="Searles Valley">Searles Valley</option>
                    <option value="Seaside">Seaside</option>
                    <option value="Sebastopol">Sebastopol</option>
                    <option value="Sedco Hills">Sedco Hills</option>
                    <option value="Seeley">Seeley</option>
                    <option value="Selma">Selma</option>
                    <option value="Seven Trees">Seven Trees</option>
                    <option value="Shackelford">Shackelford</option>
                    <option value="Shadow Hills">Shadow Hills</option>
                    <option value="Shafter">Shafter</option>
                    <option value="Shandon">Shandon</option>
                    <option value="Shasta">Shasta</option>
                    <option value="Shasta County">Shasta County</option>
                    <option value="Shasta Lake">Shasta Lake</option>
                    <option value="Sheridan">Sheridan</option>
                    <option value="Sherman Oaks">Sherman Oaks</option>
                    <option value="Shingle Springs">Shingle Springs</option>
                    <option value="Shingletown">Shingletown</option>
                    <option value="Sierra County">Sierra County</option>
                    <option value="Sierra Madre">Sierra Madre</option>
                    <option value="Signal Hill">Signal Hill</option>
                    <option value="Silver Lake">Silver Lake</option>
                    <option value="Silver Lakes">Silver Lakes</option>
                    <option value="Simi Valley">Simi Valley</option>
                    <option value="Siskiyou County">Siskiyou County</option>
                    <option value="Sky Valley">Sky Valley</option>
                    <option value="Sleepy Hollow">Sleepy Hollow</option>
                    <option value="Soda Bay">Soda Bay</option>
                    <option value="Solana Beach">Solana Beach</option>
                    <option value="Solano County">Solano County</option>
                    <option value="Soledad">Soledad</option>
                    <option value="Solvang">Solvang</option>
                    <option value="Sonoma">Sonoma</option>
                    <option value="Sonoma County">Sonoma County</option>
                    <option value="Sonora">Sonora</option>
                    <option value="Soquel">Soquel</option>
                    <option value="Sorrento Valley">Sorrento Valley</option>
                    <option value="Soulsbyville">Soulsbyville</option>
                    <option value="South Dos Palos">South Dos Palos</option>
                    <option value="South El Monte">South El Monte</option>
                    <option value="South Gate">South Gate</option>
                    <option value="South Lake Tahoe">South Lake Tahoe</option>
                    <option value="South Oroville">South Oroville</option>
                    <option value="South Pasadena">South Pasadena</option>
                    <option value="South San Francisco">South San Francisco</option>
                    <option value="South San Gabriel">South San Gabriel</option>
                    <option value="South San Jose Hills">South San Jose Hills</option>
                    <option value="South Taft">South Taft</option>
                    <option value="South Whittier">South Whittier</option>
                    <option value="South Yuba City">South Yuba City</option>
                    <option value="Spring Valley">Spring Valley</option>
                    <option value="Spring Valley Lake">Spring Valley Lake</option>
                    <option value="Squaw Valley">Squaw Valley</option>
                    <option value="Stallion Springs">Stallion Springs</option>
                    <option value="Stanford">Stanford</option>
                    <option value="Stanislaus County">Stanislaus County</option>
                    <option value="Stanton">Stanton</option>
                    <option value="Stevenson Ranch">Stevenson Ranch</option>
                    <option value="Stockton">Stockton</option>
                    <option value="Stratford">Stratford</option>
                    <option value="Strathmore">Strathmore</option>
                    <option value="Strawberry">Strawberry</option>
                    <option value="Studio City">Studio City</option>
                    <option value="Suisun">Suisun</option>
                    <option value="Summerland">Summerland</option>
                    <option value="Sun City">Sun City</option>
                    <option value="Sun Village">Sun Village</option>
                    <option value="Sunland">Sunland</option>
                    <option value="Sunnyside">Sunnyside</option>
                    <option value="Sunnyside-Tahoe City">Sunnyside-Tahoe City</option>
                    <option value="Sunnyslope">Sunnyslope</option>
                    <option value="Sunnyvale">Sunnyvale</option>
                    <option value="Susanville">Susanville</option>
                    <option value="Sutter">Sutter</option>
                    <option value="Sutter County">Sutter County</option>
                    <option value="Sutter Creek">Sutter Creek</option>
                    <option value="Taft">Taft</option>
                    <option value="Taft Heights">Taft Heights</option>
                    <option value="Taft Mosswood">Taft Mosswood</option>
                    <option value="Tahoe Vista">Tahoe Vista</option>
                    <option value="Tahoma">Tahoma</option>
                    <option value="Talmage">Talmage</option>
                    <option value="Tamalpais Valley">Tamalpais Valley</option>
                    <option value="Tamalpais-Homestead Valley">Tamalpais-Homestead Valley</option>
                    <option value="Tara Hills">Tara Hills</option>
                    <option value="Tarpey Village">Tarpey Village</option>
                    <option value="Tehachapi">Tehachapi</option>
                    <option value="Tehama County">Tehama County</option>
                    <option value="Temecula">Temecula</option>
                    <option value="Temelec">Temelec</option>
                    <option value="Temple City">Temple City</option>
                    <option value="Templeton">Templeton</option>
                    <option value="Terra Bella">Terra Bella</option>
                    <option value="Teviston">Teviston</option>
                    <option value="Thermal">Thermal</option>
                    <option value="Thermalito">Thermalito</option>
                    <option value="Thornton">Thornton</option>
                    <option value="Thousand Oaks">Thousand Oaks</option>
                    <option value="Thousand Palms">Thousand Palms</option>
                    <option value="Three Rivers">Three Rivers</option>
                    <option value="Tiburon">Tiburon</option>
                    <option value="Tierra Buena">Tierra Buena</option>
                    <option value="Tipton">Tipton</option>
                    <option value="Topanga">Topanga</option>
                    <option value="Toro Canyon">Toro Canyon</option>
                    <option value="Torrance">Torrance</option>
                    <option value="Trabuco Canyon">Trabuco Canyon</option>
                    <option value="Tracy">Tracy</option>
                    <option value="Trinity County">Trinity County</option>
                    <option value="Truckee">Truckee</option>
                    <option value="Tujunga">Tujunga</option>
                    <option value="Tulare">Tulare</option>
                    <option value="Tulare County">Tulare County</option>
                    <option value="Tuolumne City">Tuolumne City</option>
                    <option value="Tuolumne County">Tuolumne County</option>
                    <option value="Turlock">Turlock</option>
                    <option value="Tustin">Tustin</option>
                    <option value="Twain Harte">Twain Harte</option>
                    <option value="Twentynine Palms">Twentynine Palms</option>
                    <option value="Twin Lakes">Twin Lakes</option>
                    <option value="Ukiah">Ukiah</option>
                    <option value="Union City">Union City</option>
                    <option value="Universal City">Universal City</option>
                    <option value="Upland">Upland</option>
                    <option value="Upper Lake">Upper Lake</option>
                    <option value="Vacaville">Vacaville</option>
                    <option value="Val Verde">Val Verde</option>
                    <option value="Valencia">Valencia</option>
                    <option value="Valinda">Valinda</option>
                    <option value="Valle Vista">Valle Vista</option>
                    <option value="Vallejo">Vallejo</option>
                    <option value="Valley Center">Valley Center</option>
                    <option value="Valley Glen">Valley Glen</option>
                    <option value="Valley Springs">Valley Springs</option>
                    <option value="Van Nuys">Van Nuys</option>
                    <option value="Vandenberg Air Force Base">Vandenberg Air Force Base</option>
                    <option value="Vandenberg Village">Vandenberg Village</option>
                    <option value="Venice">Venice</option>
                    <option value="Ventura">Ventura</option>
                    <option value="Ventura County">Ventura County</option>
                    <option value="Victorville">Victorville</option>
                    <option value="View Park-Windsor Hills">View Park-Windsor Hills</option>
                    <option value="Villa Park">Villa Park</option>
                    <option value="Vincent">Vincent</option>
                    <option value="Vine Hill">Vine Hill</option>
                    <option value="Vineyard">Vineyard</option>
                    <option value="Visalia">Visalia</option>
                    <option value="Visitacion Valley">Visitacion Valley</option>
                    <option value="Vista">Vista</option>
                    <option value="Vista Santa Rosa">Vista Santa Rosa</option>
                    <option value="Waldon">Waldon</option>
                    <option value="Walnut">Walnut</option>
                    <option value="Walnut Creek">Walnut Creek</option>
                    <option value="Walnut Grove">Walnut Grove</option>
                    <option value="Walnut Park">Walnut Park</option>
                    <option value="Wasco">Wasco</option>
                    <option value="Waterford">Waterford</option>
                    <option value="Watsonville">Watsonville</option>
                    <option value="Weaverville">Weaverville</option>
                    <option value="Weed">Weed</option>
                    <option value="Weedpatch">Weedpatch</option>
                    <option value="Weldon">Weldon</option>
                    <option value="West Athens">West Athens</option>
                    <option value="West Bishop">West Bishop</option>
                    <option value="West Carson">West Carson</option>
                    <option value="West Covina">West Covina</option>
                    <option value="West Hills">West Hills</option>
                    <option value="West Hollywood">West Hollywood</option>
                    <option value="West Menlo Park">West Menlo Park</option>
                    <option value="West Modesto">West Modesto</option>
                    <option value="West Park">West Park</option>
                    <option value="West Puente Valley">West Puente Valley</option>
                    <option value="West Rancho Dominguez">West Rancho Dominguez</option>
                    <option value="West Sacramento">West Sacramento</option>
                    <option value="West Whittier-Los Nietos">West Whittier-Los Nietos</option>
                    <option value="Westhaven-Moonstone">Westhaven-Moonstone</option>
                    <option value="Westlake Village">Westlake Village</option>
                    <option value="Westminster">Westminster</option>
                    <option value="Westmont">Westmont</option>
                    <option value="Westmorland">Westmorland</option>
                    <option value="Westwood">Westwood</option>
                    <option value="Wheatland">Wheatland</option>
                    <option value="Whittier">Whittier</option>
                    <option value="Wildomar">Wildomar</option>
                    <option value="Williams">Williams</option>
                    <option value="Willits">Willits</option>
                    <option value="Willow Creek">Willow Creek</option>
                    <option value="Willowbrook">Willowbrook</option>
                    <option value="Willows">Willows</option>
                    <option value="Wilton">Wilton</option>
                    <option value="Winchester">Winchester</option>
                    <option value="Windsor">Windsor</option>
                    <option value="Winter Gardens">Winter Gardens</option>
                    <option value="Winters">Winters</option>
                    <option value="Winton">Winton</option>
                    <option value="Wofford Heights">Wofford Heights</option>
                    <option value="Woodacre">Woodacre</option>
                    <option value="Woodbridge">Woodbridge</option>
                    <option value="Woodcrest">Woodcrest</option>
                    <option value="Woodlake">Woodlake</option>
                    <option value="Woodland">Woodland</option>
                    <option value="Woodland Hills">Woodland Hills</option>
                    <option value="Woodside">Woodside</option>
                    <option value="Woodville">Woodville</option>
                    <option value="Wrightwood">Wrightwood</option>
                    <option value="Yolo County">Yolo County</option>
                    <option value="Yorba Linda">Yorba Linda</option>
                    <option value="Yosemite Lakes">Yosemite Lakes</option>
                    <option value="Yosemite Valley">Yosemite Valley</option>
                    <option value="Yountville">Yountville</option>
                    <option value="Yreka">Yreka</option>
                    <option value="Yuba City">Yuba City</option>
                    <option value="Yuba County">Yuba County</option>
                    <option value="Yucaipa">Yucaipa</option>
                    <option value="Yucca Valley">Yucca Valley</option>
</select>
            </div>
            <div className='bedrooms'>
                <label className='main' htmlFor='bedroom'>2. Select number of bedrooms your property have:<span className="star">*</span> </label>
                <div className='options-div'>
                    <select required {...register("bedroom")}>
                        {Bedroomoptions}
                    </select>
                </div>
            </div>
            <div className='bathrooms'>
                <label className='main' htmlFor='bathroom'>3. Select number of bathrooms your property have:<span className="star">*</span> </label>
                <div className='options-div'>
                <select required {...register("bathroom")}>
                    {Bathroomoptions}
                </select>
                </div>
            </div>
            <div className='renovations'>
                <label className='main' htmlFor='renovation'>4. Is the property renovated?<span className="star">*</span> </label>
                <div className='options-div'>
                    <select required {...register("renovation")}>
                    <option value="">Select one</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="partially-renovated">Partially Renovated</option>
                    <option value="TLC-fixer">TLC - Fixer</option>
                    </select>
                </div>
            </div>
            <div className='year-built'>
                <label className='main' htmlFor='year-built'>5. When was the property established/built?</label>
                <div className='options-div'>
                <input type='text' maxLength={4} className='textboxs' id='year-built' {...register("year-built", {})} />
                </div>
            </div>
            <div className='property-area'>
                <label className='main' htmlFor='property-area'>6. What is the lot size of the property? (in sq ft)<span className="star">*</span></label>
                <div className='options-div'>
                <input required type='text' className='textboxs' id='property-area' {...register("property-lot-area-in-sqft", {})} />
                </div>
            </div>
            <div className='property-area'>
                <label className='main' htmlFor='property-area'>7. What is the living area of the property? (in sq ft)<span className="star">*</span></label>
                <div className='options-div'>
                <input required type='text' className='textboxs' id='property-area' {...register("property-living-area-in-sqft", {})} />
                </div>
            </div>
            
            <div>
                <label className='main' htmlFor='type'>8. What type best fits your property?</label><br/>
                <label className='option' htmlFor='single'><input {...register("type")} id='single' type="radio" value="single-family home" />Single-family Home</label> <br/>
                <label className='option' htmlFor='town'><input {...register("type")} id='town' type="radio" value="town home" />Town Home</label> <br/>
                <label className='option' htmlFor='condo'><input {...register("type")} id='condo' type="radio" value="condo" />Condo</label> <br/>
                <label className='option' htmlFor='mobile'><input {...register("type")} type="radio" id='mobile' value="mobile home" />Mobile Home</label> <br/>
            </div>
            <div>
                <label className='main' htmlFor='special'>9. Do you have any special facilities?</label><br />
                <input type="checkbox" id='fireplace' placeholder="fireplace" {...register("Special features-fireplace", {})} /><label className='option' htmlFor='fireplace'>Fireplace</label><br />
                <input type="checkbox" id='swim' placeholder="swimming pool" {...register("Special Features-swimming pool", {})} /><label className='option' htmlFor='swim'>Swimming Pool</label><br />
                <input type="checkbox" id='soft' placeholder="Water Softener" {...register("Special Features-water softener", {})} /><label className='option' htmlFor='soft'>Water Softener</label><br />
                <input type="checkbox" id='ev' placeholder="EV Charger" {...register("Special Features-ev charger", {})} /><label className='option' htmlFor='ev'>EV Charger</label><br />
                 <input type="checkbox" id='garden' placeholder="Garden" {...register("Special Features-garden", {})} /><label className='option' htmlFor='garden'>Garden</label><br/>
                 <input type="checkbox" id='other-special' placeholder="Others/None" {...register("Special Features-none-or-other", {})} /><label className='option' htmlFor='garden'>Others</label>
            </div>
            <div className='other-special'>
                <label className='main' htmlFor='other-special-facilities'>If you chose Others from above, mention the facilities here.</label>
                <div className='options-div'>
                <input type='text' maxLength={300} className='textboxs' id='other-special-facilities' {...register("other-special-facilities", {})} />
                </div>
            </div>
            <div>
                <label className='main' htmlFor='flooring'>10. What flooring material does your Property have?</label><br />
                <label className='option' htmlFor='hardwood'><input {...register("flooring-type")} id='hardwood' type="radio" value="Hardwood" />Hardwood</label> <br />
                <label className='option' htmlFor='tile'><input {...register("flooring-type")} id='tile' type="radio" value="Tile" />Tile</label><br />
                <label className='option' htmlFor='carpet'><input {...register("flooring-type")} id='carpet' type="radio" value="carpet" />Carpet</label><br />
                <label className='option' htmlFor='pvc'><input {...register("flooring-type")} type="radio" id='pvc' value="pvc" />PVC</label><br />
                <label className='option' htmlFor='other-flooring'><input {...register("flooring-type")} type="radio" id='other-flooring' value="others" />Others</label><br />
            </div>
            <div className='other-flooring'>
                <label className='main' htmlFor='other-flooring-material'>If you chose Others from above, mention the flooring material here.</label>
                <div className='options-div'>
                <input type='text' maxLength={300} className='textboxs' id='other-flooring-material' {...register("other-special-facilities", {})} />
                </div>
            </div>
            <div className="outdoor-space-div">
                <label className='main' htmlFor='special'>11. Does your property have any Outdoor Space?</label><br />
                <input  type="checkbox" id='patio' placeholder="patio" {...register("Outdoor Space - Patio", {})} /><label className='option' htmlFor='patio'>Fireplace</label><br />
                <input  type="checkbox" id='balcony' placeholder="balcny" {...register("Outdoor Space-Balcony", {})} /><label className='option' htmlFor='blacony'>Balcony</label><br />
                <input type="checkbox" id='deck' placeholder="Deck" {...register("Outdoor Space-Deck", {})} /><label className='option' htmlFor='deck'>Deck</label><br />
                <input  type="checkbox" id='tennis court' placeholder="tennis court" {...register("Outdoor space-tennis Court", {})} /><label className='option' htmlFor='tennis court'>Tennis Court</label><br />
                 <input  type="checkbox" id='basketball court' placeholder="basketball court" {...register("Outdoor Space-basketball Court", {})} /><label className='option' htmlFor='basketball court'>Basketball Court</label><br/>
                 <input  type="checkbox" id='others-space' placeholder="others" {...register("Outdoor Space-others-or-none", {})} /><label className='option' htmlFor='others-space'>Others</label> 
            </div>
            <div className='other-outdoor-spaces'>
                <label className='main' htmlFor='other-outdoor-space'>If you chose Others from above, mention the outdoor spaces available.</label>
                <div className='options-div'>
                <input type='text' maxLength={300} className='textboxs' id='other-outdoor-space' {...register("other-outdoor-space", {})} />
                </div>
            </div>
            <div>
                <label className='main' htmlFor='neighbourhood'>12. What is your properties Neighbourhood or Community Name?</label><br/><input className='textboxs' id='neighbourhood' maxLength={300} type="text" {...register("neighbourhood", {})} />
            </div>
            <div>
                <label className='main' htmlFor='proximity'>13. What is your properties proximity to schools, parks, centers and public transportation?</label><br/><input id='proximity' maxLength={300} className='textboxs' type="text" {...register("proximity", {})} />
            </div>
            <div>
                <label className='main' htmlFor='poa'>14. Nearest points of attraction for your property:</label><br/><input id='poa' className='textboxs' maxLength={300} type="text" {...register("Nearest points of interest", {})} />
            </div>
            <div className='other-basic'>
                <label className='main' htmlFor='other-info'>15. Do you have anything to tell about the property?</label>
                <div className='options-div'>
                <textarea className='adtextarea' maxLength={300} id='other-info' {...register("extra-description-of-the-property", {})} />
                </div>
            </div>
            <div className='submitdiv'>
            <input disabled={disable} className='submit-btn' type="submit" value='Generate'/>
            </div>
            </form>
            </div>
        </div>
    );
}


export default AdvancedForm