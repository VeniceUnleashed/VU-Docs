---
title: PolynomialOperatorData
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PolynomialOperatorData()                                                          | Create a new instance of this container type.                                                                                       |
| PolynomialOperatorData(PolynomialOperatorData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PolynomialOperatorData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [PolynomialOperatorData](PolynomialOperatorData).                      |
| PolynomialOperatorData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [PolynomialOperatorData](PolynomialOperatorData).        |
| PolynomialOperatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PolynomialOperatorData](PolynomialOperatorData). |

## Properties

| Name           | Type                                       | Description |
| -------------- | ------------------------------------------ | ----------- |
| firstOperand   | [PolynomialTempData](PolynomialTempData)   |             |
| secondOperand  | [PolynomialTempData](PolynomialTempData)   |             |
| operation      | [PolynomialOperation](PolynomialOperation) |             |
| minClampResult | number                                     |             |
| maxClampResult | number                                     |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PolynomialOperatorData](PolynomialOperatorData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PolynomialOperatorData](PolynomialOperatorData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
