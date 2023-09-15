function decodeNumber() {
  const partNumberInput = document.getElementById("partNumber");
  const partNumber = partNumberInput.value;
  const outputTable = document.getElementById("outputTable");

  // Fill in the appropriate cases and descriptions for each function
  const seriesCode = partNumber.slice(0,2);
  const seriesDescription = getSeries(seriesCode);

  const motorCode = partNumber.slice(2, 4);
  const motorDescription = getMotorDescription(motorCode);

  const arrangementCode = partNumber.slice(4,6);
  const arrangementDescription = getArrangement(arrangementCode);

  const modCode = partNumber.slice(6, 8);
  const modDescription = getModule(modCode);

  const materialCode = partNumber.slice(8, 10);
  const materialDescription = getMaterial(materialCode);

  const sealingCode = partNumber.slice(10, 11);
  const sealingDescription = getSealing(sealingCode);

  const impellerStyleCode = partNumber.slice(11, 12);
  const impellerStyleDescription = getImpellerStyle(impellerStyleCode);

  const wearRingCasingCode = partNumber.slice(12, 13);
  const wearRingCasingDescription = getWearRingCasing(wearRingCasingCode);

  const wearRingBackplateCode = partNumber.slice(13, 14);
  const wearRingBackplateDescription = getWearRingBackplate(wearRingBackplateCode);

  const wearRingImpellerCode = partNumber.slice(14, 15);
  const wearRingImpellerDescription = getWearRingImpeller(wearRingImpellerCode);

  const driveTypeCode = partNumber.slice(15, 16);
  const driveTypeDescription = getDriveType(driveTypeCode);

  const flangeOptionsCode = partNumber.slice(16, 17);
  const flangeOptionsDescription = getFlangeOptions(flangeOptionsCode);

  const internalCoatingCode = partNumber.slice(17, 18);
  const internalCoatingDescription = getInternalCoating(internalCoatingCode);

  const sealFlushingCode = partNumber.slice(18, 19);
  const sealFlushingDescription = getSealFlushing(sealFlushingCode);

  const baseOptionsCode = partNumber.slice(19, 20);
  const baseOptionsDescription = getBaseplateOptions(baseOptionsCode);

  const motorOptionsCode = partNumber.slice(20, 21);
  const motorOptionsDescription = getMotorOption(motorOptionsCode);

  // Update the output table
  outputTable.innerHTML = `
      <tr>
          <th>Option Type</th>
          <th>Code</th>
          <th>Option</th>
      </tr>
      <tr>
          <td>Series</td>
          <td>${seriesCode}</td>
          <td>${seriesDescription} Series</td>
        </tr>
    <tr>
        <td>Motor</td>
        <td>${motorCode}</td>
        <td>${motorDescription}</td>
    </tr>

    <tr>
        <td>Pump Arrangement</td>
        <td>${arrangementCode}</td>
        <td>${arrangementDescription}</td>
    </tr>

    <tr>
        <td>Module No.</td>
        <td>${modCode}</td>
        <td>${modDescription}</td>
    </tr>
    <tr>
        <td>Material</td>
        <td>${materialCode}</td>
        <td>${materialDescription}</td>
    </tr>
    <tr>
        <td>Sealing</td>
        <td>${sealingCode}</td>
        <td>${sealingDescription}</td>
    </tr>
    <tr>
        <td>Impeller Style</td>
        <td>${impellerStyleCode}</td>
        <td>${impellerStyleDescription}</td>
    </tr>
    <tr>
        <td>Casing Wear-Ring</td>
        <td>${wearRingCasingCode}</td>
        <td>${wearRingCasingDescription}</td>
    </tr>

    <tr>
        <td>Backplate Wear-Ring</td>
        <td>${wearRingBackplateCode}</td>
        <td>${wearRingBackplateDescription}</td>
    </tr>

    <tr>
        <td>Impeller Wear-Ring</td>
        <td>${wearRingImpellerCode}</td>
        <td>${wearRingImpellerDescription}</td>
    </tr>

    <tr>
        <td>Drive Type</td>
        <td>${driveTypeCode}</td>
        <td>${driveTypeDescription}</td>
    </tr>

    <tr>
        <td>Flange Options</td>
        <td>${flangeOptionsCode}</td>
        <td>${flangeOptionsDescription}</td>
    </tr>
    <tr>
        <td>Internal Coating</td>
        <td>${internalCoatingCode}</td>
        <td>${internalCoatingDescription}</td>
    </tr>
    <tr>
        <td>Seal Flushing</td>
        <td>${sealFlushingCode}</td>
        <td>${sealFlushingDescription}</td>
    </tr>
    <tr>
        <td>Baseplate Options</td>
        <td>${baseOptionsCode}</td>
        <td>${baseOptionsDescription}</td>
    </tr>

    <tr>
        <td>Motor Options</td>
        <td>${motorOptionsCode}</td>
        <td>${motorOptionsDescription}</td>
    </tr>
`;
}

            function getSeries(code) {
                let description = '';
                switch (code) {
                    case '19':
                        description = '50x32-160';
                        break;
                    case '38':
                        description = '65x50-160';
                        break;
                    case '45':
                        description = '80x65-160';
                        break;
                    case '20':
                        description = '50x32-200';
                        break;
                    case '28':
                        description = '65x40-200';
                        break;
                    case '39':
                        description = '80x50-200';
                        break;
                    case '55':
                        description = '100x80-160';
                        break;
                    case '46':
                        description = '100x65-200';
                        break;
                    case '62':
                        description = '25x100-200';
                        break;
                    case '74':
                        description = '150x150-200';
                        break;
                    case '29':
                        description = '65x40-250';
                        break;
                    case '40':
                        description = '80x50-250';
                        break;
                    case '47':
                        description = '100x65-250';
                        break;
                    case '30':
                        description = '65x40-315';
                        break;
                    case '41':
                        description = '80x50x315';
                        break;
                    case '63':
                        description = '125x100-250';
                        break;
                    case '70':
                        description = '150x125-250';
                        break;
                    case '48':
                        description = '100x65-315';
                        break;
                    case '64':
                        description = '125x100-315';
                        break;
                    case '71':
                        description = '150x125-315';
                        break;
                    case '56':
                        description = '125x80-400';
                        break;
                    case '65':
                        description = '125x100-400';
                        break;
                    case '72':
                        description = '150x125-400';
                        break;
                    case '82':
                        description = '200x150-315';
                        break;
                    case '90':
                        description = '250x200-315';
                        break;
                    case '83':
                        description = '200x150-400';
                        break;
                    case '91':
                        description = '250x250-400';
                        break;
                    case '66':
                        description = '125x100-500';
                        break;
                    case '84':
                        description = '200x150-500';
                        break;
                    case '92':
                        description = 'WIP';
                        break;
                    case '93':
                        description = '300x250-400';
                        break;
                    default:
                        description = 'Unknown';
                }
                return description;
            }

            // Add your cases and descriptions for each function
            function getMotorDescription(code) {
                let description = '';

                switch (code) {
                    case '01':
                        description = '0.18 kW - 2 Pole - D63';
                        break;
                    case '02':
                        description = '';  // Add your description for code '02' here
                        break;
                    case '03':
                        description = '0.37 kW - 2 Pole - D71';
                        break;
                    case '04':
                        description = '0.55 kW - 2 Pole - D71';
                        break;
                    case '05':
                        description = '0.75 kW - 2 Pole - D80';
                        break;
                    case '06':
                        description = '1.1 kW - 2 Pole - D80';
                        break;
                    case '07':
                        description = '1.5 kW - 2 Pole - D90';
                        break;
                    case '08':
                        description = '2.2 kW - 2 Pole - D90';
                        break;
                    case '09':
                        description = '3.0 kW - 2 Pole - D100';
                        break;
                    case '10':
                        description = '4.0 kW - 2 Pole - D112';
                        break;
                    case '11':
                        description = '5.5 kW - 2 Pole - D112';
                        break;
                    case '12':
                        description = '5.5 kW - 2 Pole - D132';
                        break;
                    case '13':
                        description = '7.5 kW - 2 Pole - D132';
                        break;
                    case '14':
                        description = '11.0 kW - 2 Pole - D160';
                        break;
                    case '15':
                        description = '15.0 kW - 2 Pole - D160';
                        break;
                    case '16':
                        description = '18.5 kW - 2 Pole - D160';
                        break;
                    case '17':
                        description = '22.0 kW - 2 Pole - D180';
                        break;
                    case '18':
                        description = '30.0 kW - 2 Pole - D200';
                        break;
                    case '19':
                        description = '37.0 kW - 2 Pole - D200L';
                        break;
                    case '20':
                        description = '45.0 kW - 2 Pole - D225';
                        break;
                    case '21':
                        description = '55.0 kW - 2 Pole - D250';
                        break;
                    case '22':
                        description = '75.0 kW - 2 Pole - D250';
                        break;
                    case '23':
                        description = '90.0 kW - 2 Pole - D280';
                        break;
                    case '24':
                        description = '110.0 kW - 2 Pole - D280';
                        break;
                    case '25':
                        description = '';  // Add your description for code '25' here
                        break;
                    case '26':
                        description = '';  // Add your description for code '26' here
                        break;
                    case '27':
                        description = '0.18 kW - 4 Pole - D63';
                        break;
                    case '28':
                        description = '';  // Add your description for code '28' here
                        break;
                    case '29':
                        description = '0.37 kW - 4 Pole - D71';
                        break;
                    case '30':
                        description = '0.55 kW - 4 Pole - D80';
                        break;
                    case '31':
                        description = '0.75 kW - 4 Pole - D80';
                        break;
                    case '32':
                        description = '1.1 kW - 4 Pole - D90S';
                        break;
                    case '33':
                        description = '1.5 kW - 4 Pole - D90L';
                        break;
                    case '34':
                        description = '2.2 kW - 4 Pole - D100L';
                        break;
                    case '35':
                        description = '3.0 kW - 4 Pole - D100L';
                        break;
                    case '36':
                        description = '4.0 kW - 4 Pole - D112M';
                        break;
                    case '37':
                        description = '5.5 kW - 4 Pole - D132S';
                        break;
                    case '38':
                        description = '7.5 kW - 4 Pole - D132M';
                        break;
                    case '39':
                        description = '11.0 kW - 4 Pole - D160M';
                        break;
                    case '40':
                        description = '15.0 kW - 4 Pole - D160L';
                        break;
                    case '41':
                        description = '18.5 kW - 4 Pole - D180M';
                        break;
                    case '42':
                        description = '22.0 kW - 4 Pole - D180L';
                        break;
                    case '43':
                        description = '30.0 kW - 4 Pole - D200L';
                        break;
                    case '44':
                        description = '37.0 kW - 4 Pole - D225S';
                        break;
                    case '45':
                        description = '45.0 kW - 4 Pole - D225M';
                        break;
                    case '46':
                        description = '55.0 kW - 4 Pole - D250S';
                        break;
                    case '47':
                        description = '75.0 kW - 4 Pole - D250M';
                        break;
                    case '48':
                        description = '90.0 kW - 4 Pole - D280S';
                        break;
                    case '49':
                        description = '110.0 kW - 4 Pole - D280M';
                        break;
                    case '50':
                        description = '132.0 kW - 4 Pole - D315S';
                        break;
                    case '51':
                        description = '150.0 kW - 4 Pole - D315M';
                        break;
                    case '52':
                        description = '160.0 kW - 4 Pole - D315L';
                        break;
                    case '53':
                        description = '185.0 kW - 4 Pole - D315';
                        break;
                    case '54':
                        description = '200.0 kW - 4 Pole - D315L';
                        break;
                    case '55':
                        description = '220.0 kW - 4 Pole - D355';
                        break;
                    case '56':
                        description = '250.0 kW - 4 Pole - D355';
                        break;
                    case '57':
                        description = '300.0 kW - 4 Pole - D355';
                        break;
                    case '58':
                        description = '355.0 kW - 4 Pole - D355';
                        break;
                    case '59':
                        description = '';  // Add your description for code '59' here
                        break;
                    case '60':
                        description = '132.0 kW - 2 Pole - D315';
                        break;
                    case '61':
                        description = '150.0 kW - 2 Pole - D315';
                        break;
                    case '62':
                        description = '160.0 kW - 2 Pole - D315';
                        break;
                    case '63':
                        description = '185.0 kW - 2 Pole - D315';
                        break;
                    case '64':
                        description = '200.0 kW - 2 Pole - D315';
                        break;
                    case '65':
                        description = '220.0 kW - 2 Pole - D355';
                        break;
                    case '66':
                        description = '250.0 kW - 2 Pole - D355';
                        break;
                    case '67':
                        description = '';  // Add your description for code '67' here
                        break;
                    case '68':
                        description = '';  // Add your description for code '68' here
                        break;
                    case '69':
                        description = '';  // Add your description for code '69' here
                        break;
                    case '70':
                        description = '9.2 kW - 2 Pole - D132';
                        break;
                    case '71':
                        description = 'GM265A';
                        break;
                    case '72':
                        description = 'GM250A';
                        break;
                    case '73':
                        description = 'GM230A';
                        break;
                    case '74':
                        description = 'GM131A';
                        break;
                    case '75':
                        description = 'GM130A';
                        break;
                    case '76':
                        description = 'Mod 2 ISO SAE5';
                        break;
                    case '77':
                        description = 'GM175C';
                        break;
                    case '78':
                        description = 'GM176C';
                        break;
                    case '79':
                        description = 'GM215A';
                        break;
                    case '80':
                        description = '';  // Add your description for code '80' here
                        break;
                    case '81':
                        description = '';  // Add your description for code '81' here
                        break;
                    case '82':
                        description = '';  // Add your description for code '82' here
                        break;
                    case '83':
                        description = '';  // Add your description for code '83' here
                        break;
                    case '84':
                        description = '';  // Add your description for code '84' here
                        break;
                    case '85':
                        description = '';  // Add your description for code '85' here
                        break;
                    case '86':
                        description = '';  // Add your description for code '86' here
                        break;
                    case '87':
                        description = 'GM215A';
                        break;
                    case '88':
                        description = '';  // Add your description for code '88' here
                        break;
                    case '89':
                        description = '';  // Add your description for code '89' here
                        break;
                    case '90':
                        description = '7.5 kW - 6 Pole - D160M';
                        break;
                    case '91':
                        description = '11.0 kW - 6 Pole - D160L';
                        break;
                    case '92':
                        description = '15.0 kW - 6 Pole - D180L';
                        break
                    case '93':
                        description = '18.5 kW - 6 Pole - D200L';
                        break;
                    case '94':
                        description = '22.0 kW - 6 Pole - D200L';
                        break;
                    case '95':
                        description = '30.0 kW - 6 Pole - D225M';
                        break;
                    case '96':
                        description = '37.0 kW - 6 Pole - D250S';
                        break;
                    case '97':
                        description = '45.0 kW - 6 Pole - D250M';
                        break;
                    case '98':
                        description = '55.0 kW - 6 Pole - D280S';
                        break;
                    case '99':
                        description = '75.0 kW - 6 Pole - D280M';
                        break;
                    default:
                        description = 'Unknown Component';
                }

                return description;
            }

             function getArrangement(code) {
                 let description = '';

                 switch (code) {
                     case 'BS':
                         description = "Bare Shaft Pump";
                         break;
                     case 'MP':
                         description = "Close Coupled Motor Pump";
                         break;
                     case 'WK':
                         description = "Wet End Kit";
                         break;
                     case 'LC':
                         description = "Long Coupled On Base Plate";
                         break;
                     case 'HD':
                         description = "Hydraulic Direct Coupled";
                         break;
                     case 'HC':
                         description = "Hydraulic Close Coupled";
                         break;
                     case 'HS':
                         description = "Hydraulic Short Coupled";
                         break;
                     case 'HB':
                         description = "Hydraulic Bare Shaft";
                         break;
                     case 'VC':
                         description = "Vertical Column";
                         break;
                     case 'CA':
                         description = "Vertical Cantilever";
                         break;
                     case 'DC':
                         description = "Direct Coupled";
                         break;
                     case 'VK':
                         description = "Vertical Column Kit (No Motor)";
                         break;
                     default:
                         description = 'Unknown Arrangement';
                 }

                 return description;
             }

            function getModule(code) {
                let description = '';

                switch (code) {
                    case '16':
                        description = 'ISO Mod 1';
                        break;
                    case '17':
                        description = 'ISO Mod 2';
                        break;
                    case '18':
                        description = 'ISO Mod 3';
                        break;
                    case '19':
                        description = 'ISO Mod 4';
                        break;
                    case '39':
                        description = 'SHD';
                        break;
                    default:
                        description = 'Unknown Module';
                }

                return description;
            }

            function getMaterial(code) {
                let description = '';

                switch (code) {
                    case '01':
                        description = 'Cast iron / Cast iron';
                        break;
                    case '02':
                        description = 'Cast iron / Bronze';
                        break;
                    case '03':
                        description = 'Bronze / Bronze';
                        break;
                    case '04':
                        description = '';  // Add your description for code '04' here
                        break;
                    case '05':
                        description = '316SS / 316SS';
                        break;
                    case '06':
                        description = '';  // Add your description for code '06' here
                        break;
                    case '07':
                        description = 'Cast iron / Chrome iron 27%';
                        break;
                    case '08':
                        description = '';  // Add your description for code '08' here
                        break;
                    case '09':
                        description = 'Chrome iron 27% / Chrome iron 27%';
                        break;
                    case '10':
                        description = 'SG iron (Ductile iron) / SG iron (Ductile iron)';
                        break;
                    case '11':
                        description = '';  // Add your description for code '11' here
                        break;
                    case '12':
                        description = 'Cast iron / 316SS';
                        break;
                    case '13':
                        description = 'SG iron (Ductile iron) / Chrome iron 27%';
                        break;
                    case '14':
                        description = 'SG iron (Ductile iron) / 316SS';
                        break;
                    case '15':
                        description = 'Bronze / Stainless steel (316)';
                        break;
                    case '16':
                        description = '';  // Add your description for code '16' here
                        break;
                    case '17':
                        description = 'Austenitic Iron / Austenitic Iron';
                        break;
                    case '18':
                        description = 'Austenitic Iron / Stainless steel (316)';
                        break;
                    case '19':
                        description = 'Duplex stainless steel (CD4MCu) / Duplex stainless steel (CD4MCu)';
                        break;
                    case '20':
                        description = '';  // Add your description for code '20' here
                        break;
                    case '21':
                        description = 'Chrome iron 27% / H3C stainless steel';
                        break;
                    case '22':
                        description = 'Austenitic Iron / Bronze';
                        break;
                    case '23':
                        description = '';  // Add your description for code '23' here
                        break;
                    case '24':
                        description = 'SG (Ductile iron) / Aluminium bronze';
                        break;
                    case '25':
                        description = '';  // Add your description for code '25' here
                        break;
                    case '31':
                        description = 'Cast steel';
                        break;
                    case '35':
                        description = 'Super duplex stainless steel / Super duplex stainless steel';
                        break;
                    case '36':
                        description = 'Cast steel / Stainless steel (316)';
                        break;
                    case '37':
                        description = 'Stainless steel (H3C) / Stainless steel (H3C)';
                        break;
                    case '38':
                        description = '';  // Add your description for code '38' here
                        break;
                    case '39':
                        description = '';  // Add your description for code '39' here
                        break;
                    case '40':
                        description = '';  // Add your description for code '40' here
                        break;
                    case '41':
                        description = 'Chrome iron 27% / 316SS';
                        break;
                    case '43':
                        description = 'Cast iron / Stainless steel (H3C)';
                        break;
                    case '46':
                        description = '';  // Add your description for code '46' here
                        break;
                    case '47':
                        description = 'Austenitic Iron / Austenitic Iron';
                        break;
                    case '52':
                        description = 'SG (Ductile iron) / Stainless steel (H3C)';
                        break;
                    // Add more cases as needed
                    default:
                        description = 'Unknown Material';
                }

                return description;
            }

            function getSealing(code) {
                let description = '';

                switch (code) {
                    case '0':
                        description = 'No Internal seal fitted NBR Casing O-ring supplied';
                        break;
                    case '1':
                        description = 'Packed gland';
                        break;
                    case '2':
                        description = 'Unbalanced Car/Cer/NBR (Type 24 DIN)';
                        break;
                    case '3':
                        description = 'STD Single balanced cartridge SiC/SiC/Aflas';
                        break;
                    case '4':
                        description = 'Unbalanced SiC/SiC/NBR (Type 24 DIN)';
                        break;
                    case '5':
                        description = 'Unbalanced Car/Cer/FPM (Viton) (Type 24 DIN)';
                        break;
                    case '6':
                        description = 'Slurry single balanced cartridge SiC/SiC/FPM 30 Bar Grease lube';
                        break;
                    case '7':
                        description = 'STD Single balanced cartridge SiC/SiC/Aflas';
                        break;
                    case '8':
                        description = 'STD Double balanced cartridge SiC/SiC/Aflas';
                        break;
                    case '9':
                        description = 'No cartridge seal fitted';
                        break;
                    case 'A':
                        description = 'Unbalanced TC/TC/FPM (Type 24 DIN)';
                        break;
                    case 'B':
                        description = 'Slurry Single Cartridge F47 40Bar';
                        break;
                    case 'C':
                        description = 'Unbalanced SiC/SiC/FPM (Viton) (Type 24 DIN)';
                        break;
                    case 'D':
                        description = '';  // Add your description for code 'D' here
                        break;
                    case 'F':
                        description = 'Unbalanced TC/TC/NBR (Type 24 DIN)';
                        break;
                    case 'G':
                        description = 'Slurry Single Cartridge SiC/SiC/Aflas 60Bar';
                        break;
                    case 'H':
                        description = 'Single balanced cartridge SiC/SiC/FPM (Flex-A-Seal)';
                        break;
                    case 'J':
                        description = 'STD Double balanced cartridge with pumping ring SiC/SiC/Aflas';
                        break;
                    case 'K':
                        description = 'Internal Balanced O-ring type seal SiC/SiC/FPM';
                        break;
                    case 'L':
                        description = 'Internal Balanced O-ring type seal Car/SiC/EPDM';
                        break;
                    case 'N':
                        description = '';  // Add your description for code 'N' here
                        break;
                    case 'P':
                        description = 'Unbalanced Car/Cer/NBR (Type 2100 DIN)';
                        break;
                    case 'Q':
                        description = 'Unbalanced SiC/SiC/NBR (Type 2100 DIN)';
                        break;
                    case 'R':
                        description = 'Unbalanced Car/Cer/FPM (Viton) (Type 2100 DIN)';
                        break;
                    case 'S':
                        description = 'Unbalanced TC/TC/FPM (Type 2100 DIN)';
                        break;
                    case 'T':
                        description = 'Unbalanced SiC/SiC/FPM (Viton) (Type 2100 DIN)';
                        break;
                    case 'U':
                        description = 'Unbalanced TC/TC/NBR (Type 2100 DIN)';
                        break;
                    case 'X':
                        description = 'No Internal seal fitted FPM (Viton) Casing O-ring supplied';
                        break;
                    case 'Y':
                        description = '';  // Add your description for code 'Y' here
                        break;
                    case 'Z':
                        description = '';  // Add your description for code 'Z' here
                        break;
                    default:
                        description = 'Unknown Sealing';
                }

                return description;
            }

            function getImpellerStyle(code) {
                let description = '';

                switch (code) {
                    case 'z':
                        description = 'N/A';
                        break;
                    case '-':
                        description = 'N/A';
                        break;
                    case '0':
                        description = 'N/A';
                        break;
                    case '1':
                        description = 'Single Spigot';
                        break;
                    case '2':
                        description = 'Double Spigot';
                        break;
                    case '3':
                        description = 'Semi-Open';
                        break;
                    case '4':
                        description = 'Semi-Vortex';
                        break;
                    case '5':
                        description = 'Unknown - Possibly Vortex';
                        break;
                    default:
                        description = 'Unknown Impeller Style'
                }

                return description;
            }

            function getWearRingCasing(code) {
                let description = '';

                switch (code) {
                    case '0':
                        description = 'No wear ring fitted';
                        break;
                    case '1':
                        description = 'Cast iron';
                        break;
                    case '2':
                        description = 'Chrome iron 27%';
                        break;
                    case '3':
                        description = 'Bronze (LG2)';
                        break;
                    case '4':
                        description = 'Stainless steel (316)';
                        break;
                    case '5':
                        description = 'Duplex stainless steel (CD4MCu)';
                        break;
                    case '6':
                        description = 'Super duplex stainless steel';
                        break;
                    case '7':
                        description = 'Bronze (Aluminium)';
                        break;
                    case '8':
                        description = 'SG iron (Ductile)';
                        break;
                    case '9':
                        description = 'Stainless steel (H3C)';
                        break;
                    case 'A':
                        description = '';  // Add your description for code 'A' here
                        break;
                    case 'B':
                        description = '';  // Add your description for code 'B' here
                        break;
                    case 'C':
                        description = '';  // Add your description for code 'C' here
                        break;
                    case 'D':
                        description = '';  // Add your description for code 'D' here
                        break;
                    case 'E':
                        description = '';  // Add your description for code 'E' here
                        break;
                    case 'F':
                        description = '';  // Add your description for code 'F' here
                        break;
                    default:
                        description = 'Unknown Wear Ring';
                }

                return description;
            }

            function getWearRingBackplate(code) {
                let description = '';

                switch (code) {
                    case '0':
                        description = 'No wear ring fitted';
                        break;
                    case '1':
                        description = 'Cast iron';
                        break;
                    case '2':
                        description = 'Chrome iron 27%';
                        break;
                    case '3':
                        description = 'Bronze (LG2)';
                        break;
                    case '4':
                        description = 'Stainless steel (316)';
                        break;
                    case '5':
                        description = 'Duplex stainless steel (CD4MCu)';
                        break;
                    case '6':
                        description = 'Super duplex stainless steel';
                        break;
                    case '7':
                        description = 'Bronze (Aluminium)';
                        break;
                    case '8':
                        description = 'SG iron (Ductile)';
                        break;
                    case '9':
                        description = 'Stainless steel (H3C)';
                        break;
                    default:
                        description = 'Unknown Wear Ring';
                }

                return description;
            }

            function getWearRingImpeller(code) {
                let description = '';

                switch (code) {
                    case '0':
                        description = 'No wear ring fitted';
                        break;
                    case '1':
                        description = 'Cast iron';
                        break;
                    case '2':
                        description = 'Chrome iron 27%';
                        break;
                    case '3':
                        description = 'Bronze (LG2)';
                        break;
                    case '4':
                        description = 'Stainless steel (316)';
                        break;
                    case '5':
                        description = 'Duplex stainless steel (CD4MCu)';
                        break;
                    case '6':
                        description = 'Super duplex stainless steel';
                        break;
                    case '7':
                        description = 'Bronze (Aluminium)';
                        break;
                    case '8':
                        description = 'SG iron (Ductile)';
                        break;
                    case '9':
                        description = 'Stainless steel (H3C)';
                        break;
                    default:
                        description = 'Unknown Wear Ring';
                }

                return description;
            }

            function getDriveType(code) {
                let description = '';

                switch (code) {
                    case '0':
                        description = 'Standard drive';
                        break;
                    case '1':
                        description = 'SAE C 2 bolt splined';
                        break;
                    case '2':
                        description = 'Regreasable bearings';
                        break;
                    case '3':
                        description = 'Drilled for RTD\'s';
                        break;
                    case '4':
                        description = 'No Lubricators fitted';
                        break;
                    case '5':
                        description = 'SAE A 2 bolt splined';
                        break;
                    case '6':
                        description = 'SAE B 2 bolt splined';
                        break;
                    case '7':
                        description = 'SAE C 4 bolt splined';
                        break;
                    case '8':
                        description = 'SAE D 4 bolt splined';
                        break;
                    case '9':
                        description = 'SAE B 2 bolt Round keyed';
                        break;
                    case 'B':
                        description = 'Heavy duty (Oil lube) drilled for RTD\'S 32mm drive Mod 1';
                        break;
                    case 'C':
                        description = 'Heavy duty (Oil lube) drilled for RTD\'S 42mm drive Mod 2';
                        break;
                    case 'D':
                        description = 'Heavy duty (Oil lube) drilled for RTD\'S 48mm drive Mod 3';
                        break;
                    case 'E':
                        description = 'Heavy duty (Oil lube) drilled for RTD\'S 60mm drive Mod 4';
                        break;
                    case 'F':
                        description = 'Heavy duty (Grease lube) Vertical operation 60mm drive end Mod 4';
                        break;
                    case 'G':
                        description = 'Heavy duty (Grease lube) Vertical operation 32mm drive end Mod 5';
                        break;
                    case 'H':
                        description = 'Heavy duty (Oil lube) drilled for RTD\'S';
                        break;
                    case 'I':
                        description = 'Heavy duty (Grease lube) Vertical operation 42mm drive end Mod 6';
                        break;
                    case 'J':
                        description = 'Heavy duty (Grease lube) Vertical operation 48mm drive end Mod 7';
                        break;
                    case 'K':
                        description = 'Special Southern Cross stub shaft for SAE C (no adaptor fitted)';
                        break;
                    case 'L':
                        description = 'Labrynth Seals fitted';
                        break;
                    case 'M':
                        description = 'Monel shaft';
                        break;
                    case 'N':
                        description = 'NEMA flanged motor';
                        break;
                    case 'P':
                        description = 'SAE C 2 bolt splined';
                        break;
                    case 'R':
                        description = 'Auto-bearing Lubricators fitted';
                        break;
                    default:
                        description = 'Unknown Drive Type';
                }

                return description;
            }

            function getFlangeOptions(code) {
                let description = '';

                switch (code) {
                    case 'z':
                        description = 'N/A';
                        break;
                    case '-':
                        description = 'N/A';
                        break;
                    case '0':
                        description = 'AS Table E';
                        break;
                    case '1':
                        description = 'ANSI 150# Raised face';
                        break;
                    case '2':
                        description = 'ANSI 150# Flat face';
                        break;
                    case '3':
                        description = 'ANSI 300# Raised face';
                        break;
                    case '4':
                        description = 'ANSI 300# Flat face';
                        break;
                    case '5':
                        description = 'DIN PN16 Raised face';
                        break;
                    case '6':
                        description = 'AS4087 Water works';
                        break;
                    case '7':
                        description = 'AS Table H';
                        break;
                    case '8':
                        description = 'DIN PN25 Raised face';
                        break;
                    case '9':
                        description = 'AS Table F';
                        break;
                    case 'A':
                        description = 'AS Table D';
                        break;
                    default:
                        description = 'Unknown Flange Options';
                }

                return description;
            }

            function getInternalCoating(code) {
                let description = '';

                switch (code) {
                    case 'z':
                        description = 'N/A';
                        break;
                    case '-':
                        description = 'N/A';
                        break;
                    case '0':
                        description = 'No Internal Coating, or NA';
                        break;
                    case '1':
                        description = 'Standard Ceramic Based Coating';
                        break;
                    case '2':
                        description = 'Epigen 1311 Ceramic';
                        break;
                    case '3':
                        description = 'Urethan Internal Coated';
                        break;
                    default:
                        description = 'Unknown Internal Coating'
                }

                return description;
            }

           function getSealFlushing(code) {
               let description = '';

               switch (code) {
                   case 'z':
                       description = 'N/A';
                       break;
                   case '-':
                       description = 'N/A';
                       break;
                   case '0':
                       description = 'No flushing';
                       break;
                   case '1':
                       description = 'API 11 (ISO code 02) flushing';
                       break;
                   case '2':
                       description = 'API 31 (ISO code 04) flushing';
                       break;
                   case '3':
                       description = 'Vertical mount seal chamber';
                       break;
                   case '4':
                       description = 'API 32 (ISO code 08) flushing';
                       break;
                   case '6':
                       description = 'DRILL/TAP VOLUTE 3/8" BSP FOR AIR BLEED Valve';
                       break;
                   case '7':
                       description = 'API 11 (ISO code 02) flushing Stainless tubing';
                       break;
                   case '8':
                       description = 'API 55 Static Quenching (barrier fluid)';
                       break;
                   case '9':
                       description = 'Grease barrier with automatic lubricator';
                       break;
                   default:
                       description = 'Unknown Seal Flushing';
               }

               return description;
           }


            function getBaseplateOptions(code) {
                let description = '';

                switch (code) {
                    case '0':
                        description = 'No base fitted';
                        break;
                    case '1':
                        description = 'Standard pressed steel galvanised base (motor pump)';
                        break;
                    case '2':
                        description = 'Underground mining base with suction spool';
                        break;
                    case '3':
                        description = 'Stainless steel (316) fabricated';
                        break;
                    case '4':
                        description = 'Steel fabricated galvanised';
                        break;
                    case '5':
                        description = ''; // Add description if needed
                        break;
                    case '6':
                        description = 'Steel fabricated galvanised with priming tee';
                        break;
                    case '7':
                        description = 'Steel fabricated for belt drive';
                        break;
                    case '8':
                        description = 'Stainless steel (304) fabricated';
                        break;
                    case '9':
                        description = 'Special fabricated (Made to order)';
                        break;
                    case 'A':
                        description = 'Surface plate Mild steel';
                        break;
                    case 'B':
                        description = 'Surface plate 316 Stainless steel';
                        break;
                    default:
                        description = 'Unknown Baseplate Option';
                }

                return description;
            }

            function getMotorOption(code) {
                let description = '';

                switch (code) {
                    case '0':
                        description = 'Stalker STD';
                        break;
                    case '1':
                        description = 'IP66';
                        break;
                    case '2':
                        description = '1000 Volt';
                        break;
                    case '3':
                        description = 'STD with VSD modifications (D280 frame and above)';
                        break;
                    case '4':
                        description = 'High Efficiency Mine spec';
                        break;
                    case '5':
                        description = 'High Efficiency';
                        break;
                    case '6':
                        description = 'Ex d flame proof';
                        break;
                    case '7':
                        description = 'Ex e Explosion proof';
                        break;
                    case '8':
                        description = 'Ex n';
                        break;
                    case '9':
                        description = 'Single phase';
                        break;
                    case 'A':
                        description = '680 volt';
                        break;
                    case 'B':
                        description = '240/480 Single phase';
                        break;
                    case 'C':
                        description = 'Mine spec 1000 Volt';
                        break;
                    case 'D':
                        description = 'Mine spec 680 Volt';
                        break;
                    case 'E':
                        description = '480 Volt 60Hz';
                        break;
                    case 'F':
                        description = '600 Volt';
                        break;
                    case 'G':
                        description = 'High Efficiency with VSD mods';
                        break;
                    case 'H':
                        description = 'High Efficiency Mine spec with VSD mods';
                        break;
                    case 'I':
                        description = 'High Efficiency 1000 Volt';
                        break;
                    case 'J':
                        description = 'High Efficiency Vertical with Rain hood';
                        break;
                    case 'K':
                        description = 'Vertical with Rain hood';
                        break;
                    case 'M':
                        description = '32CC';
                        break;
                    case 'N':
                        description = '40CC';
                        break;
                    case 'P':
                        description = '48CC';
                        break;
                    case 'Q':
                        description = '56CC';
                        break;
                    case 'U':
                        description = '168CC';
                        break;
                    default:
                        description = 'Unknown Motor Option';
                }

                return description;
            }