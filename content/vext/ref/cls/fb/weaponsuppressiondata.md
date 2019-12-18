---
title: WeaponSuppressionData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| WeaponSuppressionData()                                                          | Create a new instance of this container type.                                                                                     |
| WeaponSuppressionData(WeaponSuppressionData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| WeaponSuppressionData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponSuppressionData](WeaponSuppressionData). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| maxMultiplier | number |             |
| minMultiplier | number |             |
| minDistance   | number |             |
| maxDistance   | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponSuppressionData](WeaponSuppressionData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponSuppressionData](WeaponSuppressionData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
