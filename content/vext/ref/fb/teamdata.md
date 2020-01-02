---
title: TeamData
---
### Base Classes

[TeamAsset](TeamAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| TeamData()                                                          | Create a new instance of this container type.                                                           |
| TeamData(TeamData other)                                            | Create a reference copy of an instance of the same type.                                                |
| TeamData([TeamAsset](TeamAsset) other)                              | Upcast an instance of type [TeamAsset](TeamAsset) to [TeamData](TeamData).                              |
| TeamData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TeamData](TeamData).                                      |
| TeamData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TeamData](TeamData). |

## Properties

| Name                 | Type                                                       | Description |
| -------------------- | ---------------------------------------------------------- | ----------- |
| soldier              | [SoldierBlueprint](SoldierBlueprint)                       |             |
| faction              | [FactionId](FactionId)                                     |             |
| soldierCustomization | [SoldierCustomizationAsset](SoldierCustomizationAsset)\[\] |             |
| vehicleCustomization | [VehicleCustomizationAsset](VehicleCustomizationAsset)\[\] |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [TeamData](TeamData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TeamData](TeamData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
