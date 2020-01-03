---
title: WeaponSuppressionData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| WeaponSuppressionData()                                                          | Create a new instance of this container type.                                                                                     |
| WeaponSuppressionData(WeaponSuppressionData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| WeaponSuppressionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata/). |

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
| [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
