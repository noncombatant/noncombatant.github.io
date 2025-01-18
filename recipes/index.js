"use strict";

const parseQuantity = function(string) {
  const quantity = string.split(" ")
  return quantity
}

const toMetric = {
  "tbsp": [n => n * 15.0, "mL"],
  "tsp": [n => n * 5.0, "mL"],
  "cup": [n => n * 237.0, "mL"],
  "lb": [n => n * 0.45, "kg"],
  "in": [n => n * 2.54, "cm"],
  "°F": [n => n * 5.0 / 9.0 - 32, "°C"],
  "oz": [n => n * 28.35, "g"],
  "qt": [n => n, "L"],
}

const round = function(n) {
  const x = Math.round(n)
  return x !== 0 ? x : n
}

const convertToMetric = function(quantity) {
  try {
  const [q, unit] = [quantity[0], quantity[1]]
  const convert = toMetric[unit][0]
  return [round(convert(Number.parseFloat(q))), toMetric[unit][1]]
  } catch (Exception) {
    return undefined
  }
}

const convertAll = function(event) {
  const quantities = document.querySelectorAll("span.quant")
  for (const q of quantities) {
    const parsed = parseQuantity(q.innerText)
    const converted = convertToMetric(parsed)
    if (converted === undefined) {
      continue
    }
    
    const span = document.createElement("span")
    span.innerText = " (" + converted[0] + " " + converted[1] + ") "
    q.insertAdjacentElement("afterend", span)
  }
}

convertAll()
