---
title: PolynomialOperatorData
---
### Base Classes

[EvaluatorData](/vext/ref/fb/evaluatordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PolynomialOperatorData()                                                          | Create a new instance of this container type.                                                                                       |
| PolynomialOperatorData(PolynomialOperatorData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PolynomialOperatorData([EvaluatorData](/vext/ref/fb/evaluatordata/) other)                      | Upcast an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata/) to [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata/).                      |
| PolynomialOperatorData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata/).        |
| PolynomialOperatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata/). |

## Properties

| Name           | Type                                       | Description |
| -------------- | ------------------------------------------ | ----------- |
| firstOperand   | [PolynomialTempData](/vext/ref/fb/polynomialtempdata/)   |             |
| secondOperand  | [PolynomialTempData](/vext/ref/fb/polynomialtempdata/)   |             |
| operation      | [PolynomialOperation](/vext/ref/fb/polynomialoperation/) |             |
| minClampResult | number                                     |             |
| maxClampResult | number                                     |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PolynomialOperatorData](/vext/ref/fb/polynomialoperatordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
