import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

import { Icons } from '@src/assets';
import { Icon } from '@src/components/AppIcon';

import useProductsList from './viewModel';

const ClaimInsuranceScreen = () => {
  const {
    contents,
    data,
    emojisWithIcons,
    handleRegisterClaim,
    insuranceTypes,
    onClaimTypeChange,
    otherServices,
    styles,
    onNationalIdChange,
    onCaseRefChange,
  } = useProductsList();

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView style={styles.container}>
        <View style={styles.claimSection}>
          <ScrollView style={styles.claimTypeContainer} horizontal={true}>
            {insuranceTypes.map(type => (
              <TouchableOpacity
                key={type.id}
                style={[
                  styles.claimButton,
                  data.claimType?.id === type.id && styles.activeButton,
                ]}
                onPress={() => onClaimTypeChange(type)}>
                <Icon
                  icon={type.icon}
                  style={[
                    styles.claimIcon,
                    data.claimType?.id === type.id && styles.activeIconColor,
                  ]}
                />
                <Text
                  style={[
                    styles.claimButtonText,
                    data.claimType?.id === type.id && styles.activeButtonText,
                  ]}>
                  {type.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.claimFormContainer}>
            <SelectDropdown
              data={emojisWithIcons}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.title) ||
                        contents('claimType')}
                    </Text>
                    <Icon
                      icon={isOpened ? Icons.UP_ARROW : Icons.DOWN_ARROW}
                      style={styles.dropdownButtonArrowStyle}
                    />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View style={styles.dropdownItemStyle}>
                    <Text style={styles.dropdownItemTxtStyle}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />

            <View style={styles.inputView}>
              <Icon style={styles.prefixIconLeft} icon={Icons.IDENTITY} />
              <TextInput
                style={styles.input}
                value={data.idNo}
                onChangeText={onNationalIdChange}
                placeholder={contents('nationalIdPlaceholder')}
                keyboardType="default"
              />
              <Icon style={styles.prefixIconRight} icon={Icons.INFO} />
            </View>

            <View style={styles.inputView}>
              <Icon style={styles.prefixIconLeft} icon={Icons.IDENTITY} />
              <TextInput
                style={styles.input}
                value={data.refNo}
                onChangeText={onCaseRefChange}
                placeholder={contents('caseReferencePlaceholder')}
                keyboardType="default"
              />
              <Icon style={styles.prefixIconRight} icon={Icons.INFO} />
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegisterClaim}>
              <Text style={styles.registerButtonText}>
                {contents('registerClaimButton')}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.trackClaimContainer}>
            <View style={styles.circle}>
              <Icon icon={Icons.TIMELINE} style={styles.trackClaimIconLeft} />
            </View>
            <View style={styles.trackClaimTextSection}>
              <Text style={styles.trackClaim}>
                {contents('trackYourClaim')}
              </Text>
              <Text style={styles.trackClaimDescription}>
                {contents('trackClaimDescription')}
              </Text>
            </View>
            <View style={styles.rightCircle}>
              <Icon
                icon={Icons.RIGHT_ARROW}
                style={styles.trackClaimIconRight}
              />
            </View>
          </View>
        </View>

        <Text style={styles.otherServicesHeader}>
          {contents('otherServicesHeader')}
        </Text>
        <Text style={styles.otherServicesDescription}>
          {contents('otherServicesDescription')}
        </Text>
        <View style={styles.otherServicesContainer}>
          {otherServices.map(service => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <View style={styles.serviceIconCircle}>
                <Icon icon={service.icon} style={styles.serviceIcon} />
              </View>
              <Text style={styles.serviceText}>{service.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(ClaimInsuranceScreen);
