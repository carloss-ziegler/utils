export function formatBRLCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function replaceCurrencyToNumber(value: string) {
  return parseFloat(
    value.replace("R$", "").replace(/\./g, "").replace(",", ".")
  );
}

export function formatCurrencyWhileTyping(value: string) {
  let newText = value.replace(/\D/g, "").replace(/^0+/, "");

  if (newText.length < 3) {
    newText = newText.padStart(3, "0");
  }

  newText = newText.slice(0, -2) + "," + newText.slice(-2);

  let partes = newText.split(",");
  partes[0] = partes[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  newText = partes.join(",");

  return newText;
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getInitials(name: string) {
  if (!name) return "";
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export function removeSpecialCharacters(value: string) {
  return value.replace(/\D/g, "");
}

export function formatCpfWhileTyping(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function formatCnpjWhileTyping(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}

export function maskPhoneWithDDD(phone: string) {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

export function maskMailSecret(mail: string) {
  return mail.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1*****@$2");
}

export function maskPhoneSecret(phone: string) {
  var ddd = "(" + phone.substring(0, 2) + ")";
  var secret =
    ddd +
    " " +
    "*".repeat(phone.length - 8) +
    "-" +
    phone.substring(phone.length - 4);
  return secret;
}

export function formatPhoneWhileTyping(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
}

export function getMinutesAndSecondsFromDate(date: Date) {
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function hideCpfOrCnpj(value: string) {
  return value.length === 11
    ? value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "***.$2.$3-**")
    : value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "**.$2.***/$4-**");
}

export function formatCardNumber(value: string) {
  return value.replace(/(\d{4})(?=\d)/g, "$1 ");
}

export function removeWhiteSpace(value: string) {
  return value.replace(/\s/g, "");
}

export function formatDigitableLine(linha: string): string {
  return (
    linha.slice(0, 5) +
    "." +
    linha.slice(5, 10) +
    " " +
    linha.slice(10, 15) +
    "." +
    linha.slice(15, 21) +
    " " +
    linha.slice(21, 26) +
    "." +
    linha.slice(26, 32) +
    " " +
    linha.slice(32, 33) +
    " " +
    linha.slice(33, 47)
  );
}

export function addDaysToDate(date: Date, days: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate
    .toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .toUpperCase();
}
