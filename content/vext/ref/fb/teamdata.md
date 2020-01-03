---
title: TeamData
---
### Base Classes

[TeamAsset](/vext/ref/fb/teamasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| TeamData()                                                          | Create a new instance of this container type.                                                           |
| TeamData(TeamData other)                                            | Create a reference copy of an instance of the same type.                                                |
| TeamData([TeamAsset](/vext/ref/fb/teamasset/) other)                              | Upcast an instance of type [TeamAsset](/vext/ref/fb/teamasset/) to [TeamData](/vext/ref/fb/teamdata/).                              |
| TeamData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [TeamData](/vext/ref/fb/teamdata/).                                      |
| TeamData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TeamData](/vext/ref/fb/teamdata/). |

## Properties

| Name                 | Type                                                       | Description |
| -------------------- | ---------------------------------------------------------- | ----------- |
| soldier              | [SoldierBlueprint](/vext/ref/fb/soldierblueprint/)                       |             |
| faction              | [FactionId](/vext/ref/fb/factionid/)                                     |             |
| soldierCustomization | [SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset/)\[\] |             |
| vehicleCustomization | [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset/)\[\] |             |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [TeamData](/vext/ref/fb/teamdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TeamData](/vext/ref/fb/teamdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
