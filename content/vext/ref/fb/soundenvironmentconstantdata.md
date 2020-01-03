---
title: SoundEnvironmentConstantData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| SoundEnvironmentConstantData()                                                          | Create a new instance of this container type.                                                                                                   |
| SoundEnvironmentConstantData(SoundEnvironmentConstantData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| SoundEnvironmentConstantData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata/).                                      |
| SoundEnvironmentConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata/). |

## Properties

| Name                                     | Type   | Description |
| ---------------------------------------- | ------ | ----------- |
| humanPlayerSoldierMovementVolumeOverride | number |             |
| memoryTime                               | number |             |
| minimumLoudness                          | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
