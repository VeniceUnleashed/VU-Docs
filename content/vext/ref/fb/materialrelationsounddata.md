---
title: MaterialRelationSoundData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                 | Description                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialRelationSoundData()                                                                                 | Create a new instance of this container type.                                                                                                                    |
| MaterialRelationSoundData(MaterialRelationSoundData other)                                                  | Create a reference copy of an instance of the same type.                                                                                                         |
| MaterialRelationSoundData([PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) to [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata/). |
| MaterialRelationSoundData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata/).               |
| MaterialRelationSoundData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata/).                        |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| impactSound  | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| scrapeSound  | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| scrapeLength | number                   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationSoundData](/vext/ref/fb/materialrelationsounddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
