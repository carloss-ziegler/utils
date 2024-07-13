**Utils Library**

A library of utility functions for common operations in JavaScript and TypeScript.

**Installation**

You can install this library using npm:

```bash
npm install @t-alpha/utils
```

**Functions**

**formatBRLCurrency**

Formats a number as Brazilian Real currency.

**Input:**
```typescript
const value = 1234.56;
```

**Output:**
```typescript
const formattedValue = formatBRLCurrency(value);
console.log(formattedValue); // "R$ 1.234,56"
```

**replaceCurrencyToNumber**

Converts a Brazilian Real currency string to a number.

**Input:**
```typescript
const currency = "R$ 1.234,56";
```

**Output:**
```typescript
const numberValue = replaceCurrencyToNumber(currency);
console.log(numberValue); // 1234.56
```

**formatCurrencyWhileTyping**

Formats a string as currency while typing.

**Input:**
```typescript
const value = "123456";
```

**Output:**
```typescript
const formattedValue = formatCurrencyWhileTyping(value);
console.log(formattedValue); // "1.234,56"
```

**getInitials**

Gets the initials from a name.

**Input:**
```typescript
const name = "John Doe";
```

**Output:**
```typescript
const initials = getInitials(name);
console.log(initials); // "JD"
```

**formatCpfWhileTyping**

Formats a CPF number while typing.

**Input:**
```typescript
const cpf = "12345678909";
```

**Output:**
```typescript
const formattedCpf = formatCpfWhileTyping(cpf);
console.log(formattedCpf); // "123.456.789-09"
```

**maskPhoneWithDDD**

Masks a phone number with DDD.

**Input:**
```typescript
const phone = "11987654321";
```

**Output:**
```typescript
const maskedPhone = maskPhoneWithDDD(phone);
console.log(maskedPhone); // "(11) 98765-4321"
```

**hideCpfOrCnpj**

Hides parts of a CPF or CNPJ number.

**Input:**
```typescript
const cpf = "12345678909";
```

**Output:**
```typescript
const hiddenCpf = hideCpfOrCnpj(cpf);
console.log(hiddenCpf); // "***.456.789-**"
```

**Input:**
```typescript
const cnpj = "12345678000195";
```

**Output:**
```typescript
const hiddenCnpj = hideCpfOrCnpj(cnpj);
console.log(hiddenCnpj); // "**.456.***/0001-**"
```

**formatDigitableLine**

Formats a string as a digitable line.

**Input:**
```typescript
const linha = "12345678901234567890123456789012345678901234";
```

**Output:**
```typescript
const formattedLinha = formatDigitableLine(linha);
console.log(formattedLinha); // "12345.67890 12345.678901 23456.789012 3 45678901234"
```
