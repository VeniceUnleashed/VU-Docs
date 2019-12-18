---
title: ConsumablesLevelDescriptionComponent (Frostbite Container)
---
### Base Classes

[LevelDescriptionComponent](LevelDescriptionComponent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                        | Description                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ConsumablesLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                      |
| ConsumablesLevelDescriptionComponent(ConsumablesLevelDescriptionComponent other)                   | Create a reference copy of an instance of the same type.                                                                                                           |
| ConsumablesLevelDescriptionComponent([LevelDescriptionComponent](LevelDescriptionComponent) other) | Upcast an instance of type [LevelDescriptionComponent](LevelDescriptionComponent) to [ConsumablesLevelDescriptionComponent](ConsumablesLevelDescriptionComponent). |
| ConsumablesLevelDescriptionComponent([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ConsumablesLevelDescriptionComponent](ConsumablesLevelDescriptionComponent).    |

## Properties

| Name        | Type                         | Description |
| ----------- | ---------------------------- | ----------- |
| consumables | [Consumable](Consumable)\[\] |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ConsumablesLevelDescriptionComponent](ConsumablesLevelDescriptionComponent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ConsumablesLevelDescriptionComponent](ConsumablesLevelDescriptionComponent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
