# Metric-Imperial Converter

A full-stack application that converts between metric and imperial units. Built as part of the freeCodeCamp Quality Assurance curriculum.

## 🚀 Features

- **Unit Conversions**: 
  - Volume: Gallons ↔ Liters
  - Distance: Miles ↔ Kilometers  
  - Weight: Pounds ↔ Kilograms

- **Input Formats**:
  - Whole numbers: `10L`
  - Decimals: `3.5mi`
  - Fractions: `1/2kg`
  - Fractional decimals: `5.4/3lbs`

- **Error Handling**:
  - Invalid units
  - Invalid numbers (double fractions)
  - Combined invalid input

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/metric-imperial-converter.git
cd metric-imperial-converter
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp sample.env .env
```

4. Start the server:
```bash
npm start
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

**Test Results**: ✅ 21/21 tests passing
- 16 unit tests
- 5 functional tests

## 🔗 API Usage

**Endpoint**: `GET /api/convert?input=<value>`

**Examples**:
- `/api/convert?input=10L` → Converts 10 liters to gallons
- `/api/convert?input=5mi` → Converts 5 miles to kilometers
- `/api/convert?input=1/2kg` → Converts 0.5 kg to pounds

**Response Format**:
```json
{
  "initNum": 10,
  "initUnit": "L",
  "returnNum": 2.64172,
  "returnUnit": "gal",
  "string": "10 liters converts to 2.64172 gallons"
}
```

## 🏗️ Project Structure

```
├── controllers/
│   └── convertHandler.js    # Conversion logic
├── routes/
│   └── api.js              # API routes
├── tests/
│   ├── 1_unit-tests.js     # Unit tests
│   └── 2_functional-tests.js # Functional tests
├── server.js               # Express server
└── package.json           # Dependencies
```

## 💡 Technologies Used

- **Backend**: Node.js, Express.js
- **Testing**: Mocha, Chai, Chai-HTTP
- **Environment**: dotenv

## 📚 freeCodeCamp Project

This project is part of the [freeCodeCamp Quality Assurance Certification](https://www.freecodecamp.org/learn/quality-assurance/).

## 📄 License

MIT License
