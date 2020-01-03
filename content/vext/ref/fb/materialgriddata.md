---
title: MaterialGridData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| MaterialGridData()                                                          | Create a new instance of this container type.                                                                           |
| MaterialGridData(MaterialGridData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| MaterialGridData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MaterialGridData](MaterialGridData).                                      |
| MaterialGridData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialGridData](MaterialGridData). |

## Properties

| Name                 | Type                                                             | Description |
| -------------------- | ---------------------------------------------------------------- | ----------- |
| defaultMaterial      | [MaterialContainerPair](MaterialContainerPair)                   |             |
| materialPairs        | [MaterialContainerPair](MaterialContainerPair)\[\]               |             |
| materialIndexMap     | number\[\]                                                       |             |
| defaultMaterialIndex | number                                                           |             |
| materialProperties   | [MaterialRelationPropertyPair](MaterialRelationPropertyPair)\[\] |             |
| interactionGrid      | [MaterialInteractionGridRow](MaterialInteractionGridRow)\[\]     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialGridData](MaterialGridData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialGridData](MaterialGridData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
