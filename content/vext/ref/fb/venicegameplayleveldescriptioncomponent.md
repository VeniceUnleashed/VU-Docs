---
title: VeniceGameplayLevelDescriptionComponent
---
### Base Classes

[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                           | Description                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| VeniceGameplayLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                            |
| VeniceGameplayLevelDescriptionComponent(VeniceGameplayLevelDescriptionComponent other)                | Create a reference copy of an instance of the same type.                                                                                                                 |
| VeniceGameplayLevelDescriptionComponent([LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) other) | Upcast an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) to [VeniceGameplayLevelDescriptionComponent](/vext/ref/fb/venicegameplayleveldescriptioncomponent/). |
| VeniceGameplayLevelDescriptionComponent([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceGameplayLevelDescriptionComponent](/vext/ref/fb/venicegameplayleveldescriptioncomponent/).    |

## Properties

| Name                               | Type | Description |
| ---------------------------------- | ---- | ----------- |
| allowParachuteFromMobileSpawnpoint | bool |             |

## Methods

| Type                                                                               | Name            | Parameters                                     |
| ---------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceGameplayLevelDescriptionComponent](/vext/ref/fb/venicegameplayleveldescriptioncomponent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceGameplayLevelDescriptionComponent](/vext/ref/fb/venicegameplayleveldescriptioncomponent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
