import RadialGradient from 'react-native-radial-gradient';


<RadialGradient style={{ width: 200, height: 200 }}
    colors={['black', 'green', 'blue', 'red']}
    stops={[0.1, 0.4, 0.3, 0.75]}
    center={[100, 100]}
    radius={200}>
    {children}
</RadialGradient>