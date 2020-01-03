---
title: MaterialPropertySoundData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                 | Description                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialPropertySoundData()                                                                                 | Create a new instance of this container type.                                                                                                                    |
| MaterialPropertySoundData(MaterialPropertySoundData other)                                                  | Create a reference copy of an instance of the same type.                                                                                                         |
| MaterialPropertySoundData([PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) to [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata/). |
| MaterialPropertySoundData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata/).               |
| MaterialPropertySoundData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata/).                        |

## Properties

| Name            | Type                                                         | Description |
| --------------- | ------------------------------------------------------------ | ----------- |
| impactSound     | [SoundAsset](/vext/ref/fb/soundasset/)                                     |             |
| scrapeSound     | [SoundAsset](/vext/ref/fb/soundasset/)                                     |             |
| scrapeLength    | number                                                       |             |
| soldierSettings | [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings/) |             |
| softness        | number                                                       |             |
| materialSoundId | number                                                       |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertySoundData](/vext/ref/fb/materialpropertysounddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
