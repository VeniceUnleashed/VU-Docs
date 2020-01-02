---
title: SoundEnvironmentConstantData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| SoundEnvironmentConstantData()                                                          | Create a new instance of this container type.                                                                                                   |
| SoundEnvironmentConstantData(SoundEnvironmentConstantData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| SoundEnvironmentConstantData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoundEnvironmentConstantData](SoundEnvironmentConstantData).                                      |
| SoundEnvironmentConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundEnvironmentConstantData](SoundEnvironmentConstantData). |

## Properties

| Name                                     | Type   | Description |
| ---------------------------------------- | ------ | ----------- |
| humanPlayerSoldierMovementVolumeOverride | number |             |
| memoryTime                               | number |             |
| minimumLoudness                          | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundEnvironmentConstantData](SoundEnvironmentConstantData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundEnvironmentConstantData](SoundEnvironmentConstantData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
