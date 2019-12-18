---
title: VeniceGameplayLevelDescriptionComponent (Frostbite Container)
---
### Base Classes

[LevelDescriptionComponent](LevelDescriptionComponent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                           | Description                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| VeniceGameplayLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                            |
| VeniceGameplayLevelDescriptionComponent(VeniceGameplayLevelDescriptionComponent other)                | Create a reference copy of an instance of the same type.                                                                                                                 |
| VeniceGameplayLevelDescriptionComponent([LevelDescriptionComponent](LevelDescriptionComponent) other) | Upcast an instance of type [LevelDescriptionComponent](LevelDescriptionComponent) to [VeniceGameplayLevelDescriptionComponent](VeniceGameplayLevelDescriptionComponent). |
| VeniceGameplayLevelDescriptionComponent([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VeniceGameplayLevelDescriptionComponent](VeniceGameplayLevelDescriptionComponent).    |

## Properties

| Name                               | Type | Description |
| ---------------------------------- | ---- | ----------- |
| allowParachuteFromMobileSpawnpoint | bool |             |

## Methods

| Type                                                                               | Name            | Parameters                                     |
| ---------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceGameplayLevelDescriptionComponent](VeniceGameplayLevelDescriptionComponent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VeniceGameplayLevelDescriptionComponent](VeniceGameplayLevelDescriptionComponent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
