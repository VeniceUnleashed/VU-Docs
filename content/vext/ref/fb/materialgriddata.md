---
title: MaterialGridData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| MaterialGridData()                                                          | Create a new instance of this container type.                                                                           |
| MaterialGridData(MaterialGridData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| MaterialGridData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [MaterialGridData](/vext/ref/fb/materialgriddata/).                                      |
| MaterialGridData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialGridData](/vext/ref/fb/materialgriddata/). |

## Properties

| Name                 | Type                                                             | Description |
| -------------------- | ---------------------------------------------------------------- | ----------- |
| defaultMaterial      | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/)                   |             |
| materialPairs        | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/)\[\]               |             |
| materialIndexMap     | number\[\]                                                       |             |
| defaultMaterialIndex | number                                                           |             |
| materialProperties   | [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair/)\[\] |             |
| interactionGrid      | [MaterialInteractionGridRow](/vext/ref/fb/materialinteractiongridrow/)\[\]     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialGridData](/vext/ref/fb/materialgriddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialGridData](/vext/ref/fb/materialgriddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
