import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, KeyboardAvoidingView, Platform, SafeAreaView, TextInput } from 'react-native';
import Constants from 'expo-constants'

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
          <ScrollView keyboardDismissMode='interactive'>
            <Text style={styles.heading}>
              Registration
            </Text>
            <Text style={styles.label}>
              First name
            </Text>
            <TextInput style={styles.input}
            />
            <Text style={styles.label}>
              Last name
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.label}>
              Address
            </Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>
              Zip code / Area code / Postal code
            </Text>
            <TextInput style={styles.input}
            keyboardType='phone-pad' />

            <Text style={styles.label}>
              City
            </Text>
            <TextInput style={styles.input} />


            <Text style={styles.label}>
              Email
            </Text>
            <TextInput style={styles.input} keyboardType='email-address' />
            <Text style= {styles.label}>
              Phone
            </Text>
            <TextInput style={styles.input}
            keyboardType='phone-pad' />
            <Text style={styles.label}>
              Username
            </Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>
              Password
            </Text>
            <TextInput style={styles.input}
            secureTextEntry />
            <Button title='Submit' />

         </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  label: {
    margin: 8,
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#F0F0F0',
    backgroundColor: '#FAFAFA',
  },
});
