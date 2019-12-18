---
title: GeographicalLevelDescriptionComponent (Frostbite Container)
---
### Base Classes

[LevelDescriptionComponent](LevelDescriptionComponent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                         | Description                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GeographicalLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                        |
| GeographicalLevelDescriptionComponent(GeographicalLevelDescriptionComponent other)                  | Create a reference copy of an instance of the same type.                                                                                                             |
| GeographicalLevelDescriptionComponent([LevelDescriptionComponent](LevelDescriptionComponent) other) | Upcast an instance of type [LevelDescriptionComponent](LevelDescriptionComponent) to [GeographicalLevelDescriptionComponent](GeographicalLevelDescriptionComponent). |
| GeographicalLevelDescriptionComponent([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GeographicalLevelDescriptionComponent](GeographicalLevelDescriptionComponent).    |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| geographicalData | [GeographicalData](GeographicalData) |             |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GeographicalLevelDescriptionComponent](GeographicalLevelDescriptionComponent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GeographicalLevelDescriptionComponent](GeographicalLevelDescriptionComponent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
