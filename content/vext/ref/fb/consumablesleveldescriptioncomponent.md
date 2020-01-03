---
title: ConsumablesLevelDescriptionComponent
---
### Base Classes

[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                        | Description                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ConsumablesLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                      |
| ConsumablesLevelDescriptionComponent(ConsumablesLevelDescriptionComponent other)                   | Create a reference copy of an instance of the same type.                                                                                                           |
| ConsumablesLevelDescriptionComponent([LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) other) | Upcast an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) to [ConsumablesLevelDescriptionComponent](/vext/ref/fb/consumablesleveldescriptioncomponent/). |
| ConsumablesLevelDescriptionComponent([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConsumablesLevelDescriptionComponent](/vext/ref/fb/consumablesleveldescriptioncomponent/).    |

## Properties

| Name        | Type                         | Description |
| ----------- | ---------------------------- | ----------- |
| consumables | [Consumable](/vext/ref/fb/consumable/)\[\] |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ConsumablesLevelDescriptionComponent](/vext/ref/fb/consumablesleveldescriptioncomponent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ConsumablesLevelDescriptionComponent](/vext/ref/fb/consumablesleveldescriptioncomponent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
