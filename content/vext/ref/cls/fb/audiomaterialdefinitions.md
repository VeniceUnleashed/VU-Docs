---
title: AudioMaterialDefinitions (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AudioMaterialDefinitions()                                                          | Create a new instance of this container type.                                                                                           |
| AudioMaterialDefinitions(AudioMaterialDefinitions other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AudioMaterialDefinitions([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AudioMaterialDefinitions](AudioMaterialDefinitions).                                      |
| AudioMaterialDefinitions([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AudioMaterialDefinitions](AudioMaterialDefinitions). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AudioMaterialDefinitions](AudioMaterialDefinitions) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AudioMaterialDefinitions](AudioMaterialDefinitions) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
